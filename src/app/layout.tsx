import '@/styles/globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Saladino Travel',
    default: 'Saladino Travel - Luxury Tours in Turkey & Dubai',
  },
  description: 'Experience the magic of Turkey and Dubai with our premium guided tours, featuring expert local guides and luxury accommodations.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Saladino Travel',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saladino Travel - Luxury Tours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@SaladinoTravel',
    site: '@SaladinoTravel',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 