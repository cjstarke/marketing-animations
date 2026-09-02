import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { format, parseISO } from 'date-fns'
import Head from 'next/head'
import { useEffect } from 'react'
import LegalLayout from '../../../../../components/legal/LegalLayout'
import LegalArticleContent from '../../../../../components/legal/LegalArticleContent'
import ArchivedVersionBanner from '../../../../../components/legal/ArchivedVersionBanner'
import { useConvergePage } from '../../../../../contexts/ConvergePageContext'
import { NavBarStatus } from '../../../../../types'
import {
  fetchGraphQL,
  GET_LEGAL_ARTICLE_ARCHIVE,
  GET_LEGAL_NAVIGATION,
  GET_ALL_ARCHIVE_PATHS,
} from '../../../../../lib/strapi-graphql'
import type {
  LegalArticle,
  LegalArticleArchive,
  LegalArticleArchiveResponse,
  LegalNavigationResponse,
  LegalArchivePathsResponse,
} from '../../../../../types/legal'
import { toKebabCase } from '../../../../../utils/stringUtils'

interface LegalArchivePageProps {
  archive: LegalArticleArchive;
  navigation: LegalArticle[];
}

const LegalArchivePage: NextPage<LegalArchivePageProps> = ({
  archive,
  navigation,
}) => {
  const { setCurrentPage, setNavStatus } = useConvergePage()

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('legal-archive')
  }, [setNavStatus, setCurrentPage])

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMMM dd, yyyy')
    } catch {
      return dateString
    }
  }

  const domain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'convergemarketing.com'

  // Generate correct current article URL based on whether it has a label
  const currentArticleUrl = archive.contentSnapshot.label
    ? `/legal/advertising-services/${archive.article?.slug}/${toKebabCase(archive.contentSnapshot.label)}`
    : `/legal/advertising-services/${archive.article?.slug}`

  const archiveUrl = `https://${domain}/legal/advertising-services/${archive.article?.slug}/archive/${archive.archivedAt}/`
  const canonicalUrl = `https://${domain}${currentArticleUrl}/`

  const pageTitle = `${archive.contentSnapshot.title} (Archived ${formatDate(archive.archivedAt)})`
  const pageDescription = `Archived version of ${archive.contentSnapshot.title}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:url" content={archiveUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <LegalLayout navigation={navigation}>
        <article className="max-w-4xl">
          <ArchivedVersionBanner currentArticleUrl={currentArticleUrl} />

          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {archive.contentSnapshot.title}
          </h1>
          {archive.contentSnapshot.label && (
            <p className="text-xl text-gray-700 mb-6">
              {archive.contentSnapshot.label}
            </p>
          )}

          <div className={`bg-gray-100 rounded-md p-4 ${archive.contentSnapshot.label ? 'mb-8' : 'mb-8 mt-4'}`}>
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold">This is an archived version</span>
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-600">
              <div>
                <span className="font-semibold">Archived On:</span>{' '}
                {formatDate(archive.archivedAt)}
              </div>
              <div>
                <span className="font-semibold">Effective Date:</span>{' '}
                {formatDate(archive.effectiveDate)}
              </div>
            </div>
            {archive.notes && (
              <div className="mt-3 pt-3 border-t border-gray-300">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Notes:</span> {archive.notes}
                </p>
              </div>
            )}
          </div>

          <div className="mb-12">
            <LegalArticleContent content={archive.contentSnapshot.content} />
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              This is an archived version of the document. The information shown
              reflects the state of the document as it was on{' '}
              {formatDate(archive.archivedAt)}.
            </p>
          </div>
        </article>
      </LegalLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Get all articles
    const articlesData = await fetchGraphQL<LegalNavigationResponse>(
      GET_LEGAL_NAVIGATION,
      { section: 'advertising-services' }
    )

    const paths = []

    // For each article, get all its archives
    for (const article of articlesData.legalArticles) {
      try {
        const archivesData = await fetchGraphQL<LegalArchivePathsResponse>(
          GET_ALL_ARCHIVE_PATHS,
          { slug: article.slug }
        )

        for (const archive of archivesData.legalArticleArchives) {
          paths.push({
            params: {
              slug: article.slug,
              archivedAt: archive.archivedAt,
            },
          })
        }
      } catch (error) {
        console.error(`Error fetching archives for ${article.slug}:`, error)
      }
    }

    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    console.error('Error generating archive paths:', error)
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps<LegalArchivePageProps> = async ({
  params,
}) => {
  try {
    const slug = params?.slug as string
    const archivedAt = params?.archivedAt as string

    // Fetch archive
    const archiveData = await fetchGraphQL<LegalArticleArchiveResponse>(
      GET_LEGAL_ARTICLE_ARCHIVE,
      { slug, archivedAt }
    )

    // Fetch navigation
    const navData = await fetchGraphQL<LegalNavigationResponse>(
      GET_LEGAL_NAVIGATION,
      { section: 'advertising-services' }
    )

    const archive = archiveData.legalArticleArchives[0]

    if (!archive) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        archive,
        navigation: navData.legalArticles || [],
      },
    }
  } catch (error) {
    console.error('Error fetching legal archive:', error)
    return {
      notFound: true,
    }
  }
}

export default LegalArchivePage
