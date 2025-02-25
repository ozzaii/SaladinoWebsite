"use client"

import React, { useState, useRef, useEffect } from 'react';

// This is a placeholder component that would be connected to the actual AI backend
export default function ChatComponent() {
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant'; content: string}>>([
    { 
      role: 'assistant', 
      content: '¡Hola! I\'m Solana, your Saladino Travel companion! 💫 Ready to help you discover the magic of Turkey, Dubai, Greece, and Egypt. Whether you\'re dreaming of hot air balloons over Cappadocia, stunning Greek islands, or the wonders of Egypt - I know all our routes like the back of my hand! ¿Cómo puedo ayudarte hoy?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Deep knowledge responses about Saladino's main tour packages with Spanish personality flair
  const sampleResponses = [
    // Türkiye Imperdible Tour - Our flagship 10-night Turkey experience
    "¡El Türkiye Imperdible es nuestra joya de la corona! 💎 This 10-night journey is our most comprehensive Turkish experience at $1,499 per person. You'll explore Istanbul's majestic Blue Mosque and Hagia Sophia, float above Cappadocia in a hot air balloon (mi parte favorita!), marvel at Pamukkale's white thermal pools, and walk through ancient Ephesus. Between you and me, the best photo spot in Istanbul is actually from the secret rooftop café near Galata Tower - most tourists completely miss it! Our Spanish-speaking guides will make you feel right at home while experiencing all the Turkish treasures. ¿Te gustaría reservar este tour increíble?",
    
    // Estambul y Capadocia Tour - The essential 6-night Turkey experience
    "Our Estambul y Capadocia package is perfect for travelers with limited time but unlimited curiosity! ✨ For $899, this 6-night adventure gives you the essential Turkish experience. In Istanbul, you'll explore where East meets West (and trust me, the best Turkish delight is at a tiny shop I discovered near the Spice Bazaar – not the tourist spots!). Then in Cappadocia, our signature hot air balloon ride awaits! After guiding hundreds of guests, I can tell you the expression on people's faces when they first see the sunrise over those fairy chimneys is absolutely priceless. This tour includes our phenomenal Spanish-speaking guides who bring history to life. ¿Cuándo te gustaría viajar?",
    
    // Türkiye y Dubái Tour - The perfect East meets modern luxury
    "Ah, Türkiye y Dubái - where ancient tradition meets futuristic luxury! 🌟 This 11-night journey priced at $1,899 creates the perfect contrast. You'll start with Istanbul's minarets and Cappadocia's magical landscapes, then fly to dazzling Dubai where you'll ascend the Burj Khalifa (I recommend sunset visits - you get both daytime AND nighttime views!), experience an authentic desert safari, and enjoy world-class shopping. I still get goosebumps every time I see the Dubai fountain show - it's spectacular! All transfers between countries are seamless with our bilingual guides throughout. ¿Te interesa combinar estas dos culturas fascinantes?",
    
    // Türkiye y Grecia con Crucero - Turkey and Greece with island cruise
    "Our Türkiye y Grecia con Crucero is pure Mediterranean magic for $2,099! ✨ This 11-night journey combines Turkey's rich Ottoman heritage with Greece's classical wonders and a luxury cruise through the islands. Having sailed these waters countless times, I can tell you that watching the sunset in Santorini with a glass of local wine is simply unforgettable! We handle every detail, from your expert Spanish-speaking guides to all transfers between countries. Mi recomendación personal: pack light layers as the Greek island breezes can be surprisingly cool in the evenings!",
    
    // Las Estrellas del Oriente - The ultimate 18-night Eastern adventure
    "Las Estrellas del Oriente is our crown jewel - an epic 18-night adventure through Dubai, Egypt and Turkey for $3,499! You'll start amid Dubai's futuristic skyline, then travel to Egypt where the ancient pyramids await (did you know our guides can take you to a special viewpoint where tourists rarely go?). Finally, you'll explore Turkey's treasures from Istanbul to Cappadocia. As someone who's guided this route many times, I can promise you'll return home with stories you'll be telling for years! We handle all the complex logistics between three countries, while you simply enjoy the journey. ¿Estás listo para la aventura definitiva?",
    
    // Special response about hot air balloon experience
    "¡Ay, the hot air balloon ride in Cappadocia! It's the absolute highlight of our Turkey tours! We arrange for pre-dawn pickup (I know it's early, but TRUST ME, it's worth it!), transport to the launch site where you'll enjoy Turkish tea and pastries, then a spectacular one-hour flight over the fairy chimneys as the sun paints the sky. The way the light hits those unique rock formations... I've seen it hundreds of times and still take photos every single time! We conclude with a traditional champagne toast and personalized flight certificate. It's consistently rated as the #1 experience by our guests. Make sure to bring your camera - ¡las fotos serán increíbles!",
    
    // Weather and best time to visit advice
    "For the perfect weather experience, here's my insider advice: Turkey shines in spring (April-June) and fall (September-November) with pleasant temperatures and fewer crowds. For Dubai, November to March is ideal with comfortable temperatures around 75-85°F - I definitely recommend avoiding summer when it can exceed 104°F! Greece is sublime May-June and September-October with gorgeous weather for island hopping. Egypt is best October to April to avoid the scorching summer heat. If you're doing a multi-country tour, fall is generally the sweet spot for comfortable conditions across all destinations. ¿Cuándo planeas viajar?",
    
    // Accommodations and services highlights  
    "At Saladino Travel, we pride ourselves on selecting the perfect accommodations that blend luxury with authentic local character. In Istanbul, we partner with boutique hotels in the historic Sultanahmet district (ask for a room with a Bosphorus view - ¡vale la pena!). In Cappadocia, prepare to be amazed by our carefully selected cave hotels carved into the rock - a truly unique experience! Our Dubai properties offer that signature Arabian luxury, while our Greek island accommodations feature stunning Aegean views. All our tours include bilingual guides, private transportation, domestic flights, daily breakfast, select special dinners, entrance fees, and our personal touch throughout. ¿Algo más que quieras saber?"
  ];

  // Automatically scroll to the bottom of the chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      // Pick a random sample response
      const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
      setIsLoading(false);
    }, 1500); // Simulate network delay
    
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user' 
                  ? 'bg-brand-teal text-white rounded-br-none' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 rounded-bl-none">
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
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about our tours to Turkey, Dubai, Greece or Egypt..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || input.trim() === ''}
            className={`px-4 py-2 rounded-lg font-medium ${
              isLoading || input.trim() === '' 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-brand-purple text-white hover:bg-purple-700'
            }`}
          >
            Send
          </button>
        </div>
        <div className="mt-2 text-xs text-gray-500 flex items-center">
          <span className="mr-1">Powered by</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#4285F4" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.1 12c0-.55-.04-1.09-.12-1.61h-9.67v3.05h5.52a4.71 4.71 0 0 1-2.04 3.09v2.58h3.31c1.94-1.78 3.05-4.4 3.05-7.11z"/>
            <path d="m12 22.93c2.76 0 5.08-.91 6.78-2.48l-3.31-2.58c-.92.62-2.1.98-3.47.98-2.66 0-4.92-1.8-5.73-4.22H2.76v2.66a10.21 10.21 0 0 0 9.24 5.63z" fill="#34A853"/>
            <path d="M6.27 14.63a6.21 6.21 0 0 1-.32-1.95c0-.68.12-1.33.32-1.95V8.07H2.76A10.2 10.2 0 0 0 1.8 12c0 1.35.25 2.69.76 3.93l3.71-2.3z" fill="#FBBC05"/>
            <path d="M12 5.42c1.5 0 2.85.51 3.91 1.52l2.94-2.94C16.97 2.33 14.65 1.3 12 1.3a10.2 10.2 0 0 0-9.24 5.77l3.51 2.73c.81-2.42 3.07-4.38 5.73-4.38z" fill="#EA4335"/>
          </svg>
          <span className="ml-1">Gemini</span>
        </div>
      </form>
    </div>
  );
} 