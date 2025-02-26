import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Determine if we're in production for path prefixing
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/SaladinoWebsite' : '';

  return (
    <Html lang="en">
      <Head>
        {/* Remove explicit app.css link as it's automatically handled by Next.js */}
        
        {/* Ensure favicon and other static assets have correct paths */}
        <link rel="icon" href={`${prefix}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${prefix}/apple-touch-icon.png`} />
        <link rel="manifest" href={`${prefix}/site.webmanifest`} />
        
        {/* Add a script to fix asset paths at runtime for GitHub Pages */}
        {isProd && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  // Fix asset paths for GitHub Pages
                  const assetPrefix = '/SaladinoWebsite';
                  
                  // Function to fix paths in the DOM
                  function fixPaths() {
                    // Fix scripts
                    document.querySelectorAll('script[src^="/_next"]').forEach(script => {
                      if (!script.src.includes(assetPrefix)) {
                        script.src = assetPrefix + script.src.substring(script.src.indexOf('/_next'));
                      }
                    });
                    
                    // Fix stylesheets
                    document.querySelectorAll('link[rel="stylesheet"][href^="/_next"]').forEach(link => {
                      if (!link.href.includes(assetPrefix)) {
                        link.href = assetPrefix + link.href.substring(link.href.indexOf('/_next'));
                      }
                    });
                    
                    // Fix images
                    document.querySelectorAll('img[src^="/"]').forEach(img => {
                      if (!img.src.includes(assetPrefix) && !img.src.startsWith('http')) {
                        img.src = assetPrefix + img.src;
                      }
                    });
                  }
                  
                  // Run on load and after any dynamic content changes
                  window.addEventListener('load', fixPaths);
                  const observer = new MutationObserver(fixPaths);
                  observer.observe(document.documentElement, { childList: true, subtree: true });
                })();
              `,
            }}
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 