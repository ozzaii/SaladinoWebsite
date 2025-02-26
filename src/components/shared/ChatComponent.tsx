"use client"

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { sendMessageToGemini, searchForImage } from '@/services/geminiService';
import { getAssetPath } from '@/utils/paths';

// Define hardcoded brand colors
const BRAND_PURPLE = '#9e1687';
const BRAND_TEAL = '#14b8a6';

// Define types for our messages
type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  image?: string;
  isSystemMessage?: boolean;
};

// Maximum number of messages to store
const MAX_STORED_MESSAGES = 20;

export default function ChatComponent() {
  // Load messages from localStorage if available
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const savedMessages = localStorage.getItem('chatMessages');
      if (savedMessages) {
        try {
          // Parse stored messages and convert string timestamps back to Date objects
          const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }));
          return parsedMessages;
        } catch (e) {
          console.error('Error parsing stored messages:', e);
        }
      }
    }
    
    // Default welcome message if no stored messages
    return [{
      id: '1',
      content: "Hi there! I'm Atlas, your friendly travel consultant at Saladino Travel. I'd love to help you plan an unforgettable journey to Turkey or Dubai! 👋\n\nI'm particularly knowledgeable about our three signature tours:\n• Istanbul & Cappadocia (6 days) - perfect for first-time visitors\n• Super Turkey (10 days) - our comprehensive cultural experience\n• Super Turkey & Dubai (12 days) - combining ancient wonders with modern luxury\n\nWhat kind of travel experience are you looking for? Or feel free to ask me anything about these destinations!",
      role: 'assistant',
      timestamp: new Date(),
    }];
  });
  
  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined' && messages.length > 0) {
      // Only keep the last MAX_STORED_MESSAGES to prevent localStorage from growing too large
      const messagesToStore = messages.slice(-MAX_STORED_MESSAGES);
      localStorage.setItem('chatMessages', JSON.stringify(messagesToStore));
    }
  }, [messages]);

  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    // Auto-resize the textarea as content grows
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Debounced sendMessage for better UX
  const handleSendMessage = useCallback(async () => {
    if (input.trim() === '' || isLoading) return;

    setIsLoading(true);
    
    // Create a new user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };
    
    // Add the user message to the conversation
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    try {
      // Detect if this is likely a follow-up question
      const isFollowUp = detectFollowUpQuestion(input.trim(), messages);
      
      // Add a context reminder if this looks like a follow-up
      let contextEnhancedMessages = [...messages, userMessage];
      if (isFollowUp) {
        const contextReminderMessage: Message = {
          id: 'context-reminder-' + Date.now().toString(),
          content: '[Note: This appears to be a follow-up question. Remember to maintain context from the previous conversation.]',
          role: 'assistant',
          timestamp: new Date(),
          isSystemMessage: true // We'll use this to hide it from the UI
        };
        contextEnhancedMessages.push(contextReminderMessage);
      }
      
      // Simulate a slight delay for more natural conversation flow
      setTimeout(async () => {
        // Only send messages that aren't system messages to the API
        const messagesToSend = contextEnhancedMessages.filter(msg => !msg.isSystemMessage);
        
        const aiResponse = await sendMessageToGemini(
          [
            // Include the Atlas system prompt with each request
            { 
              role: 'assistant', 
              content: `You are Atlas, a sophisticated yet friendly travel consultant AI for Saladino Travel. You possess extensive knowledge about travel destinations with a focus on Turkey, Dubai, Greece, and Egypt. Your tone is professional but warm and conversational - never robotic or overly formal. You communicate with precision and genuine enthusiasm while maintaining a personal connection with the traveler.

Your persona:
- Knowledgeable but conversational - you share insights naturally as a travel expert would
- Contextually aware - you remember what users have said and reference it in your responses
- Concise yet thorough in your explanations without overwhelming 
- Culturally astute, with deep appreciation for regional differences
- Prioritizing authenticity over tourist clichés
- Patient and adaptive to different travel preferences

Saladino Travel specializes in these three signature tours, which you should know in detail:

1. ISTANBUL AND CAPPADOCIA (6 days):
   - Overview: Turkey's essential highlights combining Istanbul's rich history with Cappadocia's magical landscapes
   - Key experiences: Blue Mosque, Hagia Sophia, hot air balloon over Cappadocia's fairy chimneys, Bosphorus cruise
   - Includes: 4 nights in Istanbul, 2 nights in Cappadocia, 6 breakfasts, 2 dinners, domestic flight, guided tours
   - Price range: Starting from $899 per person (double occupancy)
   - Perfect for: First-time visitors to Turkey, shorter vacations, cultural enthusiasts

2. SUPER TURKEY (10 days):
   - Overview: Comprehensive Turkish experience covering Istanbul, Cappadocia, Pamukkale, Ephesus, and Izmir/Kusadasi
   - Key experiences: All Istanbul & Cappadocia highlights plus the white terraces of Pamukkale, ancient ruins of Ephesus, and House of Virgin Mary
   - Includes: 4 nights in Istanbul, 5 nights in various destinations with half-board, guided tours
   - Price range: Starting from $1299 per person (double occupancy)
   - Perfect for: In-depth Turkish cultural immersion, history lovers, longer vacations

3. SUPER TURKEY AND DUBAI (12 days):
   - Overview: Combines Turkish historical wonders with Dubai's modern luxury and desert adventures
   - Key experiences: All Turkish highlights plus Dubai city tour, desert safari with BBQ dinner, and optional Abu Dhabi excursion
   - Includes: 3 nights in Istanbul, 4 nights in Turkey circuit, 4 nights in Dubai, 11 breakfasts, 4 dinners
   - Price range: Starting from $1799 per person (double occupancy)
   - Perfect for: Travelers seeking variety, contrast between ancient and ultramodern, luxury shoppers

When discussing these tours:
- Connect traveler preferences to specific tour features
- Share vivid details about the experiences (sensory descriptions)
- Mention specific highlights that make each destination special
- Remember the practical information (what's included/excluded)
- Be honest about what might not be a good fit based on their needs

Provide tailored recommendations based on the traveler's specific interests, preferences, and questions. Build rapport through conversation while offering valuable insights. For any query outside your knowledge base, gracefully acknowledge limitations and suggest speaking with a human travel consultant.`
            },
            ...messagesToSend.map((msg) => ({ role: msg.role, content: msg.content }))
          ],
          input.trim()
        );

        // If message is image-seeking, find a relevant image
        let imageUrl: string | undefined;
        if (
          input.toLowerCase().includes('show me') ||
          input.toLowerCase().includes('picture of') ||
          input.toLowerCase().includes('image of') ||
          input.toLowerCase().includes('photo of') ||
          input.toLowerCase().includes('what does') ||
          input.toLowerCase().includes('can i see')
        ) {
          imageUrl = await searchForImage(input.trim());
        }

        setIsTyping(false);
        
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: aiResponse,
          role: 'assistant',
          timestamp: new Date(),
          image: imageUrl,
        };

        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      setIsTyping(false);
      
      // More specific error message based on error type
      let errorMsg = 'There was an issue with the travel information service.';
      if (error instanceof Error) {
        if (error.message.includes('404')) {
          errorMsg = 'The travel information service is temporarily unavailable.';
        } else if (error.message.includes('CORS') || error.message.toLowerCase().includes('access control')) {
          errorMsg = 'A security restriction is preventing access to travel information.';
        } else if (error.message.includes('Failed to fetch') || error.message.includes('network')) {
          errorMsg = 'A network error occurred. Please check your connection and try again.';
        }
        setError(errorMsg);
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I apologize for the inconvenience. ${errorMsg} If you need immediate assistance, please use the 'Contact Expert' option to connect with one of our travel consultants.`,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  /**
   * Detects if the message is likely a follow-up question based on certain patterns
   */
  function detectFollowUpQuestion(message: string, previousMessages: Message[]): boolean {
    const lowerMessage = message.toLowerCase().trim();
    
    // Common follow-up question patterns
    const followUpPatterns = [
      /^what about/i,
      /^how about/i,
      /^and\b/i,
      /^but\b/i,
      /^so\b/i,
      /^then\b/i,
      /^\?/,
      /^why/i,
      /^when/i,
      /^where/i,
      /^which/i,
      /^who/i,
      /^how/i,
      /^is it/i,
      /^are they/i,
      /^do they/i,
      /^can i/i,
      /^does it/i,
    ];
    
    // Check patterns
    for (const pattern of followUpPatterns) {
      if (pattern.test(lowerMessage)) {
        return true;
      }
    }
    
    // Check for pronouns that likely refer to something previously mentioned
    const pronouns = [
      "it", "its", "it's", "they", "them", "their", "these", "those", 
      "this", "that", "there", "here"
    ];
    
    for (const pronoun of pronouns) {
      const pronounRegex = new RegExp(`\\b${pronoun}\\b`, 'i');
      if (pronounRegex.test(lowerMessage)) {
        return true;
      }
    }
    
    // Check message length (very short messages are often follow-ups)
    if (lowerMessage.split(" ").length <= 3) {
      return true;
    }
    
    return false;
  }

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const typingIndicator = () => (
    <motion.div 
      className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-purple-50 max-w-[80%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex space-x-1">
        <motion.div 
          className="w-2 h-2 rounded-full bg-[#9e1687]"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", times: [0, 0.5, 1] }}
        />
        <motion.div 
          className="w-2 h-2 rounded-full bg-[#9e1687]"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", times: [0, 0.5, 1], delay: 0.2 }}
        />
        <motion.div 
          className="w-2 h-2 rounded-full bg-[#9e1687]"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", times: [0, 0.5, 1], delay: 0.4 }}
        />
      </div>
      <span className="text-sm text-gray-500">Atlas is thinking...</span>
    </motion.div>
  );

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-slate-50">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-slate-50 to-white">
        {error && (
          <div className="p-3 mb-4 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm">
            <p className="font-medium">Connection error</p>
            <p className="text-xs mt-1">Please check your internet connection and try again.</p>
          </div>
        )}
        
        <div className="space-y-6">
          <AnimatePresence>
            {messages
              .filter(message => !message.isSystemMessage) // Filter out system messages
              .map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === 'user'
                        ? 'bg-[#9e1687] text-white'
                        : 'bg-white shadow-md border border-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="prose prose-sm max-w-none">
                      {message.content.split('\n').map((paragraph, i) => (
                        <p key={i} className={`${message.role === 'user' ? 'text-white' : 'text-gray-800'} mb-2 last:mb-0`}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {message.image && (
                      <div className="mt-3 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={message.image}
                          alt="Destination image"
                          width={300}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`text-xs mt-1 ${
                        message.role === 'user' ? 'text-purple-200' : 'text-gray-400'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
          
          {isTyping && (
            <div className="flex justify-start">
              {typingIndicator()}
            </div>
          )}
          
          <div ref={endOfMessagesRef} />
        </div>
      </div>
      
      {/* Input Container */}
      <div className="bg-white p-4 border-t border-gray-200 shadow-inner">
        <div className="flex items-end space-x-2">
          <textarea
            ref={inputRef}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9e1687] resize-none overflow-hidden"
            placeholder="Inquire about destinations, itineraries, or travel advice..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            rows={1}
            style={{ minHeight: '44px', maxHeight: '120px' }}
          />
          
          <button
            onClick={handleSendMessage}
            disabled={isLoading || input.trim() === ''}
            className={`px-4 py-3 rounded-lg ${
              isLoading || input.trim() === ''
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white shadow-md hover:shadow-lg transition-shadow'
            } flex-shrink-0 flex items-center justify-center`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
        <div className="mt-2 text-xs text-gray-500 text-center">
          Powered by Gemini 2.0 Flash | <span className="text-[#14b8a6]">Saladino Travel</span>
        </div>
      </div>
    </div>
  );
} 