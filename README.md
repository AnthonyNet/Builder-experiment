# F13 Portal

## Development

- php8.2
- vscode extension for compile scss: <https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass>

## Build

### Install PHP 8.2

```bash
sudo dnf update -y
sudo dnf install epel-release -y
sudo dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm -y
sudo dnf module list php
sudo dnf module reset php
sudo dnf module enable php:remi-8.2
sudo dnf install php -y
php --version
```

### Install SASS and generate css

```bash
sudo dnf install nodejs -y
npm install -g sass
sass --update scss/style.scss:public/css/style.css
sass --update scss/style.scss:public/css/min/style.min.css --style compressed
```

### Install and configure nginx

```bash
sudo dnf update -y
sudo dnf install nginx certbot -y
certbot run --nginx -d f13cybertech.cz -d www.f13cybertech.cz
cat > /etc/nginx/sites-available/www.f13cybertech.cz.conf <<"EOF"
server {
  server_name www.f13cybertech.cz f13cybertech.cz;
  access_log /var/log/nginx/vhost/www.f13cybertech.com-access.log;
  error_log /var/log/nginx/vhost/www.f13cybertech.com-error.log;

  listen 443 ssl;
  ssl_certificate /etc/letsencrypt/live/app06.f13cybertech.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/app06.f13cybertech.com/privkey.pem;
  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

  root /var/www/f13cybertech.cz;
  index index.html index.htm;

  location / {
    default_type "text/html";
    try_files $uri.html $uri $uri/ =404;
  }

  location = /favicon.ico {
      log_not_found off;
      access_log off;
  }

  location = /robots.txt {
      allow all;
      log_not_found off;
      access_log off;
  }

#  location ~ /.* {
#      deny all;
#  }

  location ~* ^.+.(js|css|swf|xml|txt|ogg|ogv|svg|svgz|eot|otf|woff|mp4|ttf|rss|atom|jpg|jpeg|gif|png|ico|zip|tgz|gz|rar|bz2|doc|xls|exe|ppt|tar|mid|midi|wav|bmp|rtf)$ {
     access_log off;
     log_not_found off;
     expires 30d;
     add_header Pragma no-cache;
     add_header Cache-Control "public";
  }

}

server {
  if ($host = www.f13cybertech.cz) {
      return 301 https://$host$request_uri;
  } # managed by Certbot

  if ($host = f13cybertech.cz) {
      return 301 https://$host$request_uri;
  } # managed by Certbot

  server_name www.f13cybertech.cz f13cybertech.cz;
  listen 80;
  return 404;
}
EOF
ln -s /etc/nginx/sites-available/www.f13cybertech.cz.conf /etc/nginx/sites-enabled/www.f13cybertech.cz.conf
nginx -t
systemctl enable --now nginx
systemctl status nginx
```

## Deploy

```bash
ssh-keygen -t ed25519 -C "adam@f13cybertech.com"
git clone git@git.f13cybertech.com:f13-apps/f13-portal.git /var/www/f13cybertech.cz
chmod 755 /var/www/f13cybertech.cz/
cd /var/www/f13cybertech.cz
sass --update scss/style.scss:public/css/style.css
sass --update scss/style.scss:public/css/min/style.min.css --style compressed
find . -type f -exec chmod 644 -- {} +
find . -type d -exec chmod 755 -- {} +
```
