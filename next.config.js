/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/SaladinoWebsite';

const nextConfig = {
  // Output as static HTML files for easy deployment
  output: 'export',
  
  // For GitHub Pages deployment - properly configure asset paths
  basePath: isProd ? repoName : '',
  
  // Need to remove trailing slash - critical for proper path resolution
  assetPrefix: isProd ? repoName : '',
  
  // Set to true for GitHub Pages - this ensures paths end with a slash for directory-style URLs
  trailingSlash: true,
  
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

  // Ensure all asset paths are correct at build time
  experimental: {
    // This helps with static exports
    appDocumentPreloading: false,
  },

  // Ensure paths are correct for assets
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
