import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Determine if we're in production for path prefixing
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/SaladinoWebsite' : '';

  return (
    <Html lang="en">
      <Head>
        {/* Make sure the base tag is at the top to affect ALL resources */}
        {isProd && <base href={`${prefix}/`} />}

        {/* Inline script to fix paths IMMEDIATELY before any resources load */}
        {isProd && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  // This must run BEFORE any resources are loaded
                  const prefix = '/SaladinoWebsite';
                  
                  // Check for path duplication
                  function hasPrefix(path) {
                    return path.includes(prefix);
                  }

                  function fixAttribute(element, attribute) {
                    const value = element.getAttribute(attribute);
                    if (value && value.startsWith('/') && !value.startsWith('//') && !hasPrefix(element[attribute])) {
                      element.setAttribute(attribute, prefix + value);
                    }
                  }
                  
                  // Rewrite any script or stylesheet tags that start with /_next
                  document.addEventListener('DOMContentLoaded', function() {
                    // Fix scripts
                    document.querySelectorAll('script[src^="/_next"]').forEach(script => {
                      fixAttribute(script, 'src');
                    });
                    
                    // Fix CSS links
                    document.querySelectorAll('link[rel="stylesheet"][href^="/_next"]').forEach(link => {
                      fixAttribute(link, 'href');
                    });
                    
                    // Fix preload links
                    document.querySelectorAll('link[rel="preload"][href^="/_next"]').forEach(link => {
                      fixAttribute(link, 'href');
                    });
                    
                    // Fix images 
                    document.querySelectorAll('img[src^="/"]').forEach(img => {
                      if (!img.src.includes(prefix) && !img.src.startsWith('http')) {
                        fixAttribute(img, 'src');
                      }
                    });
                  });
                })();
              `,
            }}
          />
        )}
        
        {/* Ensure favicon and other static assets have correct paths */}
        <link rel="icon" href={`${prefix}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${prefix}/apple-touch-icon.png`} />
        <link rel="manifest" href={`${prefix}/site.webmanifest`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 