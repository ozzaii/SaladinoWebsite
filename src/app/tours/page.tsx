import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tour Packages | Saladino Travel',
  description: 'Explore our premium guided tours in Turkey and Dubai. Find the perfect travel experience with luxury accommodations and expert local guides.',
};

// Tour packages data
const tours = [
  {
    id: 'turkiye-imperdible',
    title: 'Türkiye Imperdible',
    subtitle: 'The Complete Turkish Experience',
    duration: '10 nights',
    description: 'Our signature comprehensive tour of Turkey, exploring Istanbul, Cappadocia, Pamukkale, and Ephesus with Spanish-speaking guides and luxury accommodations.',
    image: '/images/tours/istanbul.jpg',
    price: 1499,
    locations: ['Istanbul', 'Cappadocia', 'Pamukkale', 'Ephesus'],
    featured: true,
  },
  {
    id: 'estambul-capadocia',
    title: 'Estambul y Capadocia',
    subtitle: 'Turkey\'s Essential Highlights',
    duration: '6 nights',
    description: 'Experience the rich history of Istanbul and the magical landscapes of Cappadocia, including our signature hot air balloon ride, with expert Spanish-speaking guides.',
    image: '/images/destinations/cappadocia.jpg',
    price: 899,
    locations: ['Istanbul', 'Cappadocia'],
    featured: true,
  },
  {
    id: 'turkiye-dubai',
    title: 'Türkiye y Dubái',
    subtitle: 'From Ancient Wonders to Modern Marvels',
    duration: '11 nights',
    description: 'The perfect combination of Turkey\'s rich history and Dubai\'s modern luxury. Explore Istanbul, Cappadocia, and the ultramodern city of Dubai in one seamless journey.',
    image: '/images/tours/dubai-combined.jpg',
    price: 1899,
    locations: ['Istanbul', 'Cappadocia', 'Dubai'],
    featured: true,
  },
  {
    id: 'turkiye-grecia',
    title: 'Türkiye y Grecia con Crucero',
    subtitle: 'Mediterranean Beauty & Ancient Civilizations',
    duration: '11 nights',
    description: 'Discover the treasures of two ancient civilizations with our Turkey and Greece combined tour, including a luxury cruise to the Greek Islands.',
    image: '/images/destinations/istanbul.jpg',
    price: 2099,
    locations: ['Istanbul', 'Cappadocia', 'Athens', 'Santorini', 'Mykonos'],
    featured: false,
  },
  {
    id: 'turkiye-express',
    title: 'Türkiye Express',
    subtitle: 'The Perfect Short Break',
    duration: '6 nights',
    description: 'A whirlwind tour of Turkey\'s highlights for those short on time but wanting to experience the essence of Turkish culture and history.',
    image: '/images/tours/istanbul.jpg',
    price: 849,
    locations: ['Istanbul', 'Cappadocia'],
    featured: false,
  },
  {
    id: 'estrellas-oriente',
    title: 'Las Estrellas del Oriente',
    subtitle: 'Ultimate Eastern Adventure',
    duration: '18 nights',
    description: 'Our most comprehensive package covering Dubai, Egypt, and Turkey for the ultimate exploration of Eastern wonders and ancient civilizations.',
    image: '/images/tours/dubai-combined.jpg',
    price: 3499,
    locations: ['Istanbul', 'Cappadocia', 'Dubai', 'Cairo', 'Luxor'],
    featured: false,
  },
];

export default function ToursPage() {
  const featuredTours = tours.filter(tour => tour.featured);
  const regularTours = tours.filter(tour => !tour.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-purple to-brand-teal overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/images/tours/istanbul.jpg" 
            alt="Turkish Grand Bazaar" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Premium Spanish-Speaking Tours
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Expertly crafted journeys through Turkey, Dubai, Greece, and Egypt with luxury accommodations and knowledgeable bilingual guides
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#featured-tours" 
              className="btn btn-primary"
            >
              Explore Tours
            </Link>
            <Link 
              href="/contact" 
              className="btn bg-white text-brand-purple hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="featured-tours" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Tours</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our most popular packages, curated to provide exceptional experiences across Turkey and Dubai
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="card group h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <Image 
                    src={tour.image} 
                    alt={tour.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="badge badge-primary">
                      {tour.duration}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="flex flex-wrap gap-2">
                      {tour.locations.slice(0, 3).map((location) => (
                        <span key={location} className="badge badge-secondary text-xs">
                          {location}
                        </span>
                      ))}
                      {tour.locations.length > 3 && (
                        <span className="badge badge-secondary text-xs">
                          +{tour.locations.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-1">{tour.title}</h3>
                  <p className="text-brand-purple italic text-sm mb-3">{tour.subtitle}</p>
                  <p className="text-gray-600 mb-4 flex-grow">{tour.description}</p>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-brand-purple">
                        ${tour.price} <span className="text-sm font-normal text-gray-500">/ person</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Link 
                        href={`/tours/${tour.id}`} 
                        className="btn btn-secondary"
                      >
                        View Details
                      </Link>
                      <Link 
                        href="/booking?tour=${tour.id}" 
                        className="btn btn-outline"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Tours Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore All Tours</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our complete range of expertly crafted travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTours.map((tour) => (
              <div key={tour.id} className="card group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={tour.image} 
                    alt={tour.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="badge badge-primary">
                      {tour.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold mb-1">{tour.title}</h3>
                  <p className="text-brand-purple italic text-xs mb-3">{tour.subtitle}</p>
                  <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3">{tour.description}</p>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xl font-bold text-brand-purple">
                        ${tour.price}
                      </span>
                      <div className="flex gap-1">
                        {tour.locations.slice(0, 2).map((location) => (
                          <span key={location} className="badge badge-secondary text-xs">
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link 
                      href={`/tours/${tour.id}`} 
                      className="btn btn-outline w-full"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Tours</h2>
              <p className="text-gray-600 text-lg mb-6">
                We specialize in creating personalized travel experiences tailored to your preferences, interests, and schedule. Let us design a custom tour just for you.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tailor the itinerary to your interests</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Choose your preferred accommodations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Travel on your own schedule</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Add unique experiences and hidden gems</span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Inquire About Custom Tours
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/destinations/cappadocia.jpg" 
                alt="Custom Tour Experience" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Your Perfect Journey Awaits</h3>
                <p className="text-white/80">Let us create a tour designed exclusively for you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Teaser */}
      <section className="py-16 bg-brand-purple text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Help Choosing?</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Our AI travel assistant can help you find the perfect tour based on your preferences, budget, and travel style.
          </p>
          <Link href="/ai-assistant" className="btn bg-white text-brand-purple hover:bg-gray-100">
            Chat with Our AI Assistant
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our tours
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-purple">How do I book a tour?</h3>
                <p className="text-gray-600">
                  You can book a tour directly through our website by selecting the tour you're interested in and clicking the "Book Now" button. You'll be guided through our simple booking process. Alternatively, you can contact us directly by phone or email if you prefer to book with the assistance of our customer service team.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-purple">What is the payment process?</h3>
                <p className="text-gray-600">
                  We require a 25% deposit to secure your booking, with the remaining balance due 60 days before your tour start date. We accept all major credit cards, bank transfers, and PayPal. All payments are secure and encrypted.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-purple">What is your cancellation policy?</h3>
                <p className="text-gray-600">
                  Our standard cancellation policy provides a full refund (minus processing fees) for cancellations made 90 days or more before the tour start date. Cancellations made 60-89 days prior receive a 75% refund, 30-59 days prior receive a 50% refund, and cancellations less than 30 days before departure are non-refundable. We strongly recommend purchasing travel insurance to protect against unexpected cancellations.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-purple">Are your tours suitable for children?</h3>
                <p className="text-gray-600">
                  Most of our tours are suitable for children aged 8 and above. Some tours involve a significant amount of walking or activities that may be challenging for younger children. Please contact us if you're traveling with children, and we can advise on the most family-friendly options or create a custom itinerary that accommodates your family's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Embark on a Journey Across Cultures?</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Book your premium Spanish-speaking tour today and experience the magic of Turkey, Dubai, Greece, and Egypt with Saladino Travel - the only Turkish operator with offices in the US.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="btn bg-white text-brand-teal hover:bg-gray-100">
              Book a Tour
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white/20">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 