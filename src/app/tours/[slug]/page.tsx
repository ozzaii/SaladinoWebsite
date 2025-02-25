import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Define a type for the tours data structure
type Tour = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  longDescription: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
  locations: string[];
  included: string[];
  notIncluded: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    accommodation: string;
    meals: string;
  }>;
  highlights: string[];
  reviews: Array<{
    id: number;
    name: string;
    country: string;
    rating: number;
    text: string;
    avatar: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedTours: string[];
};

// Define type for the tours object
type ToursData = {
  [key: string]: Tour;
};

// Mock tour data - this would come from a CMS or API in production
const tours: ToursData = {
  'super-turkey': {
    id: 'super-turkey',
    title: 'Super Turkey Tour',
    subtitle: 'The Complete Turkish Experience',
    duration: '9 days',
    description: 'Experience the full magic of Turkey with our most comprehensive tour package. From the bustling streets of Istanbul to the otherworldly landscapes of Cappadocia, this tour covers all the highlights of this fascinating country.',
    longDescription: 'Our Super Turkey Tour is designed for travelers who want to experience the very best of Turkey in a single trip. This comprehensive 9-day journey takes you from the historic streets of Istanbul to the otherworldly landscapes of Cappadocia, the pristine beaches of the Turquoise Coast, and the ancient ruins that dot this fascinating country.<br /><br />Led by expert local guides, you\'ll gain deep insights into Turkey\'s rich history, vibrant culture, and exquisite cuisine. You\'ll stay in carefully selected 4-5 star hotels that blend luxury with authentic Turkish hospitality.',
    image: '/images/tours/istanbul.jpg',
    price: 1299,
    rating: 4.9,
    reviewCount: 124,
    locations: ['Istanbul', 'Cappadocia', 'Pamukkale', 'Ephesus'],
    included: [
      'All accommodations (8 nights in 4-5 star hotels)',
      'Daily breakfast and select meals (8 breakfasts, 4 dinners)',
      'All domestic flights within Turkey',
      'Private air-conditioned transportation',
      'Professional English and Spanish speaking guides',
      'All entrance fees to attractions',
      'Hot air balloon ride in Cappadocia (weather permitting)',
      'Bosphorus cruise in Istanbul',
    ],
    notIncluded: [
      'International flights to/from Turkey',
      'Travel insurance',
      'Personal expenses',
      'Optional activities not specified in the itinerary',
      'Tips for guides and drivers',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Istanbul',
        description: 'Welcome to Istanbul! Upon arrival at Istanbul Airport, you will be met by our representative and transferred to your hotel. Enjoy the rest of the day at leisure to recover from your journey and perhaps take a first stroll in the vibrant streets of Istanbul.',
        accommodation: 'Boutique Hotel in Istanbul',
        meals: 'Welcome Dinner',
      },
      {
        day: 2,
        title: 'Istanbul Historical Tour',
        description: 'Discover the wonders of Istanbul\'s Old City with a full-day guided tour. Visit the iconic Blue Mosque, the magnificent Hagia Sophia, the ancient Hippodrome, and the opulent Topkapi Palace. After lunch, explore the Grand Bazaar, one of the largest and oldest covered markets in the world.',
        accommodation: 'Boutique Hotel in Istanbul',
        meals: 'Breakfast',
      },
      {
        day: 3,
        title: 'Bosphorus Cruise & Flight to Cappadocia',
        description: 'Morning Bosphorus cruise to admire Istanbul from the water, seeing Ottoman palaces, historic mansions, and the Rumeli Fortress. In the afternoon, transfer to the airport for your flight to Cappadocia. Upon arrival, transfer to your unique cave hotel.',
        accommodation: 'Cave Hotel in Cappadocia',
        meals: 'Breakfast, Dinner',
      },
      {
        day: 4,
        title: 'Cappadocia Hot Air Balloon & North Tour',
        description: 'Early morning hot air balloon ride over the fairy chimneys of Cappadocia (weather permitting) - a truly unforgettable experience. After breakfast, explore the northern part of Cappadocia, including Göreme Open-Air Museum, Pasabag (Monk\'s Valley), and Devrent Valley (Imagination Valley).',
        accommodation: 'Cave Hotel in Cappadocia',
        meals: 'Breakfast',
      },
      {
        day: 5,
        title: 'Cappadocia South Tour & Flight to Izmir',
        description: 'Explore the southern part of Cappadocia, including the underground city of Kaymakli, Pigeon Valley, and Uçhisar Castle. In the afternoon, transfer to the airport for your flight to Izmir. Upon arrival, transfer to your hotel in Kuşadası.',
        accommodation: 'Seaside Hotel in Kuşadası',
        meals: 'Breakfast, Dinner',
      },
      {
        day: 6,
        title: 'Ephesus & Şirince Village',
        description: 'Full-day tour of the ancient city of Ephesus, one of the best-preserved Roman ruins in the Mediterranean. Visit the Temple of Artemis, Library of Celsus, and the Great Theatre. In the afternoon, explore the charming Greek village of Şirince, famous for its wine and olive oil production.',
        accommodation: 'Seaside Hotel in Kuşadası',
        meals: 'Breakfast',
      },
      {
        day: 7,
        title: 'Pamukkale & Hierapolis',
        description: 'Journey to Pamukkale, known for its natural terraced thermal pools of white calcium. Explore the ancient spa city of Hierapolis, including its well-preserved theatre and the Cleopatra Antique Pool (optional swim at extra cost).',
        accommodation: 'Thermal Hotel in Pamukkale',
        meals: 'Breakfast, Dinner',
      },
      {
        day: 8,
        title: 'Return to Istanbul',
        description: 'Morning at leisure in Pamukkale. Afternoon flight back to Istanbul. Transfer to your hotel and evening at leisure to do some last-minute shopping or exploration.',
        accommodation: 'Boutique Hotel in Istanbul',
        meals: 'Breakfast',
      },
      {
        day: 9,
        title: 'Departure',
        description: 'After breakfast, check out from your hotel. Transfer to Istanbul Airport for your departure flight. End of our services. We hope you enjoyed your Super Turkey Tour!',
        accommodation: 'N/A',
        meals: 'Breakfast',
      },
    ],
    highlights: [
      'Explore the iconic Blue Mosque and Hagia Sophia',
      'Hot air balloon ride over Cappadocia',
      'Visit the ancient city of Ephesus',
      'Experience the thermal pools of Pamukkale',
      'Bosphorus cruise between two continents',
      'Luxury accommodations throughout',
      'Expert local guides in each destination',
    ],
    reviews: [
      {
        id: 1,
        name: 'Maria Rodriguez',
        country: 'Mexico',
        rating: 5,
        text: 'The hot air balloon ride over Cappadocia was absolutely breathtaking! Our guide was knowledgeable and made sure we had the best experience possible. Highly recommend this tour!',
        avatar: '/images/testimonials/person1.jpg',
      },
      {
        id: 2,
        name: 'Carlos Mendez',
        country: 'Colombia',
        rating: 5,
        text: 'From the moment we arrived until our departure, everything was perfectly organized. The hotels were exceptional and the local guides were incredibly knowledgeable. Will definitely book with Saladino again!',
        avatar: '/images/testimonials/person2.jpg',
      },
    ],
    faqs: [
      {
        question: 'What is the best time to visit Turkey?',
        answer: 'Turkey is a year-round destination, but the best times to visit are spring (April to May) and autumn (September to October) when the weather is mild and crowds are smaller. Summer (June to August) can be hot, especially in the south and central regions, but is ideal for coastal areas.',
      },
      {
        question: 'Do I need a visa to visit Turkey?',
        answer: 'Many nationalities need a visa to enter Turkey. Most visitors can obtain an e-Visa online before traveling. We recommend checking the latest visa requirements for your country of residence with the Turkish consulate or through the official e-Visa website.',
      },
      {
        question: 'Is the hot air balloon ride guaranteed?',
        answer: 'Hot air balloon rides are weather-dependent for safety reasons. If weather conditions don\'t permit flying, we will attempt to reschedule during your stay or provide an alternative activity. In case of cancellation, you will receive a refund for this portion of the tour.',
      },
      {
        question: 'What is the group size for this tour?',
        answer: 'Our tours typically have a maximum of 12-16 participants to ensure a personalized experience. This allows for better interaction with your guide and a more intimate exploration of each destination.',
      },
    ],
    relatedTours: ['istanbul-cappadocia', 'turkey-dubai'],
  },
  'istanbul-cappadocia': {
    id: 'istanbul-cappadocia',
    title: 'Istanbul-Cappadocia Tour',
    subtitle: 'Turkey\'s Essential Highlights',
    duration: '6 days',
    description: 'Discover the essential highlights of Turkey\'s most iconic destinations. Experience the rich history and vibrant culture of Istanbul, then explore the magical landscapes of Cappadocia with its fairy chimneys and ancient cave dwellings.',
    longDescription: 'Experience the best of Turkey\'s two most iconic destinations in one perfectly balanced trip. Our 6-day Istanbul-Cappadocia Tour takes you from the bustling metropolis where East meets West to the surreal moon-like landscapes of central Anatolia.<br /><br />In Istanbul, you\'ll explore ancient Byzantine and Ottoman treasures, cruise the Bosphorus between two continents, and immerse yourself in the vibrant culture of this historic city. Then, fly to Cappadocia to marvel at its otherworldly rock formations, underground cities, and ancient cave churches - and experience the unforgettable thrill of a hot air balloon ride at dawn over this magical landscape.',
    image: '/images/destinations/cappadocia.jpg',
    price: 899,
    rating: 4.8,
    reviewCount: 87,
    locations: ['Istanbul', 'Cappadocia'],
    included: [
      'All accommodations (5 nights in 4-5 star hotels)',
      'Daily breakfast and select meals (5 breakfasts, 2 dinners)',
      'Domestic flight from Istanbul to Cappadocia',
      'Private air-conditioned transportation',
      'Professional English and Spanish speaking guides',
      'All entrance fees to attractions',
      'Hot air balloon ride in Cappadocia (weather permitting)',
      'Bosphorus cruise in Istanbul',
    ],
    notIncluded: [
      'International flights to/from Turkey',
      'Travel insurance',
      'Personal expenses',
      'Optional activities not specified in the itinerary',
      'Tips for guides and drivers',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Istanbul',
        description: 'Welcome to Istanbul! Upon arrival at Istanbul Airport, you will be met by our representative and transferred to your hotel. Enjoy the rest of the day at leisure to recover from your journey and perhaps take a first stroll in the vibrant streets of Istanbul.',
        accommodation: 'Boutique Hotel in Istanbul',
        meals: 'Welcome Dinner',
      },
      {
        day: 2,
        title: 'Istanbul Historical Tour',
        description: 'Discover the wonders of Istanbul\'s Old City with a full-day guided tour. Visit the iconic Blue Mosque, the magnificent Hagia Sophia, the ancient Hippodrome, and the opulent Topkapi Palace. After lunch, explore the Grand Bazaar, one of the largest and oldest covered markets in the world.',
        accommodation: 'Boutique Hotel in Istanbul',
        meals: 'Breakfast',
      },
      {
        day: 3,
        title: 'Bosphorus Cruise & Flight to Cappadocia',
        description: 'Morning Bosphorus cruise to admire Istanbul from the water, seeing Ottoman palaces, historic mansions, and the Rumeli Fortress. In the afternoon, transfer to the airport for your flight to Cappadocia. Upon arrival, transfer to your unique cave hotel.',
        accommodation: 'Cave Hotel in Cappadocia',
        meals: 'Breakfast, Dinner',
      },
      {
        day: 4,
        title: 'Cappadocia Hot Air Balloon & North Tour',
        description: 'Early morning hot air balloon ride over the fairy chimneys of Cappadocia (weather permitting) - a truly unforgettable experience. After breakfast, explore the northern part of Cappadocia, including Göreme Open-Air Museum, Pasabag (Monk\'s Valley), and Devrent Valley (Imagination Valley).',
        accommodation: 'Cave Hotel in Cappadocia',
        meals: 'Breakfast',
      },
      {
        day: 5,
        title: 'Cappadocia South Tour',
        description: 'Explore the southern part of Cappadocia, including the underground city of Kaymakli, Pigeon Valley, and Uçhisar Castle. Afternoon at leisure to explore on your own or relax at your hotel.',
        accommodation: 'Cave Hotel in Cappadocia',
        meals: 'Breakfast',
      },
      {
        day: 6,
        title: 'Return to Istanbul & Departure',
        description: 'After breakfast, check out from your hotel and transfer to Cappadocia Airport for your flight back to Istanbul. Connect with your international departure flight. End of our services. We hope you enjoyed your Istanbul-Cappadocia Tour!',
        accommodation: 'N/A',
        meals: 'Breakfast',
      },
    ],
    highlights: [
      'Explore the iconic Blue Mosque and Hagia Sophia',
      'Hot air balloon ride over Cappadocia',
      'Visit the underground cities',
      'Bosphorus cruise between two continents',
      'Stay in an authentic cave hotel',
      'Expert local guides in each destination',
    ],
    reviews: [
      {
        id: 1,
        name: 'Ana Sofia Vargas',
        country: 'Argentina',
        rating: 5,
        text: 'The cultural insights provided by our guide were fantastic. We not only saw the tourist sites but also got to experience authentic Turkish culture. The food was amazing and the accommodations were top-notch.',
        avatar: '/images/testimonials/person1.jpg',
      },
      {
        id: 2,
        name: 'Juan Perez',
        country: 'Mexico',
        rating: 4,
        text: 'This tour offered the perfect balance of guided activities and free time to explore on our own. Our guide was incredibly knowledgeable about Turkish history and culture. The cave hotel in Cappadocia was a unique experience that I would highly recommend.',
        avatar: '/images/testimonials/person2.jpg',
      },
    ],
    faqs: [
      {
        question: 'What is the best time to visit Cappadocia?',
        answer: 'The best time to visit Cappadocia is during spring (April to June) and fall (September to November) when the weather is pleasant and ideal for hot air balloon rides. Summer (July to August) can be very hot, while winter (December to March) can be cold with occasional snow, which creates a beautiful landscape but might affect balloon flights.',
      },
      {
        question: 'Are hot air balloon rides safe in Cappadocia?',
        answer: 'Hot air balloon rides in Cappadocia are generally safe and operated by experienced pilots. Turkey has strict regulations for balloon operators, and safety briefings are conducted before each flight. However, flights are weather-dependent and may be canceled if conditions are not optimal.',
      },
      {
        question: 'What should I wear in Istanbul and Cappadocia?',
        answer: 'For Istanbul, modest clothing is recommended, especially when visiting mosques (women should cover their heads, shoulders, and knees; men should wear long pants). For Cappadocia, comfortable walking shoes are essential as you\'ll be exploring rocky terrain. Layers are recommended as temperatures can vary throughout the day.',
      },
      {
        question: 'How much spending money will I need?',
        answer: 'We recommend budgeting around $30-50 USD per day for meals not included in the tour, souvenirs, and personal expenses. Turkey is generally affordable compared to Western European destinations.',
      },
    ],
    relatedTours: ['super-turkey', 'turkey-dubai'],
  },
  'turkey-dubai': {
    id: 'turkey-dubai',
    title: 'Turkey-Dubai Combined Tour',
    subtitle: 'From Ancient Wonders to Modern Marvels',
    duration: '11 days',
    description: 'The ultimate East experience combining the best of Turkey and the luxury of Dubai. Journey through Turkey\'s rich historical sites and natural wonders, then experience the ultra-modern city of Dubai with its iconic architecture, luxury shopping, and desert adventures.',
    longDescription: 'Experience an extraordinary journey that bridges ancient civilizations and futuristic visions with our 11-day Turkey-Dubai Combined Tour. This carefully crafted itinerary takes you from the historic crossroads of Istanbul to the surreal landscapes of Cappadocia before whisking you away to the gleaming metropolis of Dubai.<br /><br />In Turkey, immerse yourself in thousands of years of history, marvel at architectural masterpieces, and experience the warmth of Turkish hospitality. Then, contrast this with Dubai\'s ultramodern skyline, luxurious experiences, and blend of Arabic tradition with futuristic vision. This tour offers the perfect balance of cultural exploration, natural beauty, and modern luxury.',
    image: '/images/tours/dubai-combined.jpg',
    price: 1799,
    rating: 4.9,
    reviewCount: 53,
    locations: ['Istanbul', 'Cappadocia', 'Dubai', 'Abu Dhabi'],
    included: [
      'All accommodations (10 nights in 4-5 star hotels)',
      'Daily breakfast and select meals (10 breakfasts, 5 dinners)',
      'All domestic flights within Turkey',
      'International flight from Istanbul to Dubai',
      'Private air-conditioned transportation',
      'Professional English and Spanish speaking guides',
      'All entrance fees to attractions',
      'Hot air balloon ride in Cappadocia (weather permitting)',
      'Desert safari in Dubai',
      'Burj Khalifa "At the Top" entrance',
    ],
    notIncluded: [
      'International flights to Turkey and from Dubai',
      'Travel insurance',
      'Personal expenses',
      'Optional activities not specified in the itinerary',
      'Tips for guides and drivers',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Istanbul',
        description: 'Welcome to Istanbul! Upon arrival at Istanbul Airport, you will be met by our representative and transferred to your hotel. Enjoy the rest of the day at leisure to recover from your journey and perhaps take a first stroll in the vibrant streets of Istanbul.',
        accommodation: 'Luxury Hotel in Istanbul',
        meals: 'Welcome Dinner',
      },
      {
        day: 2,
        title: 'Istanbul Historical Tour',
        description: 'Discover the wonders of Istanbul\'s Old City with a full-day guided tour. Visit the iconic Blue Mosque, the magnificent Hagia Sophia, the ancient Hippodrome, and the opulent Topkapi Palace. After lunch, explore the Grand Bazaar, one of the largest and oldest covered markets in the world.',
        accommodation: 'Luxury Hotel in Istanbul',
        meals: 'Breakfast',
      },
      {
        day: 3,
        title: 'Bosphorus Cruise & Flight to Cappadocia',
        description: 'Morning Bosphorus cruise to admire Istanbul from the water, seeing Ottoman palaces, historic mansions, and the Rumeli Fortress. In the afternoon, transfer to the airport for your flight to Cappadocia. Upon arrival, transfer to your unique cave hotel.',
        accommodation: 'Cave Hotel in Cappadocia',
        meals: 'Breakfast, Dinner',
      },
      {
        day: 4,
        title: 'Cappadocia Hot Air Balloon & North Tour',
        description: 'Early morning hot air balloon ride over the fairy chimneys of Cappadocia (weather permitting) - a truly unforgettable experience. After breakfast, explore the northern part of Cappadocia, including Göreme Open-Air Museum, Pasabag (Monk\'s Valley), and Devrent Valley (Imagination Valley).',
        accommodation: 'Cave Hotel in Cappadocia',
        meals: 'Breakfast',
      },
      {
        day: 5,
        title: 'Cappadocia South Tour & Return to Istanbul',
        description: 'Explore the southern part of Cappadocia, including the underground city of Kaymakli, Pigeon Valley, and Uçhisar Castle. In the afternoon, transfer to the airport for your flight back to Istanbul. Upon arrival, transfer to your hotel.',
        accommodation: 'Luxury Hotel in Istanbul',
        meals: 'Breakfast, Dinner',
      },
      {
        day: 6,
        title: 'Flight to Dubai',
        description: 'After breakfast, check out from your hotel and transfer to Istanbul Airport for your flight to Dubai. Upon arrival in Dubai, you will be met by our representative and transferred to your hotel. Rest of the day at leisure to relax or begin exploring this amazing city.',
        accommodation: 'Luxury Hotel in Dubai',
        meals: 'Breakfast',
      },
      {
        day: 7,
        title: 'Dubai City Tour',
        description: 'Full-day tour of Dubai\'s highlights, including the Burj Khalifa (with "At the Top" experience), Dubai Mall, Dubai Marina, Palm Jumeirah, and Jumeirah Mosque. Enjoy a traditional abra (water taxi) ride across Dubai Creek and explore the historic Al Fahidi district and the spice and gold souks.',
        accommodation: 'Luxury Hotel in Dubai',
        meals: 'Breakfast',
      },
      {
        day: 8,
        title: 'Desert Safari',
        description: 'Morning at leisure to relax at your hotel or explore Dubai on your own. In the afternoon, embark on an exciting desert safari. Experience dune bashing in 4x4 vehicles, camel riding, and sandboarding, followed by a BBQ dinner at a desert camp with traditional entertainment including belly dancing and tanoura show.',
        accommodation: 'Luxury Hotel in Dubai',
        meals: 'Breakfast, BBQ Dinner',
      },
      {
        day: 9,
        title: 'Abu Dhabi Day Trip',
        description: 'Full-day excursion to Abu Dhabi, the capital of the UAE. Visit the magnificent Sheikh Zayed Grand Mosque, Ferrari World (external view), Heritage Village, and drive along the Corniche. Explore the Louvre Abu Dhabi and Qasr Al Watan presidential palace before returning to Dubai in the evening.',
        accommodation: 'Luxury Hotel in Dubai',
        meals: 'Breakfast',
      },
      {
        day: 10,
        title: 'Dubai at Leisure',
        description: 'Free day to explore Dubai at your own pace. Optional activities (at extra cost) include visiting Miracle Garden, Global Village, skiing at Ski Dubai, or taking a helicopter tour. Alternatively, relax at your hotel\'s facilities or hit the beach.',
        accommodation: 'Luxury Hotel in Dubai',
        meals: 'Breakfast, Farewell Dinner',
      },
      {
        day: 11,
        title: 'Departure',
        description: 'After breakfast, check out from your hotel. Transfer to Dubai International Airport for your departure flight. End of our services. We hope you enjoyed your Turkey-Dubai Combined Tour!',
        accommodation: 'N/A',
        meals: 'Breakfast',
      },
    ],
    highlights: [
      'Explore the historic sites of Istanbul including Hagia Sophia and Blue Mosque',
      'Experience the magical landscapes of Cappadocia with a hot air balloon ride',
      'Visit the stunning white terraces of Pamukkale',
      'Ascend the Burj Khalifa, the world\'s tallest building',
      'Experience an exciting desert safari in Dubai',
      'Visit the majestic Sheikh Zayed Grand Mosque in Abu Dhabi',
    ],
    reviews: [
      {
        id: 1,
        name: 'Miguel Fernandez',
        country: 'Chile',
        rating: 5,
        text: 'The Turkey-Dubai tour was the perfect combination of history, culture, and luxury. We were amazed by the contrast between the ancient sites of Turkey and the futuristic cityscape of Dubai. The hot air balloon ride in Cappadocia and the desert safari in Dubai were unforgettable experiences!',
        avatar: '/images/testimonials/person1.jpg',
      },
      {
        id: 2,
        name: 'Gabriela Torres',
        country: 'Colombia',
        rating: 5,
        text: 'This tour exceeded all our expectations. The accommodations were luxurious, the guides were knowledgeable and friendly, and the itinerary was perfectly balanced. We got to experience the best of both Turkey and Dubai in just 11 days. I would highly recommend this tour to anyone looking for a unique and diverse travel experience.',
        avatar: '/images/testimonials/person2.jpg',
      },
    ],
    faqs: [
      {
        question: 'Do I need a visa for Dubai?',
        answer: 'Visa requirements for Dubai (UAE) vary depending on your nationality. Many countries receive a free visa on arrival, while others need to apply in advance. We recommend checking the specific requirements for your passport before booking.',
      },
      {
        question: 'What is the best time to visit Dubai?',
        answer: 'The best time to visit Dubai is during the winter months (November to April) when the weather is pleasant with temperatures ranging from 20-30°C (68-86°F). Summer (May to October) can be extremely hot with temperatures exceeding 40°C (104°F).',
      },
      {
        question: 'What should I wear in Dubai?',
        answer: 'Dubai is a modern city, but it\'s still part of a conservative Muslim country. While tourists have some flexibility, it\'s recommended to dress modestly, especially in public places. At beaches and hotel pools, regular swimwear is acceptable. When visiting mosques, women should cover their heads, shoulders, and knees, and men should wear long pants.',
      },
      {
        question: 'Is alcohol available in Dubai?',
        answer: 'Alcohol is available in licensed restaurants, bars, and clubs that are typically attached to hotels. Drinking in public places is not allowed and can result in penalties. During Ramadan, alcohol service may be restricted to certain hours.',
      },
      {
        question: 'How much spending money will I need for Dubai?',
        answer: 'Dubai can be expensive compared to many destinations. We recommend budgeting around $100-150 USD per day for meals not included in the tour, shopping, and additional activities. Of course, this can vary significantly depending on your personal spending habits.',
      },
    ],
    relatedTours: ['super-turkey', 'istanbul-cappadocia'],
  },
};

// With Next.js 15, we need to adapt the generateMetadata function to work with static exports
export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const tour = tours[params.slug];
  
  if (!tour) {
    return {
      title: 'Tour Not Found | Saladino Travel',
      description: 'The requested tour could not be found.',
    };
  }
  
  return {
    title: `${tour.title} - ${tour.subtitle} | Saladino Travel`,
    description: tour.description,
    openGraph: {
      title: `${tour.title} - ${tour.subtitle} | Saladino Travel`,
      description: tour.description,
      images: [
        {
          url: tour.image,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
    },
  };
}

// Update the component definition for Next.js 15 compatibility
export default function TourPage({ params }: { params: { slug: string } }) {
  const tour = tours[params.slug];
  
  if (!tour) {
    notFound();
  }
  
  const Stars = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-gray-600">{rating} / 5</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/90 to-brand-teal/80 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src={tour.image} 
            alt={tour.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container-custom relative z-20 pt-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {tour.locations.map((location: string) => (
                <span key={location} className="badge badge-secondary">
                  {location}
                </span>
              ))}
              <span className="badge badge-primary ml-auto">
                {tour.duration}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              {tour.title}
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {tour.subtitle}
            </p>
            <div className="flex items-center mb-6">
              <Stars rating={tour.rating} />
              <span className="ml-2 text-white">({tour.reviewCount} reviews)</span>
            </div>
            <p className="text-lg text-white/90 mb-8">
              {tour.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#booking" 
                className="btn btn-secondary"
              >
                Book Now
              </Link>
              <Link 
                href="#itinerary" 
                className="btn bg-white/90 text-brand-purple hover:bg-white"
              >
                View Itinerary
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: tour.longDescription }} />
              
              <h3 className="text-2xl font-bold mb-6 text-brand-purple">Tour Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="card shadow-lg overflow-hidden">
                <div className="bg-brand-purple p-6 text-white">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Price</h3>
                    <span className="text-3xl font-bold">${tour.price}</span>
                  </div>
                  <p className="text-white/80 text-sm">per person, based on double occupancy</p>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-4">Price Includes:</h4>
                  <ul className="space-y-2 mb-6">
                    {tour.included.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-lg font-bold mb-4">Price Excludes:</h4>
                  <ul className="space-y-2 mb-6">
                    {tour.notIncluded.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/booking" className="btn btn-primary w-full text-center">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Detailed Itinerary</h2>
          
          <div className="space-y-8">
            {tour.itinerary.map((day: Tour['itinerary'][number], index: number) => (
              <div key={index} className="card overflow-hidden">
                <div className="bg-brand-purple p-4 text-white">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">Day {day.day}: {day.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{day.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-gray-700 text-sm">
                        <strong>Accommodation:</strong> {day.accommodation}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-gray-700 text-sm">
                        <strong>Meals:</strong> {day.meals}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Traveler Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tour.reviews.map((review: Tour['reviews'][number]) => (
              <div key={review.id} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 mr-4">
                    <Image 
                      src={review.avatar} 
                      alt={review.name} 
                      width={48} 
                      height={48} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.country}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <Stars rating={review.rating} />
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {tour.faqs.map((faq: Tour['faqs'][number], index: number) => (
              <div key={index} className="card overflow-hidden">
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold mb-3 text-brand-purple">{faq.question}</h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tours Section */}
      <section id="related-tours" className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">You May Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tour.relatedTours.map((relatedTourId: string) => {
              const relatedTour = tours[relatedTourId];
              return (
                <div key={relatedTourId} className="card group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={relatedTour.image} 
                      alt={relatedTour.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <span className="badge badge-primary">
                        {relatedTour.duration}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold mb-1">{relatedTour.title}</h3>
                    <p className="text-brand-purple italic text-xs mb-3">{relatedTour.subtitle}</p>
                    <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-2">{relatedTour.description}</p>
                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xl font-bold text-brand-purple">
                          ${relatedTour.price}
                        </span>
                      </div>
                      <Link 
                        href={`/tours/${relatedTour.id}`} 
                        className="btn btn-outline w-full"
                      >
                        View Tour
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section id="booking" className="py-16 bg-brand-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience {tour.title}?</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Book now to secure your spot on this unforgettable journey through Turkey and Dubai.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/booking?tour=${tour.id}`} className="btn bg-white text-brand-teal hover:bg-gray-100">
              Book This Tour
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white/20">
              Contact Us with Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate all possible paths for tour slugs at build time
export function generateStaticParams() {
  // Return all available tour slugs for static generation
  return Object.keys(tours).map(slug => ({
    slug: slug,
  }));
}
