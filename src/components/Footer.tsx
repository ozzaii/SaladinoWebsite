"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentYear = isClient ? new Date().getFullYear() : 2024;

  return (
    <footer className="relative bg-gray-900 text-white pt-20 pb-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9e1687] via-[#14b8a6] to-[#9e1687]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#9e1687]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#14b8a6]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-10 relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 fade-up-stagger">
          {/* Company Information */}
          <div className="space-y-6 fade-up-item">
            <Link href="/" className="flex items-start">
              <div className="relative w-48 h-12">
                <Image 
                  src={getAssetPath("/images/saladino-travel-logo.png")} 
                  alt="Saladino Travel" 
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            
            <p className="text-gray-400 max-w-xs">
              Experiencias de viaje personalizadas en Turquía y Dubái, diseñadas para viajeros hispanohablantes.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6 fade-up-item">
            <h3 className="text-xl font-semibold mb-4 inline-block">
              Quick Links
              <div className="h-1 w-12 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] rounded-full mt-2" />
            </h3>
            
            <ul className="space-y-3">
              {[
                { text: 'Home', href: '/' },
                { text: 'Tours', href: '/tours' },
                { text: 'Destinations', href: '/destinations' },
                { text: 'About Us', href: '/about' },
                { text: 'Contact', href: '/contact' },
                { text: 'AI Travel Assistant', href: '/ai-assistant' },
              ].map((link, i) => (
                <li key={i} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Popular Destinations */}
          <div className="space-y-6 fade-up-item">
            <h3 className="text-xl font-semibold mb-4 inline-block">
              Popular Destinations
              <div className="h-1 w-12 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] rounded-full mt-2" />
            </h3>
            
            <ul className="space-y-3">
              {[
                { text: 'Istanbul', href: '/destinations/istanbul' },
                { text: 'Cappadocia', href: '/destinations/cappadocia' },
                { text: 'Pamukkale', href: '/destinations/pamukkale' },
                { text: 'Dubai', href: '/destinations/dubai' },
              ].map((destination, i) => (
                <li key={i} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link href={destination.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {destination.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6 fade-up-item">
            <h3 className="text-xl font-semibold mb-4 inline-block">
              Contact Us
              <div className="h-1 w-12 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] rounded-full mt-2" />
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@saladinotravel.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">+90 555 123 4567</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Istanbul, Turkey</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-16 md:mt-20 p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 fade-up-item">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:pr-8">
              <h4 className="text-2xl font-semibold text-white mb-3">Get Travel Updates</h4>
              <p className="text-gray-400">Subscribe to our newsletter to receive exclusive offers and the latest news on our tours and destinations.</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#9e1687] placeholder:text-gray-500"
                />
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#9e1687]/20">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Saladino Travel. All rights reserved.
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .fade-up-stagger > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.5s ease-out forwards;
        }
        
        .fade-up-stagger > *:nth-child(1) { animation-delay: 0.1s; }
        .fade-up-stagger > *:nth-child(2) { animation-delay: 0.2s; }
        .fade-up-stagger > *:nth-child(3) { animation-delay: 0.3s; }
        .fade-up-stagger > *:nth-child(4) { animation-delay: 0.4s; }
        
        .fade-up-item {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.5s ease-out forwards;
          animation-delay: 0.5s;
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 