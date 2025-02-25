import React from 'react';
import { Metadata } from 'next';
import ChatWrapper from '@/components/shared/ChatWrapper';

// Note: To use the Gemini 2.0 Flash API:
// 1. Create an API key from Google AI Studio (https://ai.google.dev/)
// 2. Set up environment variables for the API key
// 3. Install the @google/generative-ai package: npm install @google/generative-ai
// 4. Create a client component that uses the Gemini API

export const metadata: Metadata = {
  title: 'AI Travel Assistant | Saladino Travel',
  description: 'Get instant answers to your travel questions about Turkey, Dubai, Greece, and Egypt with our AI-powered travel assistant.',
};

export default function AIAssistantPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full max-w-5xl mx-auto pt-20 pb-16 px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            AI Travel Assistant
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Ask me anything about our tours to Turkey, Dubai, Greece, or Egypt, and I'll provide personalized recommendations.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 h-[600px] border border-gray-200">
          {/* The ChatWrapper handles loading the chat component with ssr: false */}
          <ChatWrapper />
        </div>
        
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Powered by Google Gemini 2.0 Flash</p>
          <p className="mt-2">Your AI travel companion for exploring Turkey, Dubai, Greece, and Egypt.</p>
        </div>
      </div>
    </main>
  );
} 