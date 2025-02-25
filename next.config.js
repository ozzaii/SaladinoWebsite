/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure that output is set to 'export' for static site generation
  output: 'export',
  
  // Set the base path for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/SaladinoWebsite' : '',
  
  // GitHub Pages doesn't support trailing slashes, so we disable them
  trailingSlash: false,
  
  // Enable static image imports for Next.js
  images: {
    unoptimized: true,
  },

  // Bypass TypeScript checks during build
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  
  // Also ignore ESLint errors
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
