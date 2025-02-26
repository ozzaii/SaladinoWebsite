import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Determine if we're in production for path prefixing
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/SaladinoWebsite' : '';

  return (
    <Html lang="en">
      <Head>
        {/* Early script to fix paths before resources are loaded */}
        {isProd && (
          <script src={`${prefix}/fix-paths.js`} strategy="beforeInteractive" />
        )}
        
        {/* Ensure favicon and other static assets have correct paths */}
        <link rel="icon" href={`${prefix}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${prefix}/apple-touch-icon.png`} />
        <link rel="manifest" href={`${prefix}/site.webmanifest`} />
        
        {/* Add base tag to help with relative URLs */}
        {isProd && (
          <base href={`${prefix}/`} />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 