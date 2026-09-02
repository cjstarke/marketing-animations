import Head from 'next/head'

const ADOBE_WIDGET_ID =
  'CBFCIBAA3AAABLblqZhA1EVA_-4GdEf7BKCG8eKTCTaMunUc-sxiyZUv3TWknEGQgdCCtoNhajUceY09Pbn0*'

export default function MarketingPartnerAgreementEsign() {
  return (
    <>
      <Head>
        <title>Sign – Converge Marketing Partner Agreement</title>
        <meta name="description" content="Sign the Converge Marketing Partner Agreement electronically." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`.osano-cm-window { display: none !important; }`}</style>
      </Head>

      <div style={{ height: '100vh', width: '100vw' }}>
        <iframe
          src={`https://na4.documents.adobe.com/public/esignWidget?wid=${ADOBE_WIDGET_ID}&hosted=false`}
          style={{
            border: 0,
            display: 'block',
            width: '100%',
            height: '100%',
          }}
          title="Marketing Partner Agreement – E-Signature"
        />
      </div>
    </>
  )
}

