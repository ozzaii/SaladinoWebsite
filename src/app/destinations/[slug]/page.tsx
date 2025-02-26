"use client"

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/utils/paths';

// Destination data
const destinationsData = {
  istanbul: {
    id: 'istanbul',
    name: "Istanbul",
    title: "The Gateway Between East and West",
    subtitle: "Una ciudad entre dos continentes",
    description: "Experience the magic of Istanbul, where East meets West across the Bosphorus Strait. This vibrant metropolis offers a captivating blend of Byzantine and Ottoman architecture, bustling bazaars, and rich cultural traditions that have evolved over millennia. From the majestic Hagia Sophia and Blue Mosque to the lively Grand Bazaar and serene Bosphorus cruises, Istanbul promises an unforgettable journey through time.",
    highlights: [
      "Hagia Sophia - Once a church, then a mosque, now a museum showcasing incredible Byzantine architecture",
      "Blue Mosque - Stunning Ottoman masterpiece with six minarets and a cascade of domes",
      "Grand Bazaar - One of the world's oldest and largest covered markets with over 4,000 shops",
      "Topkapi Palace - Former residence of Ottoman sultans, now housing important holy relics",
      "Bosphorus Cruise - Experience the city from the strait that divides Europe and Asia"
    ],
    images: [
      "/images/destinations/istanbul.jpg",
      "/images/destinations/istanbul-blue-mosque.jpg",
      "/images/destinations/istanbul-grand-bazaar.jpg",
      "/images/destinations/istanbul-bosphorus.jpg",
      "/images/destinations/istanbul-hagia-sophia-interior.jpg",
      "/images/destinations/istanbul-spice-market.jpg"
    ],
    mainImage: "/images/destinations/istanbul.jpg",
    facts: [
      {
        icon: "🌍",
        title: "Location",
        description: "Spans Europe and Asia across the Bosphorus Strait"
      },
      {
        icon: "👥",
        title: "Population",
        description: "Over 15 million people"
      },
      {
        icon: "🏙️",
        title: "Landmarks",
        description: "Hagia Sophia, Blue Mosque, Topkapi Palace"
      },
      {
        icon: "🍴",
        title: "Cuisine",
        description: "Kebabs, baklava, Turkish delight, Turkish coffee"
      },
      {
        icon: "💎",
        title: "Shopping",
        description: "Grand Bazaar, Spice Market, Istiklal Street"
      }
    ]
  },
  cappadocia: {
    id: 'cappadocia',
    name: "Cappadocia",
    title: "The Land of Fairy Chimneys",
    subtitle: "Paisajes de otro mundo",
    description: "Discover the surreal landscapes of Cappadocia, where nature and human ingenuity have created a wonderland of fairy chimneys, cave dwellings, and underground cities. This unique geological region invites you to soar above its magnificent valleys in a hot air balloon, explore ancient cave churches adorned with frescoes, and wander through otherworldly rock formations that seem to belong to another planet.",
    highlights: [
      "Hot Air Balloon Rides - Witness the sunrise over the magical landscape",
      "Göreme Open Air Museum - Byzantine cave churches with stunning frescoes",
      "Derinkuyu Underground City - Multi-level ancient underground settlement",
      "Uchisar Castle - Natural rock castle offering panoramic views",
      "Cave Accommodations - Experience staying in luxury cave hotels"
    ],
    images: [
      "/images/destinations/cappadocia.jpg",
      "/images/destinations/cappadocia-balloons.jpg",
      "/images/destinations/cappadocia-landscape.jpg",
      "/images/destinations/cappadocia-caves.jpg",
      "/images/destinations/cappadocia-goreme.jpg",
      "/images/destinations/cappadocia-uchisar.jpg"
    ],
    mainImage: "/images/destinations/cappadocia-landscape.jpg",
    facts: [
      {
        icon: "🌋",
        title: "Formation",
        description: "Formed by volcanic eruptions and erosion over millions of years"
      },
      {
        icon: "🏠",
        title: "Habitation",
        description: "People have been carving homes into these rocks since the 4th century"
      },
      {
        icon: "🎈",
        title: "Activities",
        description: "Hot air ballooning, hiking, horseback riding, ATV tours"
      },
      {
        icon: "🏺",
        title: "Crafts",
        description: "Famous for pottery, carpet weaving, and onyx stone carving"
      },
      {
        icon: "🍷",
        title: "Wine",
        description: "Home to some of Turkey's oldest wineries with unique volcanic soil"
      }
    ]
  },
  dubai: {
    id: 'dubai',
    name: "Dubai",
    title: "City of Superlatives",
    subtitle: "Donde lo imposible se hace realidad",
    description: "Enter the ultra-modern metropolis of Dubai, where architectural marvels touch the sky and luxury knows no bounds. This ambitious city has transformed from a desert outpost to a global icon of innovation in just decades. Experience the perfect blend of futuristic vision and traditional Arabian hospitality as you explore record-breaking structures, shop in lavish malls, venture into the desert, and indulge in world-class dining and entertainment.",
    highlights: [
      "Burj Khalifa - The world's tallest building with breathtaking observation decks",
      "Palm Jumeirah - Artificial island housing luxury resorts and restaurants",
      "Dubai Mall - One of the world's largest shopping centers with an aquarium and ice rink",
      "Desert Safari - Thrilling dune bashing followed by a traditional Bedouin experience",
      "Dubai Marina - Stunning waterfront promenade with skyscrapers and luxury yachts"
    ],
    images: [
      "/images/destinations/dubai.jpg",
      "/images/destinations/dubai-marina.jpg",
      "/images/destinations/dubai-burj-khalifa.jpg",
      "/images/destinations/dubai-desert.jpg",
      "/images/destinations/dubai-palm.jpg",
      "/images/destinations/dubai-mall.jpg"
    ],
    mainImage: "/images/destinations/dubai.jpg",
    facts: [
      {
        icon: "🏙️",
        title: "Size",
        description: "Over 4,110 square kilometers of metropolitan area"
      },
      {
        icon: "🌡️",
        title: "Climate",
        description: "Desert climate with very hot summers and mild winters"
      },
      {
        icon: "⛱️",
        title: "Beaches",
        description: "More than 10 stunning beaches with crystal clear waters"
      },
      {
        icon: "🛍️",
        title: "Shopping",
        description: "Home to over 70 shopping malls and traditional souks"
      },
      {
        icon: "🍽️",
        title: "Cuisine",
        description: "Over 13,000 restaurants offering global and Middle Eastern cuisine"
      }
    ]
  },
  pamukkale: {
    id: 'pamukkale',
    name: "Pamukkale",
    title: "Cotton Castle of Natural Wonders",
    subtitle: "Las terrazas blancas de Turquía",
    description: "Step into the enchanting world of Pamukkale, where cascading white travertine terraces filled with mineral-rich thermal waters create a surreal landscape that resembles a cotton castle. This UNESCO World Heritage site offers a unique combination of natural beauty and ancient history, with the remarkably preserved ruins of Hierapolis situated atop the terraces. Bathe in the same thermal waters that attracted royalty in ancient times while soaking in views that seem almost otherworldly.",
    highlights: [
      "Travertine Terraces - Unique white calcium pools cascading down the hillside",
      "Antique Pool - Swim among ancient columns in Cleopatra's thermal pool",
      "Hierapolis - Well-preserved ancient Roman spa city with large necropolis",
      "Archaeological Museum - Houses artifacts from Hierapolis and surrounding regions",
      "Kaklik Cave - Mini Pamukkale with stalactites and stalagmites formed by hot springs"
    ],
    images: [
      "/images/destinations/pamukkale.jpg",
      "/images/destinations/pamukkale-terraces.jpg",
      "/images/destinations/pamukkale-hierapolis.jpg",
      "/images/destinations/pamukkale-cleopatra-pool.jpg",
      "/images/destinations/pamukkale-ruins.jpg",
      "/images/destinations/pamukkale-sunset.jpg"
    ],
    mainImage: "/images/destinations/pamukkale-terraces.jpg",
    facts: [
      {
        icon: "🌡️",
        title: "Water Temperature",
        description: "The thermal waters maintain a constant 35°C (95°F)"
      },
      {
        icon: "⚕️",
        title: "Healing Properties",
        description: "Said to help with cardiovascular health, rheumatism, and skin conditions"
      },
      {
        icon: "🏛️",
        title: "History",
        description: "The ancient city of Hierapolis was founded around 190 BC"
      },
      {
        icon: "🚶",
        title: "Access",
        description: "Visitors must remove shoes to walk on the terraces to protect them"
      },
      {
        icon: "🦋",
        title: "Biodiversity",
        description: "The area is home to 86 bird species and diverse butterfly populations"
      }
    ]
  }
};

export default function DestinationPage() {
  const params = useParams();
  const slug = params.slug as string;
  const destination = destinationsData[slug as keyof typeof destinationsData];
  
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
  
  if (!destination) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Destination Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, the destination you're looking for doesn't exist.</p>
        <Link 
          href="/destinations"
          className="px-6 py-3 bg-[#9e1687] text-white font-medium rounded-lg hover:bg-[#8a1275] transition-all duration-300"
        >
          Explore All Destinations
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
              src={getAssetPath(destination.mainImage)}
              alt={destination.name}
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
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3 leading-tight">
                {destination.name}
              </h1>
              
              <p className="text-3xl text-[#14b8a6] font-display italic mb-6">
                {destination.title}
              </p>
              
              <p className="text-xl text-white/80 mb-8">
                {destination.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href={`/tours`}
                  className="px-6 py-3 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  View Tours to {destination.name}
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
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">About {destination.name}</h2>
                <p className="text-gray-700">{destination.description}</p>
              </div>
              
              {/* Highlights */}
              <div className="mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Highlights</h2>
                <div className="space-y-4">
                  {destination.highlights.map((highlight, index) => (
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
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Photo Gallery</h2>
                
                {destination.images.length > 0 && (
                  <div className="mt-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {destination.images.map((image, index) => (
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
                              alt={`${destination.name} image ${index + 1}`}
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
                          src={getAssetPath(destination.images[currentImage])}
                          alt={`${destination.name} gallery image`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      
                      <div className="flex justify-between mt-4">
                        <button 
                          className="text-white p-2"
                          onClick={() => setCurrentImage((prev) => (prev === 0 ? destination.images.length - 1 : prev - 1))}
                        >
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <button 
                          className="text-white p-2"
                          onClick={() => setCurrentImage((prev) => (prev === destination.images.length - 1 ? 0 : prev + 1))}
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
                  {destination.facts.map((fact, index) => (
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
                    Our tours include {destination.name} and other amazing destinations
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
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Ready to Experience {destination.name}?
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