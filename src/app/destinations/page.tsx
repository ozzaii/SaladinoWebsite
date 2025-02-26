import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';

export const metadata: Metadata = {
  title: 'Destinations | Saladino Travel',
  description: 'Explore the breathtaking destinations in Turkey, Dubai, Greece, and Egypt that Saladino Travel offers for your next Spanish-speaking adventure.',
};

export default function DestinationsPage() {
  // Destinations data
  const destinations = [
    {
      id: 'istanbul',
      name: 'Istanbul',
      country: 'Turkey',
      description: 'Where East meets West, Istanbul offers a unique blend of cultures, stunning architecture including the Hagia Sophia and Blue Mosque, and vibrant markets like the Grand Bazaar.',
      image: '/images/destinations/istanbul.jpg',
      highlights: [
        'Hagia Sophia',
        'Blue Mosque',
        'Grand Bazaar',
        'Bosphorus Cruise',
        'Topkapi Palace',
      ],
    },
    {
      id: 'cappadocia',
      name: 'Cappadocia',
      country: 'Turkey',
      description: 'Known for its fairytale landscape of unique rock formations and hot air balloons at sunrise, Cappadocia offers a magical experience unlike anywhere else in the world.',
      image: '/images/destinations/cappadocia.jpg',
      highlights: [
        'Hot Air Balloon Rides',
        'Underground Cities',
        'Fairy Chimneys',
        'Göreme Open Air Museum',
        'Cave Hotels',
      ],
    },
    {
      id: 'athens',
      name: 'Athens',
      country: 'Greece',
      description: 'The cradle of Western civilization, Athens is a city where ancient history meets modern vibrancy, from the iconic Acropolis to charming traditional neighborhoods.',
      image: '/images/destinations/antalya.jpg',
      highlights: [
        'Acropolis & Parthenon',
        'Plaka District',
        'National Archaeological Museum',
        'Temple of Olympian Zeus',
        'Syntagma Square',
      ],
    },
    {
      id: 'santorini',
      name: 'Santorini',
      country: 'Greece',
      description: 'Famous for its stunning white-washed buildings with blue domes, dramatic cliffs, and spectacular sunsets over the Aegean Sea.',
      image: '/images/destinations/pamukkale.jpg',
      highlights: [
        'Oia Sunset Views',
        'Caldera Cruise',
        'Fira Town',
        'Red Beach',
        'Ancient Akrotiri',
      ],
    },
    {
      id: 'dubai',
      name: 'Dubai',
      country: 'United Arab Emirates',
      description: 'A futuristic metropolis rising from the desert, Dubai offers luxury shopping, ultramodern architecture including the Burj Khalifa, and vibrant nightlife.',
      image: '/images/destinations/dubai.jpg',
      highlights: [
        'Burj Khalifa',
        'Dubai Mall',
        'Palm Jumeirah',
        'Dubai Marina',
        'Desert Safari',
      ],
    },
    {
      id: 'abu-dhabi',
      name: 'Abu Dhabi',
      country: 'United Arab Emirates',
      description: 'The capital of the UAE features the magnificent Sheikh Zayed Grand Mosque, Ferrari World, and a blend of traditional and modern architecture.',
      image: '/images/destinations/dubai-marina.jpg',
      highlights: [
        'Sheikh Zayed Grand Mosque',
        'Ferrari World',
        'Yas Island',
        'Louvre Abu Dhabi',
        'Emirates Palace',
      ],
    },
    {
      id: 'cairo',
      name: 'Cairo',
      country: 'Egypt',
      description: 'The bustling capital of Egypt, home to the Great Pyramids of Giza, the enigmatic Sphinx, and the treasures of the Egyptian Museum.',
      image: '/images/destinations/bali.jpg',
      highlights: [
        'Pyramids of Giza',
        'The Great Sphinx',
        'Egyptian Museum',
        'Khan el-Khalili Bazaar',
        'Citadel of Saladin',
      ],
    },
    {
      id: 'luxor',
      name: 'Luxor',
      country: 'Egypt',
      description: 'Often called the world\'s greatest open-air museum, Luxor is home to the incredible Karnak Temple complex and the Valley of the Kings.',
      image: '/images/destinations/rome.jpg',
      highlights: [
        'Valley of the Kings',
        'Karnak Temple',
        'Luxor Temple',
        'Temple of Hatshepsut',
        'Colossi of Memnon',
      ],
    },
  ];

  // Group destinations by country
  const destinationsByCountry = destinations.reduce((acc, destination) => {
    const country = destination.country;
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(destination);
    return acc;
  }, {} as Record<string, typeof destinations>);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-700/50 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src={getAssetPath("/images/destinations/cappadocia-landscape.jpg")}
            alt="Explore Our Destinations" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container-custom relative z-20 text-white text-center">
          <h1 className="mb-6">Discover Breathtaking Destinations</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From the ancient wonders of Turkey and Egypt to the modern marvels of Dubai and the timeless beauty of Greece
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Explore Our Featured Destinations</h2>
              <p className="text-gray-600 mb-6">
                Saladino Travel specializes in curating exceptional experiences across Turkey, Greece, Dubai, and Egypt. Our Spanish-speaking expert-led tours take you through millennia of history, vibrant cultures, stunning landscapes, and architectural wonders both ancient and modern.
              </p>
              <p className="text-gray-600 mb-6">
                Each destination offers its own unique charm and opportunity for discovery, whether you're marveling at Istanbul's blend of East and West, floating above Cappadocia's fairy chimneys, witnessing the architectural wonders of Dubai, exploring the ancient ruins of Athens, or standing in awe before the Pyramids of Giza.
              </p>
              <p className="text-gray-600">
                Browse our carefully selected destinations below and imagine yourself experiencing these extraordinary places with the guidance and insight that only Saladino Travel can provide as the only Turkish operator with offices in the United States.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 h-64 rounded-lg overflow-hidden relative">
                <Image
                  src={getAssetPath("/images/destinations/istanbul.jpg")}
                  alt="Istanbul, Turkey"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="bg-gray-200 h-64 rounded-lg overflow-hidden relative">
                <Image
                  src={getAssetPath("/images/destinations/cappadocia.jpg")}
                  alt="Cappadocia, Turkey"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="bg-gray-200 h-64 rounded-lg overflow-hidden relative">
                <Image
                  src={getAssetPath("/images/destinations/dubai.jpg")}
                  alt="Dubai, UAE"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="bg-gray-200 h-64 rounded-lg overflow-hidden relative">
                <Image
                  src={getAssetPath("/images/destinations/pamukkale.jpg")}
                  alt="Pamukkale, Turkey"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Destinations By Country Section */}
      {Object.entries(destinationsByCountry).map(([country, countryDestinations]) => (
        <section key={country} className={`py-16 ${country === 'Turkey' ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Destinations in {country}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {country === 'Turkey' 
                  ? 'Explore the ancient wonders, vibrant cities, and stunning landscapes of Turkey'
                  : country === 'United Arab Emirates'
                  ? 'Discover the modern marvels, luxurious experiences, and desert adventures of the UAE'
                  : country === 'Greece'
                  ? 'Experience the birthplace of Western civilization with stunning islands, ancient ruins, and Mediterranean beauty'
                  : 'Journey through the land of the Pharaohs with its pyramids, temples, and legendary Nile River'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {countryDestinations.map((destination) => (
                <div key={destination.id} className="card overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="h-64 bg-gray-200 relative overflow-hidden">
                    <Image
                      src={getAssetPath(destination.image)}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary-700">{destination.name}</h3>
                    <p className="text-gray-500 mb-4">{destination.country}</p>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {destination.description}
                    </p>
                    <div className="mb-6">
                      <p className="font-bold mb-2 text-sm text-gray-700">HIGHLIGHTS:</p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {destination.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                        {destination.highlights.length > 3 && (
                          <li className="text-primary-600 text-sm">+ {destination.highlights.length - 3} more</li>
                        )}
                      </ul>
                    </div>
                    <Link 
                      href={`/destinations/${destination.id}`}
                      className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                    >
                      Explore {destination.name}
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Explore Our Destinations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              View all the locations we visit across Turkey, Greece, Dubai, and Egypt
            </p>
          </div>
          
          <div className="h-[500px] bg-gray-200 rounded-xl relative overflow-hidden">
            <Image
              src={getAssetPath("/images/destinations/istanbul-blue-mosque.jpg")}
              alt="Map of our destinations"
              fill
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <p className="text-primary-700 font-semibold text-lg">Interactive Map Coming Soon</p>
                <p className="text-gray-600">Our interactive destination map is under development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Itinerary Section */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-white">Create Your Custom Itinerary</h2>
              <p className="text-white/90 mb-6">
                Want to explore multiple destinations or create a custom journey? Our Spanish-speaking travel experts can help you design the perfect itinerary that combines your favorite destinations and experiences.
              </p>
              <p className="text-white/90 mb-8">
                Whether you want to focus on historical sites, natural wonders, culinary experiences, or a mix of everything, we can tailor a journey that matches your interests, timeline, and budget - all with the language comfort you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn bg-white text-secondary-600 hover:bg-gray-100">
                  Contact Our Team
                </Link>
                <Link href="/booking" className="btn border-2 border-white text-white hover:bg-white/20">
                  Start Planning
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-white">Popular Destination Combinations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <p className="font-bold text-white">Türkiye Imperdible (10 nights)</p>
                      <p className="text-white/80">
                        Our signature comprehensive tour of Turkey, including Istanbul, Cappadocia, Pamukkale, and Ephesus.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <p className="font-bold text-white">Türkiye y Grecia con Crucero (11 nights)</p>
                      <p className="text-white/80">
                        Explore the rich history of Turkey combined with a luxury cruise to the Greek Islands.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <p className="font-bold text-white">Las Estrellas del Oriente (18 nights)</p>
                      <p className="text-white/80">
                        The ultimate experience combining the best of Turkey, Dubai, and Egypt for a comprehensive exploration of Eastern wonders.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about our destinations and travel experiences
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">What's the best time to visit Turkey?</h3>
                <p className="text-gray-600">
                  The best times to visit Turkey are spring (April to May) and autumn (September to November) when the weather is pleasant and crowds are smaller. Summer (June to August) is peak tourist season with hot weather, while winter (December to March) can be cold but offers unique experiences like seeing Cappadocia covered in snow.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">When should I visit Greece?</h3>
                <p className="text-gray-600">
                  The ideal time to visit Greece is during late spring and early autumn (May-June and September-October) when the weather is warm but not too hot, and the tourist crowds are thinner. July and August offer the hottest temperatures perfect for island hopping, though they are also the busiest months.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">When should I visit Egypt?</h3>
                <p className="text-gray-600">
                  The best time to visit Egypt is from October to April when temperatures are cooler but still pleasantly warm. December and January are peak season with optimal weather. Summer months (May to September) can be extremely hot, especially in Upper Egypt and desert areas.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">How many days should I spend in each destination?</h3>
                <p className="text-gray-600">
                  We recommend at least 3-4 days in Istanbul, 2-3 days in Cappadocia, 2-3 days in Athens, 2 days in Santorini, 3 days in Dubai and 3-4 days in Cairo to experience the highlights without rushing. For more comprehensive experiences, our multi-country packages range from 10-18 nights for a complete journey.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">Are your tours available in Spanish?</h3>
                <p className="text-gray-600">
                  ¡Sí! All of our tours feature bilingual guides who speak both English and Spanish. We specialize in Spanish-speaking tourism and can accommodate all your language needs throughout your journey in Turkey, Greece, Dubai, and Egypt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-white">Ready to Explore Four Amazing Countries?</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Experience the magic of Turkey, Greece, Dubai, and Egypt with our premium Spanish-speaking guided tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Browse Our Tours
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