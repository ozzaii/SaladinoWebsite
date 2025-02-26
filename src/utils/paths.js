/**
 * Helper function to properly resolve asset paths in both development and production
 * This ensures images and other assets load correctly regardless of environment
 */
export function getAssetPath(path) {
  // Remove leading slash if present for consistency
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, assets are served from the public directory
  // In production with GitHub Pages, we need to account for the repository name in the path
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/SaladinoWebsite/' : '/';
  
  // Handle special case of direct URLs (don't modify external URLs)
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
    return cleanPath;
  }
  
  return `${basePath}${cleanPath}`;
} 