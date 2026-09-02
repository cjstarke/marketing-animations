const fs = require('fs')
const path = require('path')

// List of paths for your static pages
const staticPages = ['/about', '/approach', '/camplejeune', '/careers', '/compliance', '/contact', '/helix', '/home-services']

// If you have dynamic pages, fetch or define their paths as well
// For example: const dynamicPages = await fetchDynamicPageSlugs();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...staticPages /*, ...dynamicPages*/]
    .map(
      (page) => `
    <url>
      <loc>${`https://www.convergemarketing.com${page}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  `
    )
    .join('')}
</urlset>
`

fs.writeFileSync(path.resolve(process.cwd(), 'public/sitemap.xml'), sitemap)
console.log('Sitemap generated!')
