import { gql } from "@apollo/client";




export const getArticlesForBrandQuery = gql`
  query GetArticlesForBrand($brand: String!) {
    articles(filters: { brand: { name: { eq: $brand } } } sort:"date:desc") {
      author {
        name
        bio
        image {
          url
        }
        slug
        titleTag
      }
      body
      cover {
        url
      }
      coverAlt
      date
      description
      externalUrl
      metaTitle
      ogImage {
        url
      }
      categories {
        name
      }
      service {
        icon{
          url
        }
        type
      }
      slug
      title
      titleShort
    }
  }
`;

export const getArticleBySlugQuery = gql`
  query GetArticleBySlug($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      author {
        name
        bio
        image {
          url
        }
        slug
        titleTag
      }
      body
      cover {
        url
      }
      coverAlt
      date
      description
      metaTitle
      ogImage {
        url
      }
      categories {
        name
      }
      service {
        icon {
          url
        }
        type
      }
      slug
      title
      titleShort
      sections {
        __typename
        ... on ComponentSectionsParagraph {
          content
        }
        ... on ComponentSectionsMedialinks {
          content
        }
        ... on ComponentSectionsImage {
          source
          alt
        }
        ... on ComponentSectionsCallout {
          heading
          subheading
        }
        ... on ComponentSectionsChecklist {
          items {
            text
          }
        }
      }
    }
  }
`;

