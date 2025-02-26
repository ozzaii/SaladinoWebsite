import React from 'react';
import { Metadata } from 'next';
import TourDetail from './TourDetail';

// Tour data
const toursData = {
  'super-turkey': {
    id: 'super-turkey',
    title: 'Super Turkey Tour',
    subtitle: 'The complete Turkish experience',
    duration: '9 days',
    description: 'Our signature tour exploring Istanbul, Cappadocia, Pamukkale, and Ephesus with luxury accommodations and English-speaking guides. Experience the rich cultural tapestry of Turkey from the bustling bazaars of Istanbul to the surreal landscapes of Cappadocia, the pristine white terraces of Pamukkale, and the ancient ruins of Ephesus.',
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
      'Professional English-speaking guides',
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
    title: 'Istanbul-Cappadocia Tour',
    subtitle: 'The essentials of Turkey',
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
      'Luxury accommodations',
      'Domestic flight from Istanbul to Cappadocia',
      'All transfers and transportation',
      'Professional English-speaking guides',
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
    title: 'Turkey-Dubai Combined Tour',
    subtitle: 'From ancient to ultramodern',
    duration: '11 days',
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
      'Professional English-speaking guides',
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

// Generate static params for all tours
export function generateStaticParams() {
  return Object.keys(toursData).map((tourSlug) => ({
    slug: tourSlug,
  }));
}

// Generate metadata for each tour page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tourSlug = params.slug;
  const tour = toursData[tourSlug as keyof typeof toursData];
  
  if (!tour) {
    return {
      title: 'Tour Not Found | Saladino Travel',
      description: 'The requested tour could not be found.',
    };
  }
  
  return {
    title: `${tour.title} | Saladino Travel`,
    description: tour.description.substring(0, 160),
  };
}

// Server Component
export default function TourPage({ params }: { params: { slug: string } }) {
  const tourSlug = params.slug;
  const tourData = toursData[tourSlug as keyof typeof toursData];

  if (!tourData) {
    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-4">Tour Not Found</h1>
        <p>Sorry, the requested tour could not be found.</p>
      </div>
    );
  }

  return <TourDetail tourData={tourData} />;
} 