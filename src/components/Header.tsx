"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';

interface HeaderProps {
  scrolled?: boolean;
}

export default function Header({ scrolled = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  
  // Set active link based on pathname
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Tours', path: '/tours' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Booking', path: '/booking' },
    { 
      name: 'AI Assistant', 
      path: '/ai-assistant',
      special: true 
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 md:px-10">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10 group" onClick={() => setActiveLink('/')}>
            <div className="relative h-12 w-44 overflow-hidden">
              <Image 
                src={getAssetPath("/images/saladino-travel-logo.png")} 
                alt="Saladino Travel" 
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105" 
                priority
              />
            </div>
            {!scrolled && (
              <div 
                className="absolute -inset-4 bg-white/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10"
              />
            )}
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.path}
                onClick={() => setActiveLink(item.path)}
                className={`relative group ${
                  item.special 
                    ? 'py-2 px-4 rounded-full bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white font-medium'
                    : activeLink === item.path 
                      ? 'text-gray-900 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
                {!item.special && activeLink === item.path && (
                  <div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9e1687] to-[#14b8a6]"
                  />
                )}
                {!item.special && activeLink !== item.path && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
                {item.special && (
                  <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
                )}
              </Link>
            ))}
          </div>
          
          {/* Improved Mobile Menu Button with better clickability */}
          <button 
            className="md:hidden relative z-[60] p-4 cursor-pointer focus:outline-none touch-manipulation"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            style={{ touchAction: 'manipulation' }}
          >
            <div className={`flex flex-col justify-between w-7 h-5 transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`}>
              <span className={`h-0.5 w-7 ${scrolled || mobileMenuOpen ? 'bg-[#9e1687]' : 'bg-white'} transform transition-transform duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-7 ${scrolled || mobileMenuOpen ? 'bg-[#9e1687]' : 'bg-white'} transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-7 ${scrolled || mobileMenuOpen ? 'bg-[#9e1687]' : 'bg-white'} transform transition-transform duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu with CSS transitions instead of Framer Motion */}
      <div 
        className={`md:hidden fixed inset-0 top-0 pt-24 bg-white/98 backdrop-blur-md z-[55] p-6 shadow-xl transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{
          animation: mobileMenuOpen ? 'fadeIn 0.3s ease-in-out' : 'none',
          pointerEvents: mobileMenuOpen ? 'auto' : 'none'
        }}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.path}
              onClick={() => {
                setActiveLink(item.path);
                setMobileMenuOpen(false);
              }}
              className={`text-lg ${
                item.special 
                  ? 'py-3 px-4 rounded-full bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white font-medium text-center'
                  : activeLink === item.path 
                    ? 'text-gray-900 font-medium' 
                    : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
} 