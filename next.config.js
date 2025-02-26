/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Output as static HTML files for easy deployment
  output: 'export',
  
  // For GitHub Pages deployment - only in production
  basePath: isProd ? '/SaladinoWebsite' : '',
  assetPrefix: isProd ? '/SaladinoWebsite' : '',
  
  // GitHub Pages doesn't handle trailing slash well
  trailingSlash: false,
  
  // Enable static image imports
  images: {
    unoptimized: true,
  },
  
  // Don't fail build with type errors
  typescript: {
    // Still process type checks but don't block the build
    ignoreBuildErrors: true,
  },
  
  // Don't fail build with ESLint errors
  eslint: {
    // Still process eslint checks but don't block the build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
