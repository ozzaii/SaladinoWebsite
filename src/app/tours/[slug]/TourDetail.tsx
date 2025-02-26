'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/utils/paths';

// Define the Tour type for proper TypeScript support
interface Day {
  day: number;
  title: string;
  description: string;
  accommodation?: string;
}

interface TourData {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  image: string;
  gallery: string[];
  price: number;
  priceIncludes: string[];
  priceExcludes: string[];
  highlights: string[];
  itinerary: Day[];
}

interface TourDetailProps {
  tourData: TourData;
}

export default function TourDetail({ tourData }: TourDetailProps) {
  const [scrollY, setScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Destructure tour data for easier access
  const {
    title, subtitle, duration, description, image, 
    gallery, price, priceIncludes, priceExcludes, 
    highlights, itinerary, id
  } = tourData;

  return (
    <main className="pt-20 pb-16 bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 relative">
          <div 
            className="relative w-full h-full"
            style={{ 
              transform: `translateY(${scrollY * 0.15}px)`,
              transition: 'transform 0.1s ease-out' 
            }}
          >
            <Image 
              src={getAssetPath(image)}
              alt={title}
              fill
              className="object-cover scale-[1.15] brightness-[0.7]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 bg-[#14b8a6] text-white text-sm font-medium rounded-full mb-6">
                {duration}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                {title}
              </h1>
              
              <p className="text-2xl text-[#14b8a6] italic mb-6">
                {subtitle}
              </p>
              
              <div className="text-3xl font-bold text-white mb-8">
                ${price} <span className="text-lg font-normal text-white/80">per person</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/booking"
                  className="px-6 py-3 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Book This Tour
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  Ask for Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-gray-700">{description}</p>
              </div>
              
              {/* Highlights */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Highlights</h2>
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#14b8a6]/10 flex items-center justify-center text-[#14b8a6] mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-gray-700">{highlight}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Photo Gallery */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                
                {gallery.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {gallery.map((galleryImage, index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
                        onClick={() => {
                          setCurrentImage(index);
                          setGalleryOpen(true);
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={getAssetPath(galleryImage)}
                            alt={`${title} image ${index + 1}`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Image Modal Gallery */}
                {galleryOpen && (
                  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-5xl mx-auto">
                      <button 
                        className="absolute top-4 right-4 text-white z-50 p-2"
                        onClick={() => setGalleryOpen(false)}
                      >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={getAssetPath(gallery[currentImage])}
                          alt={`${title} gallery image`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      
                      <div className="flex justify-between mt-4">
                        <button 
                          className="text-white p-2"
                          onClick={() => setCurrentImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
                        >
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <button 
                          className="text-white p-2"
                          onClick={() => setCurrentImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
                        >
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Detailed Itinerary */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
                
                <div className="space-y-8">
                  {itinerary.map((day, index) => (
                    <div key={index} className="border-l-4 border-[#14b8a6] pl-6 relative">
                      <div className="absolute top-0 left-0 w-5 h-5 -ml-[10px] rounded-full bg-[#14b8a6]"></div>
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="bg-[#14b8a6]/10 text-[#14b8a6] font-bold rounded-full px-3 py-1 text-sm mr-3">
                            Day {day.day}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                        </div>
                        <p className="text-gray-700 mb-3">{day.description}</p>
                        {day.accommodation && (
                          <div className="flex items-center text-gray-600 text-sm">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span>Accommodation: {day.accommodation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm sticky top-32">
                {/* Quick Facts */}
                <div className="p-8 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                  
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#9e1687]/10 flex items-center justify-center text-[#9e1687] mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-medium">{duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#14b8a6]/10 flex items-center justify-center text-[#14b8a6] mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Price</div>
                        <div className="font-medium">${price} per person</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#9e1687]/10 flex items-center justify-center text-[#9e1687] mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Languages</div>
                        <div className="font-medium">English, Spanish</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#14b8a6]/10 flex items-center justify-center text-[#14b8a6] mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Tour Style</div>
                        <div className="font-medium">Luxury Small Group</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Price Includes */}
                <div className="p-8 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Price Includes</h3>
                  
                  <ul className="space-y-2">
                    {priceIncludes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-[#14b8a6] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Price Excludes */}
                <div className="p-8 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Price Excludes</h3>
                  
                  <ul className="space-y-2">
                    {priceExcludes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <div className="p-8">
                  <Link
                    href="/booking"
                    className="block w-full py-3 bg-[#9e1687] text-white text-center font-medium rounded-lg hover:bg-[#8a1275] transition-all duration-300 mb-4"
                  >
                    Book Now
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="block w-full py-3 bg-white text-[#9e1687] text-center font-medium rounded-lg border border-[#9e1687] hover:bg-[#9e1687]/5 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 