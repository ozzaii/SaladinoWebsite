"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { FaGlobeAmericas, FaImage, FaBolt, FaMapMarkedAlt, FaRegCalendarAlt, FaHistory, FaRobot, FaComments } from 'react-icons/fa';
import Head from 'next/head';

// Dynamically import client-side only components
const AIAssistant = dynamic(() => import('@/components/shared/ChatComponent'), {
  ssr: false,
});

const VideoBackground = dynamic(() => import('@/components/shared/VideoBackground'), {
  ssr: false,
});

// Brand colors
const brandPrimary = '#9e1687';
const brandSecondary = '#14b8a6';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Atlas AI Travel Assistant | Saladino Travel',
  description: 'Discover personalized travel experiences with Atlas, your AI-powered travel consultant. Get instant itineraries, destination insights, and travel recommendations for Turkey and Dubai.',
  keywords: ['AI travel assistant', 'travel consultant', 'Turkey travel', 'Dubai travel', 'travel planning', 'Atlas AI'],
  openGraph: {
    title: 'Atlas AI Travel Assistant | Saladino Travel',
    description: 'Your personal AI travel consultant for Turkey and Dubai. Get instant itineraries and travel recommendations.',
    images: ['/images/atlas-ai-preview.jpg'],
    url: 'https://saladinotravel.com/ai-assistant',
    type: 'website',
  },
};

export default function AIAssistantPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
      </Head>
      <main className="min-h-screen bg-[#f9fafb]">
        {/* Hero Section with Video Background */}
        <section className="relative h-[65vh] text-white flex items-center overflow-hidden">
          <VideoBackground videoSrc="/videos/travel-hero.mp4" />
          
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-[2px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e1687] to-[#14b8a6]">Atlas</span>, 
                <div className="mt-2">Your AI Travel Consultant</div>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Explore Turkey & Dubai with personalized recommendations, itineraries, and insights from your AI-powered travel companion.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#chat-section" 
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transform hover:translate-y-[-2px] transition-all duration-300"
                >
                  Chat with Atlas
                </a>
                <Link
                  href="/tours"
                  className="px-8 py-4 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold hover:bg-white/30 transition-all duration-300"
                >
                  Browse Tours
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gradient-to-br from-[#9e1687]/10 to-[#14b8a6]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gradient-to-tr from-[#9e1687]/10 to-[#14b8a6]/10 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Personal AI Travel Expert
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Atlas combines extensive knowledge of Turkey and Dubai with advanced AI capabilities to provide you with personalized travel guidance, recommendations, and support.
              </p>
            </div>
            
            {/* Chat Section */}
            <div id="chat-section" className="max-w-5xl mx-auto mb-32 scroll-mt-24">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden border border-gray-100 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9e1687] to-[#14b8a6]"></div>
                
                {/* Chat Interface */}
                <div className="p-6 md:p-10 pb-6">
                  <div className="flex items-center mb-6">
                    <div className="relative w-14 h-14 bg-gradient-to-br from-[#9e1687] to-[#14b8a6] rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                      A
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Atlas AI Assistant</h3>
                      <p className="text-gray-500">Travel Expert • Available 24/7</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] p-6 rounded-2xl mb-8 max-w-2xl mx-auto text-center border border-gray-100">
                    <p className="text-gray-600 mb-4 text-lg">
                      Hello! I'm Atlas, your AI travel assistant for Turkey and Dubai. 
                      Ask me anything about destinations, attractions, tours, or travel planning!
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center text-sm">
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 cursor-pointer hover:bg-gray-200">
                        "Best time to visit Istanbul?"
                      </div>
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 cursor-pointer hover:bg-gray-200">
                        "Top attractions in Dubai"
                      </div>
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 cursor-pointer hover:bg-gray-200">
                        "5 day itinerary for Turkey"
                      </div>
                    </div>
                  </div>
                  
                  <AIAssistant />
                </div>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {/* Destination Intelligence */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 mb-6 bg-[#9e1687]/10 rounded-xl flex items-center justify-center group-hover:bg-[#9e1687]/20 transition-all duration-300">
                  <svg className="w-7 h-7 text-[#9e1687]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Destination Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Get accurate, up-to-date information about attractions, cultural insights, local customs, and practical travel tips.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Local recommendations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cultural etiquette
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Transportation advice
                  </li>
                </ul>
              </div>
              
              {/* Visual Exploration */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 mb-6 bg-[#14b8a6]/10 rounded-xl flex items-center justify-center group-hover:bg-[#14b8a6]/20 transition-all duration-300">
                  <svg className="w-7 h-7 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Exploration</h3>
                <p className="text-gray-600 mb-4">
                  Discover the beauty of Turkey and Dubai through rich descriptions and image recommendations of iconic landmarks.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#9e1687]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Stunning descriptions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#9e1687]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hidden gems
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#9e1687]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Scenic viewpoints
                  </li>
                </ul>
              </div>
              
              {/* Tailored Itinerary Design */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[#9e1687]/10 to-[#14b8a6]/10 rounded-xl flex items-center justify-center group-hover:from-[#9e1687]/20 group-hover:to-[#14b8a6]/20 transition-all duration-300">
                  <svg className="w-7 h-7 text-[#9e1687]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tailored Itinerary Design</h3>
                <p className="text-gray-600 mb-4">
                  Get personalized day-by-day travel plans based on your interests, timeframe, and preferences.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gradient-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom schedules
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gradient-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Pace optimization
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gradient-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Budget considerations
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Traveler Conversations */}
            <div className="mb-24" id="traveler-conversations">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Conversations from Fellow Travelers
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    question: "What are the must-see places in Istanbul for a 3-day trip?",
                    answer: "For a 3-day Istanbul trip, I recommend: Day 1: Hagia Sophia, Blue Mosque, and Topkapi Palace. Day 2: Grand Bazaar, Spice Market, and a Bosphorus cruise. Day 3: Chora Church, Galata Tower, and Istiklal Street. Don't miss trying Turkish tea, baklava, and authentic kebabs!",
                    traveler: "Sarah M.",
                    location: "United States"
                  },
                  {
                    question: "Can you recommend family-friendly activities in Dubai?",
                    answer: "Dubai offers amazing family activities including Atlantis Aquaventure Waterpark, Dubai Aquarium, IMG Worlds of Adventure, Legoland Dubai, Desert Safari (many offer child-friendly options), Dubai Parks and Resorts, KidZania, and the stunning beaches. Most malls also have fantastic entertainment zones for children.",
                    traveler: "Robert K.",
                    location: "Australia"
                  },
                  {
                    question: "What's the best time to visit Cappadocia for hot air balloon rides?",
                    answer: "The best time for hot air balloon rides in Cappadocia is from April to June and September to October when weather conditions are most favorable with clear skies and gentle winds. Summer (July-August) offers great weather but can be very hot and crowded. Winter flights are magical with snow-covered landscapes but more prone to cancellations.",
                    traveler: "Mei L.",
                    location: "Canada"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9e1687] to-[#14b8a6] flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                        {item.traveler.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.traveler}</h4>
                        <p className="text-sm text-gray-500">{item.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-800 font-medium mb-3">"{item.question}"</p>
                    <div className="pl-4 border-l-2 border-[#14b8a6]">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mb-24" id="faq">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Frequently Asked Questions
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {[
                  {
                    question: "How accurate is Atlas AI in providing travel information?",
                    answer: "Atlas combines extensive knowledge about Turkey and Dubai with the latest data. While Atlas strives for accuracy, we recommend verifying time-sensitive information like opening hours and prices with official sources before finalizing your plans."
                  },
                  {
                    question: "Can Atlas help me book tours or accommodations?",
                    answer: "Atlas can provide recommendations and information about tours and accommodations, but actual bookings are handled through our booking platform. Atlas can guide you through options and direct you to the booking page when you're ready."
                  },
                  {
                    question: "What areas does Atlas specialize in?",
                    answer: "Atlas specializes in travel throughout Turkey (including Istanbul, Cappadocia, Antalya, and the Turkish Riviera) and Dubai. The AI has detailed knowledge about attractions, local customs, transportation, cuisine, shopping, and cultural experiences in these regions."
                  },
                  {
                    question: "How personalized are Atlas's recommendations?",
                    answer: "Atlas tailors recommendations based on your stated preferences, interests, travel style, budget considerations, and timeframe. The more details you share about what you're looking for, the more personalized the suggestions will be."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#9e1687] transition-colors duration-300">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="rounded-3xl bg-gradient-to-r from-[#9e1687]/10 to-[#14b8a6]/10 p-10 md:p-16 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ready to Plan Your Dream Journey?
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Consult with Atlas or connect with our travel experts to start crafting your personalized adventure today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="#chat-section" 
                    className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transform hover:translate-y-[-2px] transition-all duration-300"
                  >
                    Chat with Atlas
                  </a>
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-lg bg-white text-gray-900 border border-gray-200 font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Contact Our Experts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 