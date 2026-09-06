const nextConfig = {
  transpilePackages: ['@converge/ui'],
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['converge-strapi-prod.s3.amazonaws.com'],
    unoptimized: true,
  },
  output: 'export',
}

module.exports = nextConfig
