import { format, parseISO } from 'date-fns'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import LegalArticleContent from '../../../components/legal/LegalArticleContent'
import LegalLayout from '../../../components/legal/LegalLayout'
import { useConvergePage } from '../../../contexts/ConvergePageContext'
import { NavBarStatus } from '../../../types'
import {
  fetchGraphQL,
  GET_LEGAL_ARTICLE,
  GET_LEGAL_NAVIGATION,
} from '../../../lib/strapi-graphql'
import type {
  LegalArticle,
  LegalArticleResponse,
  LegalNavigationResponse,
} from '../../../types/legal'

interface LegalArticlePageProps {
  article: LegalArticle;
  navigation: LegalArticle[];
}

const LegalArticlePage: NextPage<LegalArticlePageProps> = ({
  article,
  navigation,
}) => {
  const { setCurrentPage, setNavStatus } = useConvergePage()

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('legal-article')
  }, [setNavStatus, setCurrentPage])

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMMM dd, yyyy')
    } catch {
      return dateString
    }
  }

  const domain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'convergemarketing.com'
  const currentUrl = `https://${domain}/legal/advertising-services/${article.slug}/`
  const pageTitle = article.metaTitle || article.title
  const pageDescription = article.metaDescription || `Legal document: ${article.title}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={currentUrl} />
      </Head>

      <LegalLayout navigation={navigation}>
        <article className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {article.title}
          </h1>
          {article.label && (
            <p className="text-xl text-gray-700 mb-6">{article.label}</p>
          )}

          <div className={`flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-600 pb-6 border-b border-gray-200 ${article.label ? 'mb-8' : 'mb-8 mt-4'}`}>
            <div>
              <span className="font-semibold">Last Updated:</span>{' '}
              {formatDate(article.updatedAt)}
            </div>
            <div>
              <span className="font-semibold">Effective Date:</span>{' '}
              {formatDate(article.effectiveDate)}
            </div>
          </div>

          <div className="mb-12">
            <LegalArticleContent content={article.content} />
          </div>

          {article.legal_article_archives &&
            article.legal_article_archives.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Previous Versions
                </h2>
                <p className="text-gray-600 mb-4">
                  View previous versions of this document:
                </p>
                <ul className="space-y-2">
                  {article.legal_article_archives.map((archive) => (
                    <li key={archive.documentId}>
                      <Link
                        href={`/legal/advertising-services/${article.slug}/archive/${archive.archivedAt}`}
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Effective {formatDate(archive.effectiveDate)} (Archived{' '}
                        {formatDate(archive.archivedAt)})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </article>
      </LegalLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Get all articles to check for labels
    const data = await fetchGraphQL<LegalNavigationResponse>(
      GET_LEGAL_NAVIGATION,
      { section: 'advertising-services' }
    )

    // Only generate paths for articles WITHOUT labels
    const paths = data.legalArticles
      .filter((article) => !article.label)
      .map((article) => ({
        params: { slug: article.slug },
      }))

    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    console.error('Error fetching legal article slugs:', error)
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps<LegalArticlePageProps> = async ({
  params,
}) => {
  try {
    const slug = params?.slug as string

    // Fetch article with archives
    const articleData = await fetchGraphQL<LegalArticleResponse>(
      GET_LEGAL_ARTICLE,
      {
        section: 'advertising-services',
        slug,
      }
    )

    // Fetch navigation
    const navData = await fetchGraphQL<LegalNavigationResponse>(
      GET_LEGAL_NAVIGATION,
      { section: 'advertising-services' }
    )

    const article = articleData.legalArticles[0]

    if (!article) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        article,
        navigation: navData.legalArticles || [],
      },
    }
  } catch (error) {
    console.error('Error fetching legal article:', error)
    return {
      notFound: true,
    }
  }
}

export default LegalArticlePage
