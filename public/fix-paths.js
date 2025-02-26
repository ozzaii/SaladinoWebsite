// This script fixes paths for assets when deployed to GitHub Pages
(function() {
  // Check if we need to fix paths (only on GitHub Pages)
  const isGitHubPages = window.location.hostname === 'ozzaii.github.io';
  if (!isGitHubPages) return;
  
  const repoName = '/SaladinoWebsite';
  
  // Fix scripts with incorrect paths
  function fixPaths() {
    // Check for scripts that should have the repo name but don't
    document.querySelectorAll('script[src^="/_next"]').forEach(script => {
      if (!script.src.includes(repoName)) {
        const newSrc = repoName + script.getAttribute('src');
        script.setAttribute('src', newSrc);
      }
    });
    
    // Fix CSS links
    document.querySelectorAll('link[rel="stylesheet"][href^="/_next"]').forEach(link => {
      if (!link.href.includes(repoName)) {
        const newHref = repoName + link.getAttribute('href');
        link.setAttribute('href', newHref);
      }
    });
    
    // Fix images that might have incorrect paths
    document.querySelectorAll('img[src^="/"]').forEach(img => {
      if (!img.src.includes(repoName) && !img.src.startsWith('http')) {
        const currentSrc = img.getAttribute('src');
        if (!currentSrc.startsWith(repoName)) {
          img.setAttribute('src', repoName + currentSrc);
        }
      }
    });
  }
  
  // Run on DOMContentLoaded to fix initial paths
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixPaths);
  } else {
    fixPaths();
  }
  
  // Run again after window load to catch any dynamically added elements
  window.addEventListener('load', fixPaths);
  
  // Watch for future DOM changes
  const observer = new MutationObserver(function(mutations) {
    fixPaths();
  });
  
  // Start observing once the DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  } else {
    observer.observe(document.body, { childList: true, subtree: true });
  }
})(); 