import { PlaywrightTestConfig, devices } from '@playwright/test'
import path from 'path'

// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000

// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
const baseURL = `http://localhost:${PORT}`

// Reference: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  // Timeout per test
  timeout: 60 * 1000,
  // Test directory
  testDir: path.join(__dirname, 'tests'),
  // If a test fails, retry it additional 1 time
  retries: 1,
  // Configure parallel tests - default is based on CPU cores
  // Set to 1 to disable parallelism, or higher for more parallel workers
  workers: process.env.PLAYWRIGHT_WORKERS
    ? parseInt(process.env.PLAYWRIGHT_WORKERS)
    : 4,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: 'test-results/',
  // Configure HTML reporter to use the default 'playwright-report' directory
  // This is the standard location where Playwright stores HTML reports by default
  reporter: [
    ['html', { open: 'never' }],
    ['json', { outputFile: 'test-results/test-results.json' }]
  ],

  // Run production build for testing instead of dev server
  // This ensures tests run against the actual static export build
  webServer: {
    command: 'yarn build && npx serve@latest out -l 3000',
    url: baseURL, // Playwright needs a valid URL in order to start testing
    timeout: 180 * 1000, // Increased timeout for build + serve
    reuseExistingServer: !process.env.CI,
    env: {
      CODEARTIFACT_AUTH_TOKEN: process.env.CODEARTIFACT_AUTH_TOKEN || '',
      // Suppress Apollo warnings during test builds
      NODE_OPTIONS: '--no-warnings',
    },
  },

  // Configure expect assertions
  expect: {
    // Maximum time expect() should wait for the condition to be met
    timeout: 10000,
  },

  use: {
    headless: true,
    // Use baseURL to make navigation relative.
    // More information: https://playwright.dev/docs/api/class-testoptions#test-options-base-url
    baseURL,

    // Retry a test if its failing with enabled tracing. This allows you to analyze the DOM, console logs, network traffic etc.
    // More information: https://playwright.dev/docs/trace-viewer
    trace: 'retry-with-trace',

    // Navigation timeout
    navigationTimeout: 30000,

    // All available context options: https://playwright.dev/docs/api/class-browser#browser-new-context
    contextOptions: {
      ignoreHTTPSErrors: true,
      acceptDownloads: false, // Avoid issues with downloads
    },
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
}
export default config