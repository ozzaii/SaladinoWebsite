import React from 'react';
import { Metadata } from 'next';
import DestinationDetail from './DestinationDetail';

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

// Generate static params for all destinations
export function generateStaticParams() {
  return Object.keys(destinationsData).map((destinationSlug) => ({
    slug: destinationSlug,
  }));
}

// Generate metadata for each destination page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const destinationSlug = params.slug;
  const destination = destinationsData[destinationSlug as keyof typeof destinationsData];
  
  if (!destination) {
    return {
      title: 'Destination Not Found | Saladino Travel',
      description: 'The requested destination could not be found.',
    };
  }
  
  return {
    title: `${destination.name} | Saladino Travel`,
    description: destination.description.substring(0, 160),
  };
}

// Server Component
export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destinationSlug = params.slug;
  const destinationData = destinationsData[destinationSlug as keyof typeof destinationsData];

  if (!destinationData) {
    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
        <p>Sorry, the requested destination could not be found.</p>
      </div>
    );
  }

  return <DestinationDetail destinationData={destinationData} />;
} 