"use client"

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/utils/paths';

// Tour data
const toursData = {
  'super-turkey': {
    id: 'super-turkey',
    title: 'Super Turkey Tour',
    subtitle: 'La experiencia Turca completa',
    duration: '9 days',
    description: 'Our signature tour exploring Istanbul, Cappadocia, Pamukkale, and Ephesus with luxury accommodations and Spanish-speaking guides. Experience the rich cultural tapestry of Turkey from the bustling bazaars of Istanbul to the surreal landscapes of Cappadocia, the pristine white terraces of Pamukkale, and the ancient ruins of Ephesus.',
    image: '/images/tours/real-images/istanbul.jpg',
    gallery: [
      '/images/destinations/istanbul.jpg',
      '/images/destinations/cappadocia.jpg',
      '/images/destinations/pamukkale.jpg',
      '/images/destinations/istanbul-blue-mosque.jpg',
      '/images/destinations/cappadocia-landscape.jpg',
      '/images/destinations/pamukkale-terraces.jpg'
    ],
    price: 1499,
    priceIncludes: [
      'All accommodations (4-5 star hotels)',
      'Domestic flights within Turkey',
      'All transfers and transportation',
      'Professional Spanish-speaking guides',
      'Daily breakfast and select meals',
      'Entrance fees to all attractions',
      'Hot air balloon ride in Cappadocia',
      '24/7 customer support'
    ],
    priceExcludes: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Optional activities not listed in the itinerary',
      'Tips for guides and drivers'
    ],
    highlights: [
      'Ancient ruins of Ephesus',
      'Thermal springs of Pamukkale',
      "Istanbul's Grand Bazaar",
      'Hagia Sophia and Blue Mosque tour',
      'Underground cities in Cappadocia',
      'Traditional Turkish hammam experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Istanbul',
        description: "Welcome to Turkey! Upon arrival at Istanbul Airport, you'll be met and transferred to your hotel. Enjoy a welcome dinner with your tour group in the evening.",
        accommodation: 'Luxury hotel in Istanbul'
      },
      {
        day: 2,
        title: 'Istanbul Old City Tour',
        description: 'Full day exploring the historic peninsula including Hagia Sophia, Blue Mosque, Topkapi Palace, and the Grand Bazaar with expert guides explaining the rich history.',
        accommodation: 'Luxury hotel in Istanbul'
      },
      {
        day: 3,
        title: 'Bosphorus Cruise & Spice Market',
        description: 'Morning visit to Egyptian Spice Market followed by a private Bosphorus cruise between Europe and Asia. Evening at leisure.',
        accommodation: 'Luxury hotel in Istanbul'
      },
      {
        day: 4,
        title: 'Flight to Cappadocia',
        description: 'Morning flight to Cappadocia. Afternoon exploring the fairy chimneys and unique rock formations in Devrent and Pasabag valleys.',
        accommodation: 'Cave hotel in Cappadocia'
      },
      {
        day: 5,
        title: 'Hot Air Balloon & Göreme',
        description: 'Optional early morning hot air balloon ride over the magical landscape. Later, visit the Göreme Open Air Museum and underground cities.',
        accommodation: 'Cave hotel in Cappadocia'
      },
      {
        day: 6,
        title: 'Transfer to Pamukkale',
        description: 'Scenic journey to Pamukkale with stops at traditional villages along the way for an authentic Turkish experience.',
        accommodation: 'Spa hotel in Pamukkale'
      },
      {
        day: 7,
        title: 'Pamukkale & Hierapolis',
        description: 'Full day exploring the white terraces of Pamukkale and ancient city of Hierapolis, with time to bathe in the thermal pools.',
        accommodation: 'Spa hotel in Pamukkale'
      },
      {
        day: 8,
        title: 'Ephesus Ancient City',
        description: 'Visit the remarkably preserved ancient city of Ephesus, including the Library of Celsus, Temple of Hadrian, and ancient theater.',
        accommodation: 'Boutique hotel in Kusadasi'
      },
      {
        day: 9,
        title: 'Departure',
        description: 'Transfer to Izmir Airport for your departure flight. End of our services.'
      }
    ]
  },
  'istanbul-cappadocia': {
    id: 'istanbul-cappadocia',
    title: 'Istanbul & Cappadocia Tour',
    subtitle: 'Lo esencial de Turquía',
    duration: '6 days',
    description: "Experience the rich history of Istanbul and the magical landscapes of Cappadocia with our expert local guides and premium accommodations. This focused tour combines the best of Turkey's most captivating destinations: the historical and cultural richness of Istanbul with the otherworldly beauty of Cappadocia.",
    image: '/images/tours/real-images/istanbul-hagia-sophia.jpg',
    gallery: [
      '/images/destinations/istanbul.jpg',
      '/images/destinations/cappadocia.jpg',
      '/images/destinations/istanbul-blue-mosque.jpg',
      '/images/destinations/cappadocia-balloons.jpg',
      '/images/destinations/istanbul-grand-bazaar.jpg',
      '/images/destinations/cappadocia-landscape.jpg'
    ],
    price: 899,
    priceIncludes: [
      'All accommodations (4-5 star hotels)',
      'Domestic flight from Istanbul to Cappadocia',
      'All transfers and transportation',
      'Professional Spanish-speaking guides',
      'Daily breakfast and select meals',
      'Entrance fees to all attractions',
      'Hot air balloon ride in Cappadocia',
      '24/7 customer support'
    ],
    priceExcludes: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Optional activities not listed in the itinerary',
      'Tips for guides and drivers'
    ],
    highlights: [
      'Hot air balloon ride in Cappadocia',
      'Private Bosphorus cruise',
      'Guided tour of Topkapi Palace',
      'Underground cities exploration',
      'Turkish cooking class experience',
      'Grand Bazaar shopping experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Istanbul',
        description: "Welcome to Turkey! Upon arrival at Istanbul Airport, you'll be met and transferred to your hotel. Enjoy a welcome dinner with your tour group in the evening.",
        accommodation: 'Luxury hotel in Istanbul'
      },
      {
        day: 2,
        title: 'Istanbul Old City Tour',
        description: 'Full day exploring the historic peninsula including Hagia Sophia, Blue Mosque, Topkapi Palace, and the Grand Bazaar with expert guides explaining the rich history.',
        accommodation: 'Luxury hotel in Istanbul'
      },
      {
        day: 3,
        title: 'Bosphorus Cruise & Turkish Cooking Class',
        description: 'Morning private Bosphorus cruise between Europe and Asia. Afternoon authentic Turkish cooking class with local chefs, followed by dinner enjoying your creations.',
        accommodation: 'Luxury hotel in Istanbul'
      },
      {
        day: 4,
        title: 'Flight to Cappadocia',
        description: 'Morning flight to Cappadocia. Afternoon exploring the fairy chimneys and unique rock formations in Devrent and Pasabag valleys.',
        accommodation: 'Cave hotel in Cappadocia'
      },
      {
        day: 5,
        title: 'Hot Air Balloon & Göreme',
        description: 'Early morning hot air balloon ride over the magical landscape. Later, visit the Göreme Open Air Museum, underground cities, and local artisan workshops.',
        accommodation: 'Cave hotel in Cappadocia'
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Transfer to Kayseri or Nevsehir Airport for your departure flight. End of our services.'
      }
    ]
  },
  'turkey-dubai': {
    id: 'turkey-dubai',
    title: 'Turkey & Dubai Combined Tour',
    subtitle: 'De lo ancestral a lo ultramoderno',
    duration: '12 days',
    description: "The perfect combination of Turkey's rich history and Dubai's modern luxury in one seamless journey designed for discerning travelers. Experience the cultural treasures of Istanbul and Cappadocia before flying to Dubai for an immersion in futuristic architecture, desert adventures, and world-class shopping.",
    image: '/images/tours/real-images/dubai.jpg',
    gallery: [
      '/images/destinations/istanbul.jpg',
      '/images/destinations/dubai.jpg',
      '/images/destinations/cappadocia.jpg',
      '/images/destinations/dubai-burj-khalifa.jpg',
      '/images/destinations/istanbul-grand-bazaar.jpg',
      '/images/destinations/dubai-desert.jpg'
    ],
    price: 1899,
    priceIncludes: [
      'All accommodations (5-star hotels)',
      'Domestic flight within Turkey',
      'International flight from Istanbul to Dubai',
      'All transfers and transportation',
      'Professional Spanish-speaking guides',
      'Daily breakfast and select meals',
      'Entrance fees to all attractions',
      'Desert safari in Dubai',
      'Burj Khalifa access',
      '24/7 customer support'
    ],
    priceExcludes: [
      'International flights to Istanbul and from Dubai',
      'Travel insurance',
      'Personal expenses',
      'Optional activities not listed in the itinerary',
      'Tips for guides and drivers'
    ],
    highlights: [
      'Desert safari in Dubai',
      'Burj Khalifa VIP access',
      'Private yacht experience',
      'Exclusive shopping districts tour',
      'Hot air balloon ride in Cappadocia',
      "Istanbul's Grand Bazaar",
      'Luxury dinner cruise on Dubai Marina',
      'Traditional Turkish hammam experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Istanbul',
        description: "Welcome to Turkey! Upon arrival at Istanbul Airport, you'll be met and transferred to your hotel. Enjoy a welcome dinner with your tour group in the evening.",
        accommodation: 'Luxury hotel in Istanbul'
      },
      {
        day: 2,
        title: 'Istanbul Old City Tour',
        description: 'Full day exploring the historic peninsula including Hagia Sophia, Blue Mosque, Topkapi Palace, and the Grand Bazaar with expert guides explaining the rich history.',
        accommodation: 'Luxury hotel in Istanbul'
      },
      {
        day: 3,
        title: 'Bosphorus Cruise & Spice Market',
        description: 'Morning visit to Egyptian Spice Market followed by a private Bosphorus cruise between Europe and Asia. Evening at leisure.',
        accommodation: 'Luxury hotel in Istanbul'
      },
      {
        day: 4,
        title: 'Flight to Cappadocia',
        description: 'Morning flight to Cappadocia. Afternoon exploring the fairy chimneys and unique rock formations in Devrent and Pasabag valleys.',
        accommodation: 'Cave hotel in Cappadocia'
      },
      {
        day: 5,
        title: 'Hot Air Balloon & Göreme',
        description: 'Early morning hot air balloon ride over the magical landscape. Later, visit the Göreme Open Air Museum, underground cities, and local artisan workshops.',
        accommodation: 'Cave hotel in Cappadocia'
      },
      {
        day: 6,
        title: 'Flight to Istanbul',
        description: 'Morning at leisure to explore the unique shops and cafes of Cappadocia. Afternoon flight back to Istanbul for a free evening.',
        accommodation: 'Luxury hotel in Istanbul'
      },
      {
        day: 7,
        title: 'Flight to Dubai',
        description: 'Morning flight to Dubai. Transfer to your luxury hotel and afternoon at leisure to begin exploring the city or relax by the pool.',
        accommodation: 'Luxury hotel in Dubai'
      },
      {
        day: 8,
        title: 'Dubai City Tour',
        description: 'Full day exploring Dubai including Burj Khalifa (world\'s tallest building), Dubai Mall, Dubai Frame, and the historic Al Fahidi district.',
        accommodation: 'Luxury hotel in Dubai'
      },
      {
        day: 9,
        title: 'Desert Safari Experience',
        description: 'Morning at leisure. Afternoon desert safari in vintage Land Rovers, camel riding, and traditional Bedouin dinner under the stars with entertainment.',
        accommodation: 'Luxury hotel in Dubai'
      },
      {
        day: 10,
        title: 'Dubai Yacht Experience & Shopping',
        description: "Morning private yacht cruise. Afternoon shopping tour to Dubai's best malls and traditional souks.",
        accommodation: 'Luxury hotel in Dubai'
      },
      {
        day: 11,
        title: 'Departure',
        description: 'Transfer to Dubai International Airport for your departure flight. End of our services.'
      }
    ]
  }
};

export default function TourPage() {
  const params = useParams();
  const slug = params.slug as string;
  const tour = toursData[slug as keyof typeof toursData];
  
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
  
  if (!tour) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tour Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, the tour you're looking for doesn't exist.</p>
        <Link 
          href="/tours"
          className="px-6 py-3 bg-[#9e1687] text-white font-medium rounded-lg hover:bg-[#8a1275] transition-all duration-300"
        >
          Explore All Tours
        </Link>
      </div>
    );
  }
  
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
              src={getAssetPath(tour.image)}
              alt={tour.title}
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
                {tour.duration}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3 leading-tight">
                {tour.title}
              </h1>
              
              <p className="text-2xl text-[#14b8a6] font-display italic mb-6">
                {tour.subtitle}
              </p>
              
              <div className="text-3xl font-bold text-white mb-8">
                ${tour.price} <span className="text-lg font-normal text-white/80">per person</span>
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
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-gray-700">{tour.description}</p>
              </div>
              
              {/* Highlights */}
              <div className="mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Highlights</h2>
                <div className="space-y-4">
                  {tour.highlights.map((highlight, index) => (
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
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Photo Gallery</h2>
                
                {tour.gallery.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {tour.gallery.map((image, index) => (
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
                            alt={`${tour.title} image ${index + 1}`}
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
                          src={getAssetPath(tour.gallery[currentImage])}
                          alt={`${tour.title} gallery image`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      
                      <div className="flex justify-between mt-4">
                        <button 
                          className="text-white p-2"
                          onClick={() => setCurrentImage((prev) => (prev === 0 ? tour.gallery.length - 1 : prev - 1))}
                        >
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <button 
                          className="text-white p-2"
                          onClick={() => setCurrentImage((prev) => (prev === tour.gallery.length - 1 ? 0 : prev + 1))}
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
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
                
                <div className="space-y-8">
                  {tour.itinerary.map((day, index) => (
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
                        <div className="font-medium">{tour.duration}</div>
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
                        <div className="font-medium">${tour.price} per person</div>
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
                    {tour.priceIncludes.map((item, index) => (
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
                    {tour.priceExcludes.map((item, index) => (
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
      
      {/* Related Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-10 text-center">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(toursData)
              .filter(relatedTour => relatedTour.id !== tour.id)
              .slice(0, 3)
              .map((relatedTour) => (
                <Link key={relatedTour.id} href={`/tours/${relatedTour.id}`} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={getAssetPath(relatedTour.image)}
                          alt={relatedTour.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-white font-bold text-lg">{relatedTour.title}</div>
                        <div className="text-white/80 text-sm">{relatedTour.duration}</div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-[#9e1687] font-bold mb-2">${relatedTour.price} per person</div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{relatedTour.description}</p>
                      <div className="text-[#14b8a6] font-medium group-hover:underline flex items-center">
                        View Details
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
} 