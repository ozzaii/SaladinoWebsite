import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getAssetPath } from '@/utils/paths';

// Tour packages data
const featuredTours = [
  {
    id: 'turkiye-imperdible',
    title: 'Türkiye Imperdible',
    duration: '10 nights',
    description: 'Our signature tour exploring the must-see spots of Turkey with luxury accommodations and Spanish-speaking guides.',
    image: '/images/tours/real-images/istanbul.jpg',
    price: 1499,
  },
  {
    id: 'estambul-capadocia',
    title: 'Estambul y Capadocia',
    duration: '6 nights',
    description: 'Discover the essential highlights of Turkey\'s two most iconic destinations with our expert local guides.',
    image: '/images/tours/real-images/cappadocia.jpg',
    price: 899,
  },
  {
    id: 'turkiye-dubai',
    title: 'Türkiye y Dubái',
    duration: '11 nights',
    description: 'The perfect combination of Turkey\'s rich history and Dubai\'s modern luxury in one seamless journey.',
    image: '/images/tours/real-images/turkey-dubai.jpg',
    price: 1899,
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    country: 'México',
    text: '¡Nuestro viaje a Turquía con Saladino Travel fue absolutamente mágico! Los guías eran conocedores, los alojamientos eran lujosos y las experiencias fueron inolvidables.',
    avatar: '/images/testimonials/person1.jpg',
  },
  {
    id: 2,
    name: 'Carlos Mendez',
    country: 'Colombia',
    text: 'La atención al detalle fue impresionante. Desde el momento en que aterrizamos hasta nuestra partida, todo estuvo perfectamente organizado. ¡Recomiendo encarecidamente la experiencia en globo aerostático en Capadocia!',
    avatar: '/images/testimonials/person2.jpg',
  },
  {
    id: 3,
    name: 'Ana Sofia Vargas',
    country: 'Argentina',
    text: 'El tour combinado de Turquía y Dubái superó todas nuestras expectativas. El contraste entre la riqueza histórica de Turquía y el lujo moderno de Dubái fue la combinación perfecta.',
    avatar: '/images/testimonials/person1.jpg',
  },
];

// Destinations data
const destinations = [
  {
    id: 'istanbul',
    name: 'Istanbul',
    description: 'Where East meets West, a city of contrasts and cultural treasures.',
    image: '/images/tours/real-images/istanbul.jpg',
  },
  {
    id: 'cappadocia',
    name: 'Cappadocia',
    description: 'Otherworldly landscapes and magical hot air balloon experiences.',
    image: '/images/tours/real-images/cappadocia.jpg',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    description: 'Ultra-modern architecture, luxury shopping, and desert adventures.',
    image: '/images/tours/real-images/dubai.jpg',
  },
  {
    id: 'athens',
    name: 'Athens',
    description: 'Ancient wonders and the birthplace of democracy in Greece\'s vibrant capital.',
    image: '/images/tours/real-images/istanbul.jpg', // Using Istanbul as placeholder
  },
  {
    id: 'cairo',
    name: 'Cairo',
    description: 'Home to the Great Pyramids and the treasures of ancient Egypt.',
    image: '/images/tours/real-images/istanbul.jpg', // Using Istanbul as placeholder
  },
];

export const metadata: Metadata = {
  title: 'Saladino Travel - Premium Tours in Turkey, Dubai, Greece & Egypt',
  description: 'Experience unforgettable journeys through Turkey, Dubai, Greece, and Egypt with our premium Spanish-speaking guided tours, featuring expert local guides and luxury accommodations.',
  openGraph: {
    title: 'Saladino Travel - Premium Tours in Turkey, Dubai, Greece & Egypt',
    description: 'Experience unforgettable journeys through Turkey, Dubai, Greece, and Egypt with our premium Spanish-speaking guided tours, featuring expert local guides and luxury accommodations.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saladino Travel - Premium Tours',
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video or Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={getAssetPath("/videos/hero-bg.mp4")} type="video/mp4" />
          </video>
        </div>
        
        <div className="container-custom relative z-20 mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <Image 
              src={getAssetPath("/images/saladino-travel-logo.svg")} 
              alt="Saladino Travel" 
              width={300} 
              height={120} 
              className="h-28 w-auto mx-auto mb-8 object-contain filter brightness-0 invert"
              priority
            />
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight drop-shadow-md">
              Unforgettable Journeys Through <span className="text-primary-400">Turkey</span>, <span className="text-primary-400">Dubai</span>, <span className="text-primary-400">Greece</span> & <span className="text-primary-400">Egypt</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
              Premium Spanish-speaking guided tours with luxury accommodations and expert local guides. The only Turkish operator with offices in the United States.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tours" 
                className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:bg-primary-700 transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Tours
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Tour Selector Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Premium Tour Packages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully crafted tour packages designed to showcase the best of Turkey and Dubai with luxury accommodations and expert local guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="card group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <Image 
                    src={getAssetPath(tour.image)} 
                    alt={tour.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{tour.title}</h3>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tour.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary-600">
                      ${tour.price} <span className="text-sm font-normal text-gray-500">/ person</span>
                    </span>
                    <Link 
                      href={`/tours/${tour.id}`} 
                      className="btn btn-primary text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tours" className="btn btn-outline">
              View All Tour Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Discover Magical Destinations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore the breathtaking landscapes, rich history, and vibrant cultures of our featured destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <Link 
                key={destination.id} 
                href={`/destinations/${destination.id}`}
                className="group relative h-80 overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <Image 
                  src={getAssetPath(destination.image)} 
                  alt={destination.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute left-4 bottom-4 z-20">
                  <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                  <p className="text-white/80 text-sm">{destination.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/destinations" className="btn btn-outline">
              Explore All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from satisfied travelers who have experienced our premium tours and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <Image 
                    src={getAssetPath(testimonial.avatar)} 
                    alt={testimonial.name} 
                    width={60} 
                    height={60} 
                    className="rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Teaser */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Your Personal Travel Assistant</h2>
              <p className="text-white/90 text-lg mb-6">
                ¿Tienes preguntas sobre nuestros tours? Our bilingual AI travel assistant is here to help you plan your perfect trip through Turkey, Dubai, Greece, and Egypt in your preferred language.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get instant answers in English or Spanish</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Find the perfect tour package for your interests</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Learn about our unique multi-country packages</span>
                </li>
              </ul>
              <Link href="/ai-assistant" className="btn bg-white text-primary-600 hover:bg-gray-100">
                Chat with Our Assistant
              </Link>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/tours/real-images/cappadocia.jpg"
                alt="AI Travel Assistant"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Experience the Best of East and West?</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Book your premium Spanish-speaking guided tour today and embark on an unforgettable journey through Turkey, Dubai, Greece, and Egypt with the only Turkish operator with offices in the US.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn bg-white text-secondary-600 hover:bg-gray-100">
              Browse Tour Packages
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white/20">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 