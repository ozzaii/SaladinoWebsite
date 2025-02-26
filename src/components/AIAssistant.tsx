"use client"

import React, { useState } from 'react';
import ChatComponent from '@/components/shared/ChatComponent';
import { FaGlobeAmericas, FaComment, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface AIAssistantProps {
  isEmbedded?: boolean;
  initiallyExpanded?: boolean;
}

export default function AIAssistant({ 
  isEmbedded = false, 
  initiallyExpanded = false 
}: AIAssistantProps) {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  // If this is not embedded (full page component), always show the chat
  const showChat = !isEmbedded || isExpanded;

  if (!isEmbedded) {
    return (
      <div className="h-[650px] w-full overflow-hidden rounded-xl shadow-lg border border-gray-200">
        <ChatComponent />
      </div>
    );
  }

  // If embedded, we'll create a floating chat button with expandable interface
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showChat && (
          <motion.div 
            className="bg-white rounded-lg shadow-2xl overflow-hidden w-[350px] h-[500px] mb-4"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white p-3">
              <div className="flex items-center">
                <div className="flex items-center justify-center bg-white/20 h-8 w-8 rounded-full mr-2">
                  <FaGlobeAmericas className="text-white" />
                </div>
                <span className="font-semibold">Atlas - Travel Consultant</span>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Close chat"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>
            <div className="h-[calc(100%-48px)]">
              <ChatComponent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showChat && (
        <motion.button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white rounded-lg p-4 px-6 shadow-lg flex items-center hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="mr-3 bg-white/20 h-8 w-8 rounded-full flex items-center justify-center">
            <FaGlobeAmericas className="text-white" />
          </div>
          <span className="font-medium">Consult with Atlas</span>
        </motion.button>
      )}
    </div>
  );
} 