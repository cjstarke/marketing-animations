import Head from 'next/head'

import metaData from '../data/metadata.json'



const domain =
  process.env.NEXT_PUBLIC_APP_ENV !== 'production'
    ? `${process.env.NEXT_PUBLIC_APP_ENV}.convergemarketing.com`
    : '/convergemarketing.com'
export const metadata = {
  metadataBase: new URL(`https://${domain}`),
}
export const generateCanonUrl = (slug: string) => {
  const url =
    slug === 'home'
      ? `${metadata.metadataBase}`
      : `${metadata.metadataBase}${slug}/`
  return url
}

export const generateMeta = (page: string) => {
  const pageMetaData = metaData.filter((meta) => meta.page === page)[0]
  const slug = page ? `/${page}` : ''
  const url =
    page === 'home'
      ? `${metadata.metadataBase}`
      : `${metadata.metadataBase}${slug}`
  return (
    pageMetaData && (
      <Head>
        <title>{pageMetaData.title}</title>
        <meta name="description" content={pageMetaData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageMetaData.title} />
        <meta property="og:description" content={pageMetaData.description} />
        <meta property="og:image" content={pageMetaData.ogImage} />
        <meta property="og:image:alt" content="converge marketing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={pageMetaData.title} />
        <meta name="twitter:description" content={pageMetaData.description} />
        <meta name="twitter:image" content={pageMetaData.ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={generateCanonUrl(page)} />
      </Head>
    )
  )
}
