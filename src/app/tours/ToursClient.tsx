'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/utils/paths';

// Define tour categories
const categories = [
  { id: 'all', name: 'All Tours' },
  { id: 'turkey', name: 'Turkey' },
  { id: 'multi-country', name: 'Multi-Country' },
  { id: 'cultural', name: 'Cultural' },
  { id: 'adventure', name: 'Adventure' }
];

// Tour data
const toursData = [
  {
    id: 'super-turkey',
    slug: 'super-turkey',
    title: 'Super Turkey Tour',
    subtitle: 'The complete Turkish experience',
    duration: '9 days',
    description: 'Our signature tour exploring Istanbul, Cappadocia, Pamukkale, and Ephesus with luxury accommodations and Spanish-speaking guides.',
    image: '/images/tours/real-images/istanbul.jpg',
    price: 1499,
    categories: ['turkey', 'cultural']
  },
  {
    id: 'istanbul-cappadocia',
    slug: 'istanbul-cappadocia',
    title: 'Istanbul-Cappadocia Tour',
    subtitle: 'The essentials of Turkey',
    duration: '6 days',
    description: 'Experience the rich history of Istanbul and the magical landscapes of Cappadocia with our expert local guides and premium accommodations.',
    image: '/images/tours/real-images/istanbul-hagia-sophia.jpg',
    price: 899,
    categories: ['turkey', 'cultural']
  },
  {
    id: 'turkey-dubai',
    slug: 'turkey-dubai',
    title: 'Turkey-Dubai Combined Tour',
    subtitle: 'From ancient to ultramodern',
    duration: '11 days',
    description: "The perfect combination of Turkey's rich history and Dubai's modern luxury in one seamless journey designed for discerning travelers.",
    image: '/images/tours/real-images/dubai.jpg',
    price: 1899,
    categories: ['multi-country', 'adventure', 'cultural']
  },
  {
    id: 'aegean-dreams',
    slug: 'aegean-dreams',
    title: 'Aegean Dreams Cruise',
    subtitle: 'Wonders of the Aegean',
    duration: '8 days',
    description: 'Sail the turquoise waters of the Aegean Sea, visiting historic Greek islands and the stunning Turkish coastline.',
    image: '/images/tours/real-images/aegean.jpg',
    price: 1699,
    categories: ['multi-country', 'adventure']
  },
  {
    id: 'cappadocia-adventure',
    slug: 'cappadocia-adventure',
    title: 'Cappadocia Adventure',
    subtitle: 'Experience the heart of Turkey',
    duration: '5 days',
    description: 'An action-packed exploration of Cappadocia with hot air ballooning, hiking, and ATV adventures through the unique landscape.',
    image: '/images/tours/real-images/cappadocia.jpg',
    price: 799,
    categories: ['turkey', 'adventure']
  },
  {
    id: 'turkey-greece',
    slug: 'turkey-greece',
    title: 'Turkey & Greece Highlights',
    subtitle: 'Two cultures, one experience',
    duration: '14 days',
    description: 'Discover the best of two ancient civilizations with visits to Istanbul, Cappadocia, Athens, and Santorini.',
    image: '/images/tours/real-images/santorini.jpg',
    price: 2299,
    categories: ['multi-country', 'cultural']
  }
];

export default function ToursClient() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTours, setFilteredTours] = useState(toursData);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Filter tours based on selected category and search term
  useEffect(() => {
    const filtered = toursData.filter(tour => {
      const matchesCategory = selectedCategory === 'all' || tour.categories.includes(selectedCategory);
      const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           tour.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    setFilteredTours(filtered);
  }, [selectedCategory, searchTerm]);
  
  return (
    <main className="min-h-screen pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-gray-900">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <Image 
            src={getAssetPath("/images/tours/tours-hero.jpg")} 
            alt="Luxury tours"
            fill
            className="object-cover scale-[1.15] brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-6 md:px-10 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Premium <span className="text-[#14b8a6]">Tour Experiences</span>
            </motion.h1>
            
            <motion.p 
              className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Exclusive Spanish-speaking guided tours with luxury accommodations and authentic local experiences.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Search & Filter Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Search Bar */}
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search tours, experiences, or destinations..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e1687] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#9e1687] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <motion.div
                  key={tour.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-[240px] overflow-hidden">
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image 
                        src={getAssetPath(tour.image)} 
                        alt={tour.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-[#14b8a6] text-white px-4 py-2 text-sm font-medium rounded-full">
                        {tour.duration}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-2xl font-bold text-white mb-1">{tour.title}</h3>
                      <p className="text-[#14b8a6] italic text-sm">{tour.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 line-clamp-3">{tour.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="text-2xl font-bold text-[#9e1687]">${tour.price}</div>
                        <div className="text-gray-500 text-sm">USD per person</div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tour.categories.map(categoryId => {
                            const category = categories.find(c => c.id === categoryId);
                            return category ? (
                              <span 
                                key={categoryId} 
                                className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full"
                              >
                                {category.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/tours/${tour.slug}`}
                      className="block w-full py-3 text-center text-white font-medium rounded-lg bg-gradient-to-r from-[#9e1687] to-[#14b8a6] hover:shadow-lg transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No tours found</h3>
              <p className="text-gray-500 mb-6">
                We couldn't find any tours matching your search criteria.
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Not Finding What You're Looking For?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We specialize in custom tour experiences tailored to your preferences. Let us create the perfect itinerary for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-[#9e1687] text-white font-medium rounded-lg hover:bg-[#8a1275] transition-all duration-300 shadow-lg"
              >
                Request Custom Tour
              </Link>
              <Link 
                href="/ai-assistant"
                className="px-8 py-4 flex items-center justify-center gap-2 bg-white text-[#14b8a6] font-medium rounded-lg border border-[#14b8a6] hover:bg-[#14b8a6]/5 transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
                Chat with AI Concierge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 