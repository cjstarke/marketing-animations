import strapiClient from './strapiClient'
import {
  getArticlesForBrandQuery,
  getArticleBySlugQuery,
} from './queries'




export const getArticlesForBrand = async (
  brandName: string,
  mockData?: any
) => {
  if (process.env.STRAPI_API_MOCK === 'true') {
    return mockData
  }

  const { data } = await strapiClient.query({
    query: getArticlesForBrandQuery,
    variables: { brand: brandName },
  })

  return data
}

export const getArticleBySlug = async (slug: string, mockData?: any) => {
  if (process.env.STRAPI_API_MOCK === 'true') {
    return mockData
  }

  const { data } = await strapiClient.query({
    query: getArticleBySlugQuery,
    variables: { slug: slug },
    errorPolicy: 'all',
  })

  return data
}


