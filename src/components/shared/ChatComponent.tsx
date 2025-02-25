"use client"

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { sendMessageToGemini, searchForImage } from '@/services/geminiService';

// Define types for our messages
interface Message {
  role: 'user' | 'assistant';
  content: string;
  imageUrl?: string;
}

export default function ChatComponent() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: '¡Hola! I\'m Solana, your Saladino Travel companion! 💫 Ready to help you discover the magic of Turkey, Dubai, Greece, and Egypt. Whether you\'re dreaming of hot air balloons over Cappadocia, stunning Greek islands, or the wonders of Egypt - I know all our routes like the back of my hand! ¿Cómo puedo ayudarte hoy?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the bottom of the chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setIsLoading(true);
    
    try {
      // Convert messages to the format needed for the API
      const messageHistory = messages.map(({ role, content }) => ({ role, content }));
      messageHistory.push({ role: 'user', content: input });
      
      // Since we're in a static export, we need to call the Gemini API directly
      // instead of using the API route
      
      // Get a relevant image based on the user's query
      const imageUrl = await searchForImage(input);
      
      // Call Gemini API directly
      const response = await sendMessageToGemini(messageHistory);
      
      // Add the assistant's response with an image
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response, 
        imageUrl: imageUrl 
      }]);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm sorry, I encountered an error. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-purple to-brand-teal p-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1 12c0-.55-.04-1.09-.12-1.61h-9.67v3.05h5.52a4.71 4.71 0 0 1-2.04 3.09v2.58h3.31c1.94-1.78 3.05-4.4 3.05-7.11z"/>
                <path d="m12 22.93c2.76 0 5.08-.91 6.78-2.48l-3.31-2.58c-.92.62-2.1.98-3.47.98-2.66 0-4.92-1.8-5.73-4.22H2.76v2.66a10.21 10.21 0 0 0 9.24 5.63z" fill="#34A853"/>
                <path d="M6.27 14.63a6.21 6.21 0 0 1-.32-1.95c0-.68.12-1.33.32-1.95V8.07H2.76A10.2 10.2 0 0 0 1.8 12c0 1.35.25 2.69.76 3.93l3.71-2.3z" fill="#FBBC05"/>
                <path d="M12 5.42c1.5 0 2.85.51 3.91 1.52l2.94-2.94C16.97 2.33 14.65 1.3 12 1.3a10.2 10.2 0 0 0-9.24 5.77l3.51 2.73c.81-2.42 3.07-4.38 5.73-4.38z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Saladino Travel Assistant</h2>
              <p className="text-white text-xs opacity-90">Powered by Gemini 2.0 Flash</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} ${index > 0 ? 'mt-8' : ''}`}
          >
            {message.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-teal flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                <span className="text-white text-xs font-bold">S</span>
              </div>
            )}
            
            <div className={`flex flex-col max-w-[85%] ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
              {/* Message content */}
              <div 
                className={`rounded-xl p-4 shadow-sm ${
                  message.role === 'user' 
                    ? 'bg-gradient-to-r from-brand-teal to-brand-purple text-white rounded-br-none' 
                    : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                }`}
              >
                <div className="prose prose-sm">
                  {message.content.split('\n').map((paragraph, i) => (
                    <p key={i} className={`${i > 0 ? 'mt-2' : 'mt-0'} ${message.role === 'user' ? 'text-white' : 'text-gray-800'}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Image if available */}
              {message.role === 'assistant' && message.imageUrl && (
                <div className="mt-3 rounded-xl overflow-hidden shadow-md w-full max-w-xs">
                  <div className="relative h-48 w-full">
                    <Image 
                      src={message.imageUrl} 
                      alt="Travel destination image" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              
              {/* Timestamp */}
              <div className={`text-xs text-gray-400 mt-1 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
            </div>
            
            {message.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2 mt-1 flex-shrink-0">
                <span className="text-white text-xs font-bold">Y</span>
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start mt-6">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-teal flex items-center justify-center mr-2 mt-1">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm rounded-bl-none border border-gray-100">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '600ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about our tours to Turkey, Dubai, Greece or Egypt..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || input.trim() === ''}
            className={`px-4 py-3 rounded-xl font-medium flex items-center justify-center ${
              isLoading || input.trim() === '' 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-brand-purple to-brand-teal text-white hover:opacity-90 transition-opacity'
            }`}
          >
            <span className="mr-1">Send</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <div className="mt-2 text-xs text-gray-500 flex items-center justify-center">
          <span className="font-medium text-brand-purple">Gemini 2.0 Flash</span>
          <span className="mx-1">·</span>
          <span>Responses may contain inaccuracies</span>
        </div>
      </form>
    </div>
  );
} 