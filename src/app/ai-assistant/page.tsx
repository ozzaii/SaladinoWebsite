"use client"

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaGlobeAmericas, FaImage, FaBolt, FaMapMarkedAlt, FaRegCalendarAlt, FaHistory } from 'react-icons/fa';

// Import the AIAssistant component with dynamic import to ensure it's client-side only
const AIAssistant = dynamic(() => import('@/components/AIAssistant'), {
  ssr: false,
});

// Import the VideoBackground component with dynamic import to ensure it's client-side only
const VideoBackground = dynamic(() => import('@/components/shared/VideoBackground'), {
  ssr: false,
});

// Define brand colors directly to avoid CSS variable issues
const brandPurple = '#9e1687';
const brandTeal = '#14b8a6';

// Note: To use the Gemini 2.0 Flash API:
// 1. Create an API key from Google AI Studio (https://ai.google.dev/)
// 2. Set up environment variables for the API key
// 3. Install the @google/generative-ai package: npm install @google/generative-ai
// 4. Create a client component that uses the Gemini API

export default function AIAssistantPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <VideoBackground />
        
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 bg-black/40">
          <div className="text-center max-w-4xl">
            <div className="inline-block mb-6 px-6 py-3 rounded-full bg-white/90 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-[#9e1687] to-[#14b8a6] h-10 w-10 rounded-full flex items-center justify-center">
                  <FaGlobeAmericas className="text-white h-5 w-5" />
                </div>
                <span className="text-lg font-semibold bg-gradient-to-r from-[#9e1687] to-[#14b8a6] bg-clip-text text-transparent">
                  Powered by Gemini 2.0 Flash
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white drop-shadow-md">
              Meet Atlas:<br />Your Travel Consultant
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light mb-8">
              Discover distinctive journeys through Turkey, Dubai, Greece, and Egypt with personalized guidance from our travel intelligence system.
            </p>
            
            <a href="#chat" className="inline-block px-8 py-4 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Consult with Atlas
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto -mt-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <FaMapMarkedAlt className="h-8 w-8 text-[#9e1687]" />
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] bg-clip-text text-transparent">Destination Intelligence</h3>
            <p className="text-gray-700">
              Access nuanced insights on regional culture, architecture, cuisine, and accommodation options across Turkey, Dubai, Greece, and Egypt.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <FaImage className="h-8 w-8 text-[#14b8a6]" />
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#14b8a6] to-[#9e1687] bg-clip-text text-transparent">Visual Exploration</h3>
            <p className="text-gray-700">
              Request visual references of specific destinations, historical sites, or accommodations to inform your travel decisions.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <FaRegCalendarAlt className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-[#14b8a6] bg-clip-text text-transparent">Itinerary Design</h3>
            <p className="text-gray-700">
              Receive tailored itinerary recommendations considering your interests, time constraints, and cultural preferences.
            </p>
          </div>
        </div>
        
        {/* Chat Interface */}
        <div id="chat" className="bg-white rounded-xl shadow-2xl p-1 md:p-2 mb-12 overflow-hidden border border-gray-200 transform hover:shadow-2xl transition-all duration-300">
          <AIAssistant />
        </div>
        
        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Traveler Conversations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-4">
                <Image 
                  src={getAssetPath("/images/testimonials/latin-american-woman.jpg")} 
                  alt="Traveler" 
                  width={60} 
                  height={60} 
                  className="rounded-full mr-4 object-cover border-2 border-purple-300"
                />
                <div>
                  <p className="font-medium text-lg">Sophia R.</p>
                  <p className="text-gray-500 text-sm">Planning a family journey</p>
                </div>
              </div>
              <p className="text-gray-700">"Atlas provided excellent recommendations for family-friendly activities in Istanbul, including optimal visiting times and cultural insights that enhanced our experience significantly."</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-4">
                <Image 
                  src={getAssetPath("/images/testimonials/latin-american-man.jpg")} 
                  alt="Traveler" 
                  width={60} 
                  height={60} 
                  className="rounded-full mr-4 object-cover border-2 border-teal-300"
                />
                <div>
                  <p className="font-medium text-lg">Carlos M.</p>
                  <p className="text-gray-500 text-sm">Solo traveler</p>
                </div>
              </div>
              <p className="text-gray-700">"The comprehensive 10-day itinerary Atlas created for my Turkish adventure perfectly balanced historical exploration with outdoor experiences, including exceptional culinary recommendations."</p>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How accurate is the travel information?</h3>
              <p className="text-gray-600">Atlas is powered by Google's Gemini 2.0 Flash model and continuously updated with accurate information about our destinations. Our travel experts regularly validate the recommendations to ensure reliability.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can I book directly through Atlas?</h3>
              <p className="text-gray-600">While Atlas provides detailed information about tours and approximate pricing, final bookings are arranged through our travel consultants to ensure your specific requirements are fully addressed.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What regions does Atlas specialize in?</h3>
              <p className="text-gray-600">Atlas has specialized knowledge of Turkey, Dubai, Greece, and Egypt, including detailed information about attractions, accommodations, cultural context, and travel logistics within these regions.</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mb-16 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] rounded-xl p-8 text-center text-white shadow-xl transform hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-0"></div>
          
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10 z-0">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '15px 15px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <div className="mx-auto w-20 h-1 bg-white/40 rounded-full mb-6"></div>
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Plan Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Consult with Atlas about your travel aspirations or connect with our travel experts for a personalized consultation.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#chat" className="bg-white/15 hover:bg-white/25 backdrop-blur-sm px-8 py-3 rounded-lg font-bold transition-all duration-300 border border-white/30">
                Consult with Atlas
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
                Contact Expert
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src={getAssetPath("/images/saladino-travel-logo.png")}
              alt="Saladino Travel"
              width={120}
              height={40}
              className="h-auto"
            />
          </div>
          <p className="text-gray-500 italic">
            "Atlas continuously refines its knowledge to provide increasingly personalized travel recommendations."
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-400">
            <span>Saladino Travel</span>
            <span>•</span>
            <span>Gemini 2.0 Flash</span>
            <span>•</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </main>
  );
} 