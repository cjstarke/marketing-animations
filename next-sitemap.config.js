/** @type {import('next-sitemap').IConfig} */
const isProduction = process.env.BITBUCKET_DEPLOYMENT_ENVIRONMENT === 'production';

const siteUrl = isProduction
  ? 'https://convergemarketing.com'
  : `https://${process.env.BITBUCKET_DEPLOYMENT_ENVIRONMENT || 'qa'}.convergemarketing.com`;

module.exports = {
  output: 'export',
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/compliance/customer', '/legal/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        disallow: ['/legal/'],
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};