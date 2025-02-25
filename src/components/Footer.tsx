"use client"

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-[#9e1687]">
        <div className="container-custom mx-auto py-12 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl md:text-3xl font-display text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/80">
                Get exclusive offers, travel tips, and updates on our newest adventures delivered to your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-md">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg flex-1 focus:ring-2 focus:ring-teal-300 border-none outline-none"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-[#14b8a6] text-white font-medium rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-white/70 mt-2">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container-custom mx-auto pt-16 pb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="space-y-6">
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl font-display font-bold">
                <span className="text-[#9e1687]">Saladino</span>
                <span className="text-[#14b8a6]">travel</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Specializing in exceptional travel experiences to Turkey and Dubai. Crafting unforgettable journeys since 2010.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {[
                { name: 'Facebook', icon: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' },
                { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                { name: 'Instagram', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' },
                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              ].map((social) => (
                <a 
                  key={social.name}
                  href={`https://${social.name.toLowerCase()}.com/saladinotravel`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#9e1687] transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <svg 
                    className="w-5 h-5 fill-current" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Tours', href: '/tours' },
                { name: 'Destinations', href: '/destinations' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'AI Travel Assistant', href: '/ai-assistant' },
                { name: 'Book Now', href: '/booking' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#14b8a6] transition-colors duration-300 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Popular Destinations */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              {[
                { name: 'Istanbul', href: '/destinations/istanbul' },
                { name: 'Cappadocia', href: '/destinations/cappadocia' },
                { name: 'Athens', href: '/destinations/athens' },
                { name: 'Santorini', href: '/destinations/santorini' },
                { name: 'Dubai', href: '/destinations/dubai' },
                { name: 'Cairo', href: '/destinations/cairo' },
              ].map((destination) => (
                <li key={destination.name}>
                  <Link 
                    href={destination.href} 
                    className="text-gray-400 hover:text-[#14b8a6] transition-colors duration-300 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#14b8a6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">
                  Sahkulu Mah, Sahdegirmeni Sok, 12/2 Beyoglu, Istanbul 34420, TR
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#14b8a6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">+1 786-402-2050</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#14b8a6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:booking@saladinotravel.com" className="text-gray-400 hover:text-[#14b8a6] transition-colors">
                  booking@saladinotravel.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#14b8a6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400">
                  Mon-Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">
            © {currentYear} Saladino Travel. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-[#14b8a6] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#14b8a6] transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-[#14b8a6] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 