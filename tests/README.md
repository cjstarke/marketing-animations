# ConvergeMarketing.com Test Suite

This directory contains basic page existence and functionality tests for the convergemarketing.com marketing website.

## Test Structure

- `page-existence.spec.ts` - Main test file that validates all marketing pages load correctly
- `helpers/test-utilities.ts` - Shared utilities for page testing and assertions

## What the Tests Cover

### Basic Page Existence Tests
- **Home page** - Company landing page
- **Who We Are** - Company information
- **What We Do** - Services and capabilities  
- **Health** - Health industry focus
- **Compliance** - Regulatory compliance information
- **Insights** - Industry insights and content
- **Contact** - Contact information and forms
- **Info Form** - Information collection page
- **E-Sign** - Electronic signature functionality
- **Terms & Privacy** - Legal pages

### Marketing Site Specific Tests
- **Company Branding** - Verifies Converge branding is present
- **Contact Elements** - Checks for contact forms and information
- **Legal Content** - Validates privacy/terms pages have appropriate content
- **Compliance Content** - Ensures compliance page has regulatory keywords
- **404 Handling** - Tests error page handling

### Technical Validations
- Page loads successfully (HTTP 200)
- Basic page elements exist (title, navigation, footer)
- No critical console errors
- Basic accessibility compliance (alt text, heading structure)
- Proper SEO elements

## Running Tests Locally

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Build the application:
   ```bash
   yarn build
   ```

3. Run tests:
   ```bash
   yarn test
   ```

4. View test reports:
   ```bash
   npx playwright show-report
   ```

### Alternative Test Commands
- **Interactive UI**: `yarn test:ui` - Opens Playwright's test UI
- **Debug Mode**: `yarn test:debug` - Run tests with debugging enabled
- **Direct Command**: `npx playwright test` - Run tests directly

### Troubleshooting

**Apollo GraphQL Warnings**: You may see repeated Apollo Client warnings about deprecated `canonizeResults` options. These are non-critical warnings from a transitive dependency and can be safely ignored. The test scripts include `--no-warnings` to suppress them.

**Build Issues**: If you encounter build issues locally, ensure you have the CodeArtifact token set in your environment or create a `.env.local` file with placeholder values as shown in `.env.local.example`.

## CI/CD Integration

Tests are automatically run in the Bitbucket pipeline:
- Tests run against production build (`yarn build`)
- Uses 2 parallel workers for faster execution
- HTML reports are generated and hosted with the deployed site at `/tests/`
- Pipeline fails if critical tests fail

## Destroy Stack Logic

The multi-branch-staging destroy stack logic properly:
1. Generates branch-specific stack names using the environment setup script
2. Uses CDK to destroy AWS resources when branches are cleaned up
3. Handles test environments (e.g., `feature-branch.qa.convergemarketing.com`)
4. Properly authenticated through OIDC roles

This can be triggered manually via the `destroy_resources` custom pipeline or automatically when pull requests are merged/closed.