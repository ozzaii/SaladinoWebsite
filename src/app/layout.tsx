import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/utils/paths';
import { ChatProvider } from '@/context/ChatContext';
import Footer from '@/components/Footer';
import FloatingChatButton from '@/components/shared/FloatingChatButton';
import Script from 'next/script';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saladino Travel - Experiencias Turcas',
  description: 'Viajes y tours personalizados para hispanohablantes en Turquía y Dubái.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navigationLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/tours', label: 'Tours' },
    { href: '/destinations', label: 'Destinos' },
    { href: '/about', label: 'Sobre Nosotros' },
    { href: '/contact', label: 'Contacto' },
  ];

  // Check if we're in production for GitHub Pages deployment
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/SaladinoWebsite' : '';

  return (
    <html lang="en">
      <head>
        {/* Load path-fixing script as early as possible */}
        {isProd && (
          <Script
            id="path-fixer"
            src={`${prefix}/fix-paths.js`}
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className={montserrat.className}>
        <ChatProvider>
          {/* Header */}
          <header className="fixed w-full bg-white shadow-sm z-50">
            <div className="container mx-auto px-6 md:px-10">
              <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                  <div className="relative w-48 h-12">
                    <Image 
                      src={getAssetPath('/images/saladino-travel-logo.png')}
                      alt="Saladino Travel Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                
                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  {navigationLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className="text-gray-700 hover:text-[#9e1687] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                  <Link 
                    href="/booking"
                    className="px-4 py-2 bg-[#9e1687] text-white font-medium rounded-lg hover:bg-[#8a1275] transition-all duration-300"
                  >
                    Reservar
                  </Link>
                </nav>
                
                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </header>
          
          {/* Main Content */}
          <main className="pt-20">
            {children}
          </main>
          
          {/* Footer with Chat Button */}
          <Footer />
          
          {/* Add the floating chat button directly in the layout */}
          <FloatingChatButton />
        </ChatProvider>
      </body>
    </html>
  );
}