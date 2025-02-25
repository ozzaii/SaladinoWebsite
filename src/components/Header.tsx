"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative flex items-center">
          {imgError ? (
            <div className="text-2xl font-display font-bold">
              <span className="text-[#9e1687]">Saladino</span>
              <span className="text-[#14b8a6]">Travel</span>
            </div>
          ) : (
            <Image 
              src="/images/saladino-travel-logo.svg" 
              alt="Saladino Travel" 
              width={180} 
              height={70}
              className="object-contain h-12 md:h-14 w-auto transition-transform hover:scale-105"
              priority
              onError={() => setImgError(true)}
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { label: 'Home', href: '/' },
            { label: 'Tours', href: '/tours' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'AI Assistant', href: '/ai-assistant' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-gray-700 hover:text-primary-600 rounded-md font-medium transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <button
            className="px-4 py-2 text-gray-700 hover:text-primary-600 rounded-md font-medium transition-colors"
          >
            ES/EN
          </button>
          <Link
            href="/booking"
            className="ml-4 px-6 py-2.5 bg-primary-600 text-white rounded-lg font-semibold transition-all hover:bg-primary-700 hover:shadow-md transform hover:-translate-y-0.5"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container-custom mx-auto px-4 py-4 flex flex-col space-y-2">
          {[
            { label: 'Home', href: '/' },
            { label: 'Tours', href: '/tours' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'AI Assistant', href: '/ai-assistant' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
          >
            ES/EN
          </button>
          <Link
            href="/booking"
            className="mt-4 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold text-center transition-all hover:bg-primary-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 