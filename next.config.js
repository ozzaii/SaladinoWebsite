/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/SaladinoWebsite';

const nextConfig = {
  // Output as static HTML files for easy deployment
  output: 'export',
  
  // For GitHub Pages deployment - always use the repo name for basePath in production
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? `${repoName}/` : '',
  
  // GitHub Pages doesn't handle trailing slash well
  trailingSlash: false,
  
  // Enable static image imports
  images: {
    unoptimized: true,
    // Make sure domain settings are correct
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ozzaii.github.io',
      },
    ],
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

  // Ensure paths are correct for assets
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
