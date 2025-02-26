/**
 * Helper function to properly resolve asset paths in both development and production
 * This ensures images and other assets load correctly regardless of environment
 */
export function getAssetPath(path) {
  // Skip processing for absolute URLs or data URLs
  if (path?.startsWith('http://') || 
      path?.startsWith('https://') || 
      path?.startsWith('data:') ||
      !path) {
    return path;
  }
  
  // Remove leading slash if present for consistency
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // GitHub Pages production path needs repo name
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/SaladinoWebsite/' : '/';
  
  // Ensure we don't duplicate the base path if it's already in the path
  if (isProd && cleanPath.startsWith('SaladinoWebsite/')) {
    return `/${cleanPath}`;
  }
  
  return `${basePath}${cleanPath}`;
} 