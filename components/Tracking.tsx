export function Tracking() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        type='text/partytown'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_KEY}`}
      />
      <script
        type='text/partytown'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA4_KEY}', {
                page_path: window.location.pathname,
            });
        `,
        }}
      />

    </>
  )
}