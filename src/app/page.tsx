'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';
import HeroSection from '@/components/HeroSection';

// Tour packages data - Updated to match the actual offerings
const featuredTours = [
  {
    id: 'super-turkey',
    title: 'Super Turkey Tour',
    subtitle: 'The complete Turkish experience',
    duration: '9 days',
    description: 'Our signature tour exploring Istanbul, Cappadocia, Pamukkale, and Ephesus with luxury accommodations and Spanish-speaking guides.',
    image: '/images/tours/real-images/istanbul.jpg',
    price: 1499,
    highlights: ['Hot air balloon ride in Cappadocia', 'Private Bosphorus cruise', 'Ancient ruins of Ephesus', 'Thermal springs of Pamukkale']
  },
  {
    id: 'istanbul-cappadocia',
    title: 'Istanbul-Cappadocia Tour',
    subtitle: 'The essentials of Turkey',
    duration: '6 days',
    description: 'Experience the rich history of Istanbul and the magical landscapes of Cappadocia with our expert local guides and premium accommodations.',
    image: '/images/tours/real-images/istanbul-hagia-sophia.jpg',
    price: 899,
    highlights: ['Grand Bazaar shopping experience', 'Underground cities tour', 'Luxury cave hotel stay', 'Turkish cuisine masterclass']
  },
  {
    id: 'turkey-dubai',
    title: 'Turkey-Dubai Combined Tour',
    subtitle: 'From ancient to ultramodern',
    duration: '11 days',
    description: 'The perfect combination of Turkey\'s rich history and Dubai\'s modern luxury in one seamless journey designed for discerning travelers.',
    image: '/images/tours/real-images/dubai.jpg',
    price: 1899,
    highlights: ['Desert safari in Dubai', 'Burj Khalifa VIP access', 'Private yacht experience', 'Exclusive shopping districts tour']
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    country: 'Mexico',
    text: 'Our trip to Turkey with Saladino Travel was absolutely magical! The guides were knowledgeable, the accommodations were luxurious, and the experiences were unforgettable.',
    avatar: '/images/testimonials/latin-american-woman.jpg',
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    country: 'Colombia',
    text: 'The combination of Turkey and Dubai exceeded all my expectations. The contrast between cultures was fascinating and every detail was perfectly organized for our group.',
    avatar: '/images/testimonials/latin-american-man.jpg',
  },
  {
    id: 3,
    name: 'Ana Lucia Torres',
    country: 'Argentina',
    text: 'As a solo traveler, I felt safe and welcome. The guides were exceptional and spoke perfect English. The hot air balloon experience in Cappadocia was the highlight.',
    avatar: '/images/testimonials/latin-american-woman2.jpg',
  },
];

// Destination highlights
const destinations = [
  {
    name: 'Istanbul',
    image: '/images/destinations/istanbul.jpg',
    description: 'Where East meets West. Experience the rich tapestry of cultures in this ancient city straddling two continents.',
    path: '/destinations/istanbul'
  },
  {
    name: 'Cappadocia',
    image: '/images/destinations/cappadocia.jpg',
    description: 'A dreamlike landscape of fairy chimneys, cave dwellings, and the world\'s most spectacular hot air balloon experience.',
    path: '/destinations/cappadocia'
  },
  {
    name: 'Dubai',
    image: '/images/destinations/dubai.jpg',
    description: 'Ultra-modern luxury meets traditional Arabic hospitality in this city of superlatives.',
    path: '/destinations/dubai'
  },
  {
    name: 'Pamukkale',
    image: '/images/destinations/pamukkale.jpg',
    description: 'The "Cotton Castle" with its stunning white terraces of mineral-rich thermal waters and ancient ruins.',
    path: '/destinations/pamukkale'
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [toursRef, toursInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [destinationsRef, destinationsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Tour Selector Section */}
      <section ref={toursRef} className="py-32 bg-white relative z-10">
        {/* Decorative element */}
        <div className="absolute left-0 top-0 w-32 h-32 bg-[#14b8a6]/5 rounded-br-[100px]"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#9e1687]/5 rounded-tl-[200px]"></div>
        
        <div className="container mx-auto px-6 md:px-10 max-w-screen-xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-[#9e1687] text-sm tracking-widest uppercase font-medium px-4 py-2 border-l-2 border-r-2 border-[#9e1687]/20">
                SIGNATURE EXPERIENCES
              </span>
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-display font-bold text-gray-900">
              Curated Luxury <span className="text-[#9e1687]">Tour Experiences</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Designed for Latin American travelers seeking the perfect balance of luxury, authenticity, and cultural immersion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredTours.map((tour) => (
              <div 
                key={tour.id}
                className="group bg-white relative rounded-sm overflow-hidden shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_70px_-15px_rgba(0,0,0,0.2)] transition-all duration-700"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                <div className="relative h-[260px] overflow-hidden">
                  <Image 
                    src={getAssetPath(tour.image)} 
                    alt={tour.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-[#14b8a6] text-white px-4 py-2 text-sm font-medium">
                      {tour.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 border-b border-l border-r border-gray-100">
                  <h3 className="text-2xl font-bold text-[#9e1687] mb-1">{tour.title}</h3>
                  <p className="text-[#14b8a6] italic text-sm mb-4">{tour.subtitle}</p>
                  <p className="text-gray-600 mb-6 line-clamp-3">{tour.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl font-display font-bold text-[#9e1687]">${tour.price}</div>
                      <div className="text-gray-500 text-sm">USD per person</div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Tour Highlights:</h4>
                      {tour.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <span className="mr-2 text-[#14b8a6]">•</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/tours/${tour.id}`}
                    className="group inline-flex items-center font-medium text-[#9e1687] hover:text-[#14b8a6] transition-colors duration-300"
                  >
                    <span>View Tour Details</span>
                    <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/tours"
              className="group relative inline-flex items-center px-10 py-4 overflow-hidden"
            >
              <span className="absolute inset-0 border border-[#9e1687] group-hover:border-[#14b8a6] transition-colors duration-300"></span>
              <span className="relative text-[#9e1687] group-hover:text-[#14b8a6] font-medium transition-colors duration-300">
                Explore All Tours
                <svg className="inline-block w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Destinations Section */}
      <section ref={destinationsRef} className="py-32 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6 md:px-10 max-w-screen-xl">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-[#14b8a6] text-sm tracking-widest uppercase font-medium px-4 py-2 border-l-2 border-r-2 border-[#14b8a6]/20">
                LUXURY DESTINATIONS
              </span>
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-display font-bold text-gray-900">
              Iconic <span className="text-[#14b8a6]">Destinations</span> & Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover the perfect blend of ancient history, breathtaking landscapes, and modern luxury.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="group overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <Image 
                    src={getAssetPath(destination.image)} 
                    alt={destination.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                    <p className="text-white/80 transition-all duration-300 opacity-0 group-hover:opacity-100">{destination.description}</p>
                    
                    <div className="mt-4">
                      <Link 
                        href={destination.path}
                        className="inline-flex items-center text-sm font-medium text-white hover:text-[#14b8a6] transition-colors duration-300"
                      >
                        <span>Discover</span>
                        <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-32 bg-white relative z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9e1687]/20 via-[#14b8a6]/20 to-[#9e1687]/20"></div>
        
        <div className="container mx-auto px-6 md:px-10 max-w-screen-xl">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-[#9e1687] text-sm tracking-widest uppercase font-medium px-4 py-2 border-l-2 border-r-2 border-[#9e1687]/20">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-display font-bold text-gray-900">
              What Our <span className="text-[#9e1687]">Clients</span> Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Stories from travelers who experienced our premium tours and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="relative h-auto bg-white p-10 shadow-[0_5px_30px_rgba(0,0,0,0.05)] rounded-lg">
              <div 
                key={currentTestimonial}
                className="flex flex-col md:flex-row items-center md:items-start gap-8"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
                  <Image 
                    src={getAssetPath(testimonials[currentTestimonial].avatar)} 
                    alt={testimonials[currentTestimonial].name} 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="text-[#14b8a6] mb-4">
                    <svg className="w-8 h-8 inline-block opacity-40" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg italic mb-6">
                    {testimonials[currentTestimonial].text}
                  </p>
                  
                  <div>
                    <h4 className="text-[#9e1687] font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-500">{testimonials[currentTestimonial].country}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex justify-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                    idx === currentTestimonial ? 'bg-[#9e1687] scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 relative overflow-hidden">
        <div className="relative h-full w-full absolute inset-0">
          <Image 
            src={getAssetPath("/images/cta-background.jpg")} 
            alt="Call to action background" 
            fill 
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-10 max-w-screen-xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <span className="text-[#14b8a6] text-sm tracking-widest uppercase font-medium px-4 py-2 border-l-2 border-r-2 border-[#14b8a6]/20 bg-black/30 inline-block mb-6">
                READY TO EXPLORE
              </span>
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-md"
            >
              Start your <span className="text-[#14b8a6]">premium journey</span> today
            </h2>
            
            <p 
              className="text-white/90 text-xl mb-10 leading-relaxed drop-shadow-sm"
            >
              Discover the magic of Turkey and Dubai with our expert guides and meticulously crafted experiences.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact" 
                className="px-10 py-4 bg-[#9e1687] text-white font-medium text-lg rounded-lg hover:bg-[#8a1275] transition-colors duration-300 shadow-lg"
              >
                Contact Our Team
              </Link>
              
              <Link 
                href="/tours" 
                className="px-10 py-4 bg-white text-[#9e1687] font-medium text-lg rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Browse Our Tours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 