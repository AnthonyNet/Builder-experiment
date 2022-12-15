slideTime = 10000;
pos = 1;

$(document).ready(function(){
    backgroundSlide = $('#slideshow__main').lightSlider({
        gallery: false,
        item: 1,
        controls: false,
        list: false,
        loop:true,
        pager: true,
        thumbItem: 1,
        enableDrag: true,
        enableTouch: true,
        autoWidth: false,
        adaptiveHeight: true,
        auto: true,
        slideMargin: 300,
        pause: slideTime,
        onBeforeSlide: function(){
        }
    });
    backgroundSlide = $('.slideshowflex').lightSlider({
        gallery: false,
        item: 3,
        controls: false,
        list: false,
        loop:false,
        pager: true,
        thumbItem: 1,
        enableDrag: false,
        enableTouch: false,
        auto: false,
        slideMargin: 50,
        pause: slideTime,
        loop:false,
        responsive:[
            {
                breakpoint: 1380,
                settings: {
                    item: 2,
                    loop:true,
                    enableDrag: true,
                    enableTouch: true,
                    controls: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    loop:true,
                    enableDrag: true,
                    enableTouch: true,
                    item: 1,
                    controls: true,
                }
            }
        ],
        onBeforeSlide: function(){
        }
    });
});

function slideTo(pos){
    backgroundSlide.goToSlide(pos);
    textSlide.goToSlide(pos);
    $('#buttons__slide button.active').removeClass('active');
    $('#buttons__slide button:nth-child('+pos+')').addClass('active');
}

function slidePrev(){
    backgroundSlide.goToPrevSlide()
    textSlide.goToPrevSlide();
}

function slideNext(){
    backgroundSlide.goToNextSlide()
    textSlide.goToNextSlide();
}