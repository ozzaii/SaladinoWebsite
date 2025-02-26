"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax effect
  const calculateParallax = (factor: number) => {
    return scrollY * factor;
  };

  const featureItems = [
    {
      icon: "🌍",
      title: "Destinos Únicos",
      description: "Explora Turquía y Dubái con expertos locales"
    },
    {
      icon: "💬",
      title: "Guías Hispanohablantes",
      description: "Comunícate en tu idioma durante todo el viaje"
    },
    {
      icon: "✨",
      title: "Experiencias Exclusivas",
      description: "Acceso a lugares y momentos inolvidables"
    },
    {
      icon: "🛎️",
      title: "Servicio Personalizado",
      description: "Atención detallada y adaptada a tus necesidades"
    }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen bg-gray-900 pt-20">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full" style={{ transform: `translateY(${calculateParallax(0.2)}px)` }}>
          <Image
            src={getAssetPath("/images/hero/istanbul-panorama.jpg")}
            alt="Istanbul Panorama"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900 z-10 pointer-events-none" />
      
      {/* Content */}
      <div className="container relative mx-auto px-6 md:px-10 pt-28 pb-16 md:pt-36 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          <div className="space-y-8" style={{ transform: `translateY(${calculateParallax(-0.05)}px)` }}>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Descubre la magia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e1687] to-[#14b8a6]">Turquía y Dubái</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] rounded-full mt-6" />
            </div>
            
            <p className="text-xl text-gray-300 max-w-2xl">
              Viajes personalizados con guías hispanohablantes. Experimenta la cultura, 
              la historia y la belleza de destinos únicos con el mejor servicio.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/tours" 
                className="px-8 py-4 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] rounded-full text-white font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#9e1687]/20 hover:-translate-y-1"
              >
                Ver Tours
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium text-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
              >
                Contáctanos
              </Link>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ transform: `translateY(${calculateParallax(-0.08)}px)` }}>
            {featureItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-[#9e1687]/10 hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                <div className="h-1 w-12 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] rounded-full mt-4 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-opacity-70 flex flex-col items-center cursor-pointer hover:text-opacity-100 transition-all duration-300"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="h-10 w-6 border-2 border-white border-opacity-50 rounded-full flex justify-center p-1">
            <div className="h-2 w-2 bg-white rounded-full animate-bounce-slow" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 