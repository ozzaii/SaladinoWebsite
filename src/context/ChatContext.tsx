"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ChatContextProps {
  isChatOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  hasBeenOpened: boolean;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  const openChat = useCallback(() => {
    setIsChatOpen(true);
    setHasBeenOpened(true);
  }, []);

  const closeChat = useCallback(() => {
    setIsChatOpen(false);
  }, []);

  const toggleChat = useCallback(() => {
    setIsChatOpen(prev => !prev);
    setHasBeenOpened(true);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        isChatOpen,
        openChat,
        closeChat,
        toggleChat,
        hasBeenOpened,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
} 