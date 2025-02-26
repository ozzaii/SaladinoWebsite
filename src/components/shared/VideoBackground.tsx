"use client"

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';

export default function VideoBackground() {
  // Simple event handler function defined outside JSX
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    // If video errors, hide the video element
    const video = e.currentTarget;
    if (video) {
      video.style.display = 'none';
    }
  };

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-700/50">
        {/* Fallback background color and image in case video fails to load */}
        <Image
          src={getAssetPath("/images/destinations/istanbul-blue-mosque.jpg")}
          alt="Istanbul Blue Mosque"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
      </div>
      <video 
        className="object-cover w-full h-full opacity-80" 
        autoPlay 
        muted 
        loop 
        playsInline
        poster={getAssetPath("/images/destinations/istanbul-blue-mosque.jpg")}
        onError={handleVideoError}
      >
        <source src={getAssetPath("/videos/travel-montage.mp4")} type="video/mp4" />
        <source src={getAssetPath("/videos/travel-hero-background.mp4")} type="video/mp4" />
        <source src={getAssetPath("/videos/hero-bg.mp4")} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#9e1687]/40 backdrop-blur-sm" />
    </div>
  );
} 