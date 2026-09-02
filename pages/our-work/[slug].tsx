import { getArticlesForBrand } from '@converge/utils'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import CaseStudySection1 from '../../components/CaseStudySection1'
import CaseStudySection2 from '../../components/CaseStudySection2'
import CaseStudySection3 from '../../components/CaseStudySection3'
import NewsAndInsightsSection from '../../components/NewsAndInsightsSection'
import OurWorkThumbnail from '../../components/OurWorkThumbnail'
import { TopMargin } from '../../components/TopMargin'
import { useConvergePage } from '../../contexts/ConvergePageContext'
import { NavBarStatus } from '../../types'
import caseStudies from '../../data/caseStudies.json'

const OurWorkPost = ({
  caseResponse,
  allArticlesResponse,
  allCasesResponse,
}: any) => {
  const { setCurrentPage, setNavStatus } = useConvergePage()
  const articles = allArticlesResponse.articles

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('case-study')
  }, [setNavStatus, setCurrentPage])

  const filteredCases = allCasesResponse.filter(
    (caseStudy: any) => caseStudy.slug !== caseResponse[0].slug
  )

  // use the caseresponse schema to build the meta tags
  const pageMetaData = caseResponse[0]
  const domain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'convergemarketing.com'
  const currentUrl = `https://${domain}/our-work/${pageMetaData.slug}/`
  const ogImage =
    'https://converge-strapi-prod.s3.amazonaws.com/convergeog_03fb18914a.webp'

  return (
    <>
      <Head>
        <title>{pageMetaData.subHeading}</title>
        <meta name="description" content={pageMetaData.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageMetaData.subHeading} />
        <meta property="og:description" content={pageMetaData.summary} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="converge marketing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={pageMetaData.subHeading} />
        <meta name="twitter:description" content={pageMetaData.summary} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={currentUrl} />
      </Head>

      <TopMargin />

      <div
        id="case-study-sections"
        className="w-full flex justify-center px-6 lg:px-6 xl:px-10 py-14 lg:py-20 text-pretty"
        data-component-type="sections"
        data-component-vis="true"
      >
        <div className="w-full max-w-md flex flex-col items-center lg:max-w-screen-xl lg:items-start lg:justify-center">
          <h1
            className="text-4xl lg:text-5xl mb-2 text-pretty"
            dangerouslySetInnerHTML={{
              __html: caseResponse[0].heading,
            }}
          ></h1>
          <h4
            className="w-full text-xl mb-6"
            dangerouslySetInnerHTML={{
              __html: caseResponse[0].subHeading,
            }}
          ></h4>
          <Image
            src={caseResponse[0].heroImage}
            alt={caseResponse[0].heroImageAlt}
            height={10}
            width={10}
            className="w-full mb-6"
          ></Image>
          <CaseStudySection1
            heading={caseResponse[0].section1Heading}
            text={
              caseResponse[0].section1Text ? caseResponse[0].section1Text : ''
            }
          />
          <CaseStudySection2
            heading={caseResponse[0].section2Heading}
            text={caseResponse[0].section2Text}
            image={caseResponse[0].sideImage}
            imageAlt={caseResponse[0].sideImageAlt}
          />
          <CaseStudySection3
            heading={caseResponse[0].section3Heading}
            text={caseResponse[0].section3Text}
            numbers={caseResponse[0].numbers}
          />
        </div>
      </div>
      <NewsAndInsightsSection NewsAndInsightsCards={articles} />
    </>
  )
}

export async function getStaticPaths() {
  // get all articles for a brand from Strapi
  // and dynamically generate pages for each
  // article using the slug
  // const articlesResponse = await getArticlesForBrand('Converge Marketing')
  const allCases = caseStudies

  return {
    paths: [
      ...caseStudies.map((caseStudy: any) => {
        return {
          params: {
            slug: caseStudy.slug,
          },
        }
      }),
    ],
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  // context is passed to getStaticProps by getStaticPaths
  return {
    props: {
      caseResponse: caseStudies.filter(
        (study) => study.slug === context.params.slug
      ),
      allArticlesResponse: await getArticlesForBrand('Converge Marketing'),
      allCasesResponse: caseStudies,
    },
  }
}

export default OurWorkPost
