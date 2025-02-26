import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Determine if we're in production for path prefixing
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/SaladinoWebsite' : '';

  return (
    <Html lang="en">
      <Head>
        {/* Add explicit paths for any critical CSS */}
        <link 
          rel="stylesheet" 
          href={`${prefix}/_next/static/css/app.css`} 
        />
        {/* Ensure favicon and other static assets have correct paths */}
        <link 
          rel="icon" 
          href={`${prefix}/favicon.ico`} 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 