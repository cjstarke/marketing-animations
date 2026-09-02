const STRAPI_GRAPHQL_URL = process.env.STRAPI_API_URL || 'http://0.0.0.0:1337/graphql';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
    extensions?: Record<string, any>;
  }>;
}

export async function fetchGraphQL<T = any>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    // Add authorization header if token is available
    if (STRAPI_API_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
    }

    const response = await fetch(STRAPI_GRAPHQL_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }

    const json: GraphQLResponse<T> = await response.json();

    if (json.errors) {
      console.error('GraphQL errors:', json.errors);
      throw new Error(
        `GraphQL Error: ${json.errors.map((e) => e.message).join(', ')}`
      );
    }

    if (!json.data) {
      throw new Error('No data returned from GraphQL query');
    }

    return json.data;
  } catch (error) {
    console.error('Failed to fetch data from Strapi:', error);
    throw error;
  }
}

// GraphQL query definitions for Strapi v5 (flat structure)
export const GET_LEGAL_NAVIGATION = `
  query GetLegalNavigation($section: String!) {
    legalArticles(
      filters: { section: { eq: $section } }
      sort: "rank:asc"
    ) {
      documentId
      title
      label
      slug
      section
      rank
    }
  }
`;

export const GET_LEGAL_ARTICLE = `
  query GetLegalArticle($section: String!, $slug: String!) {
    legalArticles(
      filters: {
        section: { eq: $section }
        slug: { eq: $slug }
      }
    ) {
      documentId
      title
      label
      slug
      section
      content
      effectiveDate
      metaTitle
      metaDescription
      rank
      publishedAt
      updatedAt
      legal_article_archives(sort: "archivedAt:desc") {
        documentId
        archivedAt
        effectiveDate
        contentSnapshot
        notes
      }
    }
  }
`;

export const GET_ALL_LEGAL_ARTICLE_SLUGS = `
  query GetAllLegalArticleSlugs($section: String!) {
    legalArticles(filters: { section: { eq: $section } }) {
      slug
    }
  }
`;

export const GET_LEGAL_ARTICLE_ARCHIVE = `
  query GetLegalArticleArchive($slug: String!, $archivedAt: DateTime!) {
    legalArticleArchives(
      filters: {
        article: {
          slug: { eq: $slug }
        }
        archivedAt: { eq: $archivedAt }
      }
    ) {
      documentId
      archivedAt
      effectiveDate
      contentSnapshot
      notes
      article {
        title
        slug
        section
      }
    }
  }
`;

export const GET_ARTICLE_ARCHIVES = `
  query GetArticleArchives($slug: String!) {
    legalArticleArchives(
      filters: {
        article: {
          slug: { eq: $slug }
        }
      }
      sort: "archivedAt:desc"
    ) {
      documentId
      archivedAt
      effectiveDate
      contentSnapshot
      notes
    }
  }
`;

export const GET_ALL_ARCHIVE_PATHS = `
  query GetAllArchivePaths($slug: String!) {
    legalArticleArchives(
      filters: {
        article: {
          slug: { eq: $slug }
        }
      }
    ) {
      archivedAt
    }
  }
`;
