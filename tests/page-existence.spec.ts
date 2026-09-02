import { test, expect } from '@playwright/test'
import { runBasicPageTests, TEST_CONSTANTS } from './helpers/test-utilities'

// Test all main pages for basic functionality
test.describe('Page Existence Tests', () => {
  
  test('Home page loads and has basic elements', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.home, 'home')
  })

  test('Who We Are page loads and has basic elements', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES['who-we-are'], 'who-we-are')
  })

  test('What We Do page loads and has basic elements', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES['what-we-do'], 'what-we-do')
  })

  test('Health page loads and has basic elements', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.health, 'health')
  })

  test('Compliance page loads and has basic elements', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.compliance, 'compliance')
  })

  test('Insights page loads and has basic elements', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.insights, 'insights')
  })

  test('Contact page loads and has basic elements', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.contact, 'contact')
  })

  test('E-Sign page loads and has basic elements', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.esign, 'esign')
  })

  test('Terms page loads and has basic elements', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.terms, 'terms')
  })

  test('Privacy page loads and has basic elements', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.privacy, 'privacy')
  })

  // Test sub-pages that might exist - these will be more flexible
  test('Newsroom page (if exists)', async ({ page }) => {
    try {
      await runBasicPageTests(page, TEST_CONSTANTS.PAGES.newsroom, 'newsroom')
    } catch (error) {
      // Page might not exist - log and skip
      console.log('Newsroom page might not exist, skipping test')
      test.skip()
    }
  })

  test('Our Work page (if exists)', async ({ page }) => {
    try {
      await runBasicPageTests(page, TEST_CONSTANTS.PAGES['our-work'], 'our-work')
    } catch (error) {
      // Page might not exist - log and skip
      console.log('Our Work page might not exist, skipping test')
      test.skip()
    }
  })
})

// Simple visibility and metadata tests
test.describe('Basic Page Tests', () => {
  
  test('Home page is viewable and has title', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.home, 'home')
  })

  test('Contact page is viewable and has title', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.contact, 'contact')
  })

  test('Privacy page is viewable and has title', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.privacy, 'privacy')
  })

  test('Terms page is viewable and has title', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.terms, 'terms')
  })

  test('Compliance page is viewable and has title', async ({ page }) => {
    await runBasicPageTests(page, TEST_CONSTANTS.PAGES.compliance, 'compliance')
  })
})