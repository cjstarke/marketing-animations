import type { GetStaticProps, NextPage } from 'next'
import CustomHead from '../../../components/CustomHead'
import LegalLayout from '../../../components/legal/LegalLayout'
import { fetchGraphQL, GET_LEGAL_NAVIGATION } from '../../../lib/strapi-graphql'
import type { LegalArticle, LegalNavigationResponse } from '../../../types/legal'
import { toKebabCase } from '../../../utils/stringUtils'

interface LegalLandingPageProps {
  navigation: LegalArticle[];
}

const LegalLandingPage: NextPage<LegalLandingPageProps> = ({ navigation }) => {
  const getArticleUrl = (article: LegalArticle) => {
    if (article.label) {
      return `/legal/advertising-services/${article.slug}/${toKebabCase(article.label)}`
    }
    return `/legal/advertising-services/${article.slug}`
  }

  return (
    <>
      <CustomHead page="legal-advertising-services" />

      <LegalLayout navigation={navigation}>
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Advertising Services Legal Documents
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              Welcome to the legal documentation hub for our advertising services.
              Here you&apos;ll find all relevant terms, agreements, and policies.
            </p>

            <p className="text-gray-600 mb-8">
              Select a document from the navigation menu to view its contents.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">
                Available Documents
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {navigation.map((article) => (
                  <li key={article.documentId}>
                    <a
                      href={getArticleUrl(article)}
                      className="text-blue-700 hover:text-blue-900 underline"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </LegalLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps<LegalLandingPageProps> = async () => {
  try {
    const data = await fetchGraphQL<LegalNavigationResponse>(
      GET_LEGAL_NAVIGATION,
      { section: 'advertising-services' }
    )

    return {
      props: {
        navigation: data.legalArticles || [],
      },
    }
  } catch (error) {
    console.error('Error fetching legal navigation:', error)
    return {
      props: {
        navigation: [],
      },
    }
  }
}

export default LegalLandingPage
