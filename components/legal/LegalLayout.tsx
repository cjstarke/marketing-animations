import { useState } from 'react'
import type { LegalArticle } from '../../types/legal'
import { toKebabCase } from '../../utils/stringUtils'

export interface LegalLayoutExtraLink {
  label: string;
  href: string;
}

export interface LegalLayoutProps {
  navigation: LegalArticle[];
  extraLinks?: LegalLayoutExtraLink[];
  children: React.ReactNode;
}

export default function LegalLayout({ navigation, extraLinks, children }: LegalLayoutProps) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getArticleUrl = (article: LegalArticle) => {
    let url: string
    if (article.label) {
      url = `/legal/advertising-services/${article.slug}/${toKebabCase(article.label)}/`
    } else {
      url = `/legal/advertising-services/${article.slug}/`
    }
    if (article.anchor) {
      url += `#${article.anchor}`
    }
    return url
  }


  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-32">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-20 right-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-white p-2 rounded-md text-gray-600 hover:text-gray-900 border border-gray-300"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="container mx-auto max-w-7xl px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside
            className={`
              lg:w-64 lg:flex-shrink-0 lg:block
              ${mobileMenuOpen ? 'block' : 'hidden'}
              fixed lg:sticky lg:top-32 left-0 right-0 lg:left-auto lg:right-auto
              bg-white lg:bg-transparent z-40 lg:z-auto
              p-4 lg:p-0 shadow-lg lg:shadow-none
              max-h-screen lg:max-h-[calc(100vh-10rem)] overflow-y-auto
            `}
          >
            <nav className="space-y-1">
              <h2 className="text-lg font-bold text-gray-900 mb-4 px-3">
                Legal Documents
              </h2>
              {navigation.map((article) => (
                <a
                  key={article.documentId}
                  href={getArticleUrl(article)}
                  className="
                    block px-3 py-2 rounded-md text-sm font-medium
                    text-gray-700 hover:bg-gray-100 hover:text-gray-900
                  "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {article.title}
                </a>
              ))}
              {extraLinks?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    block px-3 py-2 rounded-md text-sm font-medium
                    text-gray-700 hover:bg-gray-100 hover:text-gray-900
                  "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

          </aside>

          {/* Main Content */}
          <main className="flex-1 pb-12">
            {children}
          </main>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}
