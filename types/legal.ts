// TypeScript types for Legal Articles (Strapi v5 flat structure)

export interface ContentSnapshot {
  title: string;
  label?: string;
  content: string; // Markdown string
  effectiveDate: string;
  publishedAt: string;
  updatedAt: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface LegalArticleArchive {
  documentId: string;
  archivedAt: string;
  effectiveDate: string;
  contentSnapshot: ContentSnapshot;
  notes?: string;
  article?: {
    title: string;
    slug: string;
    section: string;
  };
}

export interface LegalArticle {
  documentId: string;
  title: string;
  label?: string;
  slug: string;
  section: string;
  content: string; // Markdown string
  effectiveDate: string;
  publishedAt: string;
  updatedAt: string;
  metaTitle?: string;
  metaDescription?: string;
  rank: number;
  legal_article_archives?: LegalArticleArchive[];
  /**
   * Optional in-page anchor (id) this nav item should link/scroll to,
   * e.g. "exhibit-a". When present, the sidebar link will point to
   * `/legal/advertising-services/{slug}#{anchor}` instead of a
   * standalone page.
   */
  anchor?: string;
}


// GraphQL response types
export interface LegalNavigationResponse {
  legalArticles: LegalArticle[];
}

export interface LegalArticleResponse {
  legalArticles: LegalArticle[];
}

export interface LegalArticleSlugsResponse {
  legalArticles: Array<{ slug: string }>;
}

export interface LegalArticleArchiveResponse {
  legalArticleArchives: LegalArticleArchive[];
}

export interface LegalArchivePathsResponse {
  legalArticleArchives: Array<{ archivedAt: string }>;
}
