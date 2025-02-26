"use client"

import React, { memo, useEffect, useState } from 'react';
import { useChatContext } from '@/context/ChatContext';
import dynamic from 'next/dynamic';

// Import AIAssistant with dynamic loading
const AIAssistant = dynamic(() => import('@/components/AIAssistant'), {
  ssr: false,
});

// Using memo to prevent unnecessary re-renders
const FloatingChatButton = memo(function FloatingChatButton() {
  const { isChatOpen, toggleChat } = useChatContext();
  const [shouldRender, setShouldRender] = useState(false);
  
  // Check if we should render the button based on the current path
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShouldRender(!window.location.pathname.includes('/ai-assistant'));
    }
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <AIAssistant 
      isEmbedded={true} 
      initiallyExpanded={isChatOpen}
    />
  );
});

export default FloatingChatButton; 