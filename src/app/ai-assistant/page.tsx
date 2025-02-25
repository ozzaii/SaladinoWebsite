import React from 'react';
import { Metadata } from 'next';
import ChatWrapper from '@/components/shared/ChatWrapper';
import Image from 'next/image';

// Note: To use the Gemini 2.0 Flash API:
// 1. Create an API key from Google AI Studio (https://ai.google.dev/)
// 2. Set up environment variables for the API key
// 3. Install the @google/generative-ai package: npm install @google/generative-ai
// 4. Create a client component that uses the Gemini API

export const metadata: Metadata = {
  title: 'AI Travel Assistant | Saladino Travel',
  description: 'Get instant answers to your travel questions about Turkey, Dubai, Greece, and Egypt with our AI-powered travel assistant using Google Gemini 2.0 Flash.',
};

export default function AIAssistantPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="w-full max-w-5xl mx-auto pt-16 pb-16 px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-3 bg-white px-5 py-2 rounded-full shadow-md">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#4285F4" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1 12c0-.55-.04-1.09-.12-1.61h-9.67v3.05h5.52a4.71 4.71 0 0 1-2.04 3.09v2.58h3.31c1.94-1.78 3.05-4.4 3.05-7.11z"/>
                <path d="m12 22.93c2.76 0 5.08-.91 6.78-2.48l-3.31-2.58c-.92.62-2.1.98-3.47.98-2.66 0-4.92-1.8-5.73-4.22H2.76v2.66a10.21 10.21 0 0 0 9.24 5.63z" fill="#34A853"/>
                <path d="M6.27 14.63a6.21 6.21 0 0 1-.32-1.95c0-.68.12-1.33.32-1.95V8.07H2.76A10.2 10.2 0 0 0 1.8 12c0 1.35.25 2.69.76 3.93l3.71-2.3z" fill="#FBBC05"/>
                <path d="M12 5.42c1.5 0 2.85.51 3.91 1.52l2.94-2.94C16.97 2.33 14.65 1.3 12 1.3a10.2 10.2 0 0 0-9.24 5.77l3.51 2.73c.81-2.42 3.07-4.38 5.73-4.38z" fill="#EA4335"/>
              </svg>
              <span className="text-lg font-semibold bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent">
                Powered by Gemini 2.0 Flash
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent">
            Your AI Travel Companion
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Ask me anything about our tours to Turkey, Dubai, Greece, or Egypt, and I'll provide personalized recommendations with beautiful visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Destination Insights</h3>
            <p className="text-gray-600">Get expert information about the best places to visit and hidden gems in our destinations.</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Visual Responses</h3>
            <p className="text-gray-600">See beautiful images of the places we discuss, powered by advanced AI image search.</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Answers</h3>
            <p className="text-gray-600">Get fast, accurate responses to all your travel questions using cutting-edge AI technology.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-2 md:p-4 h-[600px] border border-gray-200 overflow-hidden">
          <ChatWrapper />
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 italic">
            "Our AI assistant is powered by Google's Gemini 2.0 Flash — the most advanced conversational AI available for travel planning."
          </p>
          <div className="mt-4 flex items-center justify-center space-x-1 text-xs text-gray-400">
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