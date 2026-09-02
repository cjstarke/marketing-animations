import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import brandData from '../data/brand.json'
const env = process.env.NEXT_PUBLIC_APP_ENV

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          src="https://cmp.osano.com/FMy59nP1cQ/62b07515-f9c1-4b00-9c89-03e099880cb3/osano.js"
          strategy="beforeInteractive"
          id="osano-cmp"
        />

        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${brandData.gtmId}');
          `,
          }}
        />
      </Head>
      <body>

        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${brandData.gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <noscript>
          <img src="https://api.trustedform.com/ns.gif" alt="trusted form" />
        </noscript>

        <Main />
        <NextScript />

        <Script
          src={`https://sdk.helixbi.io/cd_v3.js?ct_a=${brandData.appId}&ct_u=${brandData.unifier}`}
          strategy="afterInteractive"
          id="convergetrackcode"
        />
      </body>
    </Html>
  )
}
