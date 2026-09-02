import { getArticlesForBrand } from '@converge/utils'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { useConvergePage } from '../../contexts/ConvergePageContext'
import { NavBarStatus } from '../../types'
import PageTitle from '../../components/PageTitle'
import { InsightSearch } from '../../components/InsightSearch'
import SeeOurWorkSection from '../../components/SeeOurWorkSection'
import Head from 'next/head'

const Insights = ({ allArticlesResponse }: any) => {
  const { setCurrentPage, setNavStatus } = useConvergePage()

  const articles = allArticlesResponse.articles
  const internalArticles = articles.filter((article: any) => {
    return !article.externalUrl
  })
  const pageMetaData = internalArticles[0]
  const domain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'convergemarketing.com'
  const currentUrl = `https://${domain}/insights/`
  const ogImage =
    'https://converge-strapi-prod.s3.amazonaws.com/convergeog_03fb18914a.webp'

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('insights')
  }, [setNavStatus, setCurrentPage])

  return (
    <>
      <Head>
        <title>News & Insights | Converge</title>
        <meta name="description" content={pageMetaData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="News & Insights | Converge" />
        <meta property="og:description" content={pageMetaData.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="converge marketing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content="News & Insights | Converge" />
        <meta name="twitter:description" content={pageMetaData.description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={currentUrl} />
      </Head>
      <div className="w-full overflow-clip">
        <div className="w-full flex justify-center">
          <div className="max-w-3xl lg:max-w-screen-2xl w-full mt-28 flex justify-start lg:justify-end lg:mt-36">
            <h1 className="font-bold text-7xl 3sm:text-8xl sm:text-10xl sm:leading-eight -ml-2 sm:-ml-3 lg:ml-0 lg:-mr-5 lg:text-15xl leading-eight 3sm:leading-eight lg:leading-[.9]">
              Insights
              <br />
              <span className="ml-12 lg:-ml-36 whitespace-nowrap">& news</span>
            </h1>
          </div>
        </div>
      </div>
      <InsightSearch articles={articles} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allArticlesResponse: await getArticlesForBrand('Converge Marketing'),
    },
  }
}

export default Insights
