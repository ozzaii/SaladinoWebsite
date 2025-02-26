/**
 * Utility function to prefix asset paths for GitHub Pages deployment
 * 
 * This ensures all assets (images, scripts, etc.) have the correct path prefix
 * when deployed to GitHub Pages or running locally.
 */

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/SaladinoWebsite' : '';

/**
 * Prefixes a path with the base path for the current environment
 * @param path The path to prefix
 * @returns The prefixed path
 */
export function getAssetPath(path: string): string {
  // If the path is an external URL, return it as is
  if (path.startsWith('http')) {
    return path;
  }
  
  // Ensure the path starts with a forward slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Return the path with the base path prefix
  return `${basePath}${normalizedPath}`;
} 