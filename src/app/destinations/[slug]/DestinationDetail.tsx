'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/utils/paths';

// Define the Destination type for proper TypeScript support
interface Fact {
  icon: string;
  title: string;
  description: string;
}

interface DestinationData {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  images: string[];
  mainImage: string;
  facts: Fact[];
}

interface DestinationDetailProps {
  destinationData: DestinationData;
}

export default function DestinationDetail({ destinationData }: DestinationDetailProps) {
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

  // Destructure destination data for easier access
  const {
    name, title, subtitle, description, 
    highlights, images, mainImage, facts
  } = destinationData;

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
              src={getAssetPath(mainImage)}
              alt={name}
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
                Exclusive Destination
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                {name}
              </h1>
              
              <p className="text-3xl text-[#14b8a6] italic mb-6">
                {title}
              </p>
              
              <p className="text-xl text-white/80 mb-8">
                {subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href={`/tours`}
                  className="px-6 py-3 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  View Tours to {name}
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  Plan Custom Trip
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About {name}</h2>
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
              
              {/* Image Gallery */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                
                {images.length > 0 && (
                  <div className="mt-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {images.map((image, index) => (
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
                              src={getAssetPath(image)}
                              alt={`${name} image ${index + 1}`}
                              fill
                              className="object-cover hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
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
                          src={getAssetPath(images[currentImage])}
                          alt={`${name} gallery image`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      
                      <div className="flex justify-between mt-4">
                        <button 
                          className="text-white p-2"
                          onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                        >
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <button 
                          className="text-white p-2"
                          onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
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
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm sticky top-32">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                
                <div className="space-y-6 mb-8">
                  {facts.map((fact, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-3xl mr-4">{fact.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-900">{fact.title}</h4>
                        <p className="text-gray-600">{fact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Explore Tours</h3>
                  
                  <Link 
                    href="/tours"
                    className="block w-full py-3 text-center text-white font-medium rounded-lg bg-gradient-to-r from-[#9e1687] to-[#14b8a6] hover:shadow-lg transition-all duration-300"
                  >
                    View All Tours
                  </Link>
                  
                  <div className="text-center mt-4 text-gray-500 text-sm">
                    Our tours include {name} and other amazing destinations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#9e1687]/10 to-[#14b8a6]/10">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience {name}?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Join our premium tours with expert guides, luxury accommodations, and unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/booking"
                className="px-8 py-4 bg-[#9e1687] text-white font-medium rounded-lg hover:bg-[#8a1275] transition-all duration-300 shadow-lg"
              >
                Book a Tour
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-[#9e1687] font-medium rounded-lg border border-[#9e1687] hover:bg-[#9e1687]/5 transition-all duration-300 shadow-lg"
              >
                Contact a Travel Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 