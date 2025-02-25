"use client";

import dynamic from 'next/dynamic';

// Import ChatComponent dynamically to avoid SSR issues with client-side hooks
const ChatComponent = dynamic(
  () => import('@/components/shared/ChatComponent'),
  { ssr: false }
);

export default function ChatWrapper() {
  return <ChatComponent />;
} 