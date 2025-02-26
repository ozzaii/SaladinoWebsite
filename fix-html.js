const fs = require('fs');
const path = require('path');

// Path to the output directory
const outDir = path.join(__dirname, 'out');

// This script will be injected into all HTML files
const pathFixScript = `
<script>
  (function() {
    // Fix paths immediately when HTML is parsed
    var prefix = '/SaladinoWebsite';
    
    // Rewrite existing scripts
    function fixPaths() {
      // Fix scripts with /_next paths
      document.querySelectorAll('script[src^="/_next"]').forEach(function(el) {
        if (!el.src.includes(prefix)) {
          el.src = prefix + el.getAttribute('src');
        }
      });
      
      // Fix stylesheets
      document.querySelectorAll('link[rel="stylesheet"][href^="/_next"]').forEach(function(el) {
        if (!el.href.includes(prefix)) {
          el.href = prefix + el.getAttribute('href');
        }
      });
      
      // Fix preloads
      document.querySelectorAll('link[rel="preload"][href^="/_next"]').forEach(function(el) {
        if (!el.href.includes(prefix)) {
          el.href = prefix + el.getAttribute('href');
        }
      });
      
      // Fix images
      document.querySelectorAll('img[src^="/"]').forEach(function(el) {
        if (!el.src.includes(prefix) && !el.src.startsWith('http')) {
          el.src = prefix + el.getAttribute('src');
        }
      });
    }
    
    // Run immediately + after DOM content loaded to catch everything
    if (document.readyState === 'loading') {
      fixPaths(); // Fix what's already in the parsed HTML
      document.addEventListener('DOMContentLoaded', fixPaths);
    } else {
      fixPaths();
    }
    
    // Also observe for dynamically added elements
    var observer = new MutationObserver(fixPaths);
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        observer.observe(document.body, { childList: true, subtree: true });
      });
    }
  })();
</script>
`;

// Function to process a single HTML file
function processHtmlFile(filePath) {
  try {
    console.log(`Processing ${filePath}...`);
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file already has our fix (to avoid double processing)
    if (html.includes('<base href="/SaladinoWebsite/"')) {
      console.log(`⏭️ Skipped ${filePath} (already has base tag)`);
      return;
    }
    
    // Add base tag and fix-path script right after <head>
    html = html.replace('<head>', '<head>\n<base href="/SaladinoWebsite/" />' + pathFixScript);
    
    // Directly fix the resources in the HTML content - prevent duplication by checking first
    html = html.replace(/src="(\/_next\/[^"]+)"/g, (match, p1) => {
      if (p1.includes('/SaladinoWebsite/')) return match;
      return `src="/SaladinoWebsite${p1}"`;
    });
    
    html = html.replace(/href="(\/_next\/[^"]+)"/g, (match, p1) => {
      if (p1.includes('/SaladinoWebsite/')) return match;
      return `href="/SaladinoWebsite${p1}"`;
    });

    // Make sure image paths are correct but not duplicated
    html = html.replace(/src="(\/images\/[^"]+)"/g, (match, p1) => {
      if (p1.includes('/SaladinoWebsite/')) return match;
      return `src="/SaladinoWebsite${p1}"`;
    });
    
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ Modified ${filePath}`);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
}

// Function to recursively process all HTML files in a directory
function processDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name.endsWith('.html')) {
      processHtmlFile(fullPath);
    }
  }
}

// Check if output directory exists
if (fs.existsSync(outDir)) {
  console.log(`🔍 Processing HTML files in ${outDir}...`);
  processDirectory(outDir);
  console.log('✅ All HTML files processed!');
} else {
  console.error(`❌ Output directory ${outDir} does not exist!`);
  process.exit(1);
} 