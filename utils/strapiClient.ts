import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const token = process.env.STRAPI_API_TOKEN
const strapiUrl = process.env.STRAPI_API_URL || 'http://localhost:1337/graphql'

export default new ApolloClient({
  link: createHttpLink({
    uri: strapiUrl,
    headers: {
      authorization: `Bearer ${token}`,
    },
  }),
  cache: new InMemoryCache(),
})
