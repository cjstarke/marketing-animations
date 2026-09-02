import { format, parseISO } from 'date-fns'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  ParagraphSection,
  MediaLinksSection,
  ImageSection,
  CalloutSection,
  ChecklistSection,
} from '../../components/article-sections'
import NewsAndInsightsSection from '../../components/NewsAndInsightsSection'
import SeeOurWorkSection from '../../components/SeeOurWorkSection'
import { TopMargin } from '../../components/TopMargin'
import { useConvergePage } from '../../contexts/ConvergePageContext'
import { NavBarStatus } from '../../types'
import { getArticleBySlug, getArticlesForBrand } from '../../utils/strapi'
import RelatedSection from '../../components/RelatedSection'
import ContactFormLong from '../../components/ContactFormLong'

const InsightPost = ({ articleResponse, allArticlesResponse }: any) => {
  const { setCurrentPage, setNavStatus } = useConvergePage()

  const article = articleResponse.articles[0]
  const articles = allArticlesResponse.articles
  const normalDateString = format(parseISO(article.date), 'MMMM dd, yyyy')

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('insight-post')
  }, [setNavStatus, setCurrentPage])

  // Helper function to render section components based on __typename
  const renderSection = (section: any, index: number) => {
    const { __typename, ...sectionProps } = section

    switch (__typename) {
      case 'ComponentSectionsParagraph':
        return <ParagraphSection key={index} {...sectionProps} />
      case 'ComponentSectionsMedialinks':
        return <MediaLinksSection key={index} {...sectionProps} />
      case 'ComponentSectionsImage':
        return <ImageSection key={index} {...sectionProps} />
      case 'ComponentSectionsCallout':
        return <CalloutSection key={index} {...sectionProps} />
      case 'ComponentSectionsChecklist':
        return <ChecklistSection key={index} {...sectionProps} />
      default:
        return null
    }
  }

  // use the articles schema to build the meta tags
  const pageMetaData = articleResponse.articles[0]
  const domain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'convergemarketing.com'
  const currentUrl = `https://${domain}/insights/${pageMetaData.slug}/`
  const ogImage =
    'https://converge-strapi-prod.s3.amazonaws.com/convergeog_03fb18914a.webp'

  return (
    <>
      <Head>
        <title>{pageMetaData.title}</title>
        <meta name="description" content={pageMetaData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageMetaData.title} />
        <meta property="og:description" content={pageMetaData.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="converge marketing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={pageMetaData.title} />
        <meta name="twitter:description" content={pageMetaData.description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={currentUrl} />
      </Head>

      <TopMargin />

      <Image
        src={article.cover.url}
        alt={articleResponse.imageAlt}
        height={10}
        width={10}
        className="w-full"
      />

      <div
        id="article-section"
        className="w-full flex justify-center px-6 lg:px-20 py-14 lg:py-20 bg-white text-shark"
        data-component-type="section"
        data-component-vis="true"
      >
        <div className="w-full max-w-2xl flex flex-col items-center lg:max-w-screen-xl lg:justify-center">
          <div className="w-full">
            <h1 className="text-4xl font-bold  lg:text-5xl mb-6">
              {article.title}
            </h1>
            <div className="flex  flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6">
              <div className="flex space-x-4 mb-4 sm:mb-0">
                {article.categories?.map((category: any, i: number) => {
                  return (
                    <p
                      key={`category-${i}`}
                      className="text-shark py-2 px-4 text-lg lg:text-2xl bg-skyBlue/30"
                    >
                      {category?.name || ''}
                    </p>
                  )
                })}
              </div>
              <div className="md:flex md:space-x-2 text-shark text-sm lg:text-base">
                <p>{normalDateString}</p>
                <p className='hidden md:block'> &#183;</p>
                <p className='font-semibold'>{article.author?.name || 'Converge Team'}</p>
                {article.author?.titleTag && (
                  <>
                    <p className='hidden md:block'>|</p>
                    <p>{article.author.titleTag}</p>
                  </>
                )}
              </div>
            </div>
            <div className="w-full border-t border-1 mb-12"></div>
          </div>

          {article.body && (
            <div className="w-full lg:max-w-screen-lg">
              <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
                {article.body}
              </ReactMarkdown>
            </div>
          )}
          {article.sections?.map(renderSection)}
        </div>
      </div>

      <RelatedSection
        RelatedCards={articles.filter((a: any) => a.slug !== article.slug)}
      />
      <ContactFormLong />
    </>
  )
}

export async function getStaticPaths() {
  // get all articles for a brand from Strapi
  // and dynamically generate pages for each
  // article using the slug
  const articlesResponse = await getArticlesForBrand('Converge Marketing')
  const allArticles = articlesResponse.articles
  const filteredArticles = allArticles.filter(
    (article: any) => article.externalUrl === null
  )
  return {
    paths: [
      ...filteredArticles.map((article: any) => {
        return {
          params: {
            slug: article.slug,
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
      articleResponse: await getArticleBySlug(context.params.slug),
      allArticlesResponse: await getArticlesForBrand('Converge Marketing'),
    },
  }
}

export default InsightPost
