import { Page, expect } from '@playwright/test'

// Centralized constants for convergemarketing.com
export const TEST_CONSTANTS = {
  SITE_URL: 'http://localhost:3000',
  // All pages based on the directory structure observed
  PAGES: {
    home: '/',
    'who-we-are': '/who-we-are',
    'what-we-do': '/what-we-do',
    health: '/health',
    compliance: '/compliance',
    insights: '/insights',
    contact: '/contact',
    esign: '/esign',
    terms: '/terms',
    privacy: '/privacy',
    // Sub-pages that might exist
    'newsroom': '/newsroom',
    'our-work': '/our-work',
    // Compliance sub-pages
    'compliance/gdpr': '/compliance/gdpr',
    'compliance/ccpa': '/compliance/ccpa',
    // Insights sub-pages - need to check what exists
    'insights/industry-reports': '/insights/industry-reports',
    'insights/case-studies': '/insights/case-studies',
    // Our work sub-pages
    'our-work/case-studies': '/our-work/case-studies',
    'our-work/success-stories': '/our-work/success-stories'
  }
}

// Basic page setup utility for marketing site testing
export async function setupTestPage(page: Page, pagePath: string = '/'): Promise<void> {
  const fullUrl = `${TEST_CONSTANTS.SITE_URL}${pagePath}`
  console.log(`Navigating to page: ${pagePath} (${fullUrl})`)
  
  await page.goto(fullUrl)
  
  // Wait for page to load completely
  await page.waitForLoadState('networkidle')
}

// Simplified page assertions - only check visibility and metadata
export async function assertBasicPageElements(page: Page, pageName: string): Promise<void> {
  // Check that the page is viewable
  await expect(page.locator('body')).toBeVisible()
  
  // Check for a title (should exist on all pages)
  const title = await page.title()
  expect(title).toBeTruthy()
  expect(title.length).toBeGreaterThan(0)
  
  console.log(`✓ Page ${pageName} is viewable with title: "${title}"`)
}

// Check for basic metadata
export async function assertBasicMetadata(page: Page): Promise<void> {
  // Check for meta description
  const metaDescription = page.locator('meta[name="description"]')
  if (await metaDescription.count() > 0) {
    const content = await metaDescription.getAttribute('content')
    if (content && content.length > 0) {
      console.log(`✓ Meta description found: "${content.substring(0, 50)}..."`)
    }
  }
  
  // Check for meta viewport (important for responsive design)
  const metaViewport = page.locator('meta[name="viewport"]')
  if (await metaViewport.count() > 0) {
    console.log('✓ Viewport meta tag found')
  }
}

// Main simplified page test utility
export async function runBasicPageTests(page: Page, pagePath: string, pageName: string): Promise<void> {
  await setupTestPage(page, pagePath)
  await assertBasicPageElements(page, pageName)
  await assertBasicMetadata(page)
}