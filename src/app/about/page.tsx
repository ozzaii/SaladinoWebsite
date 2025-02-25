import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Saladino Travel',
  description: 'Learn about Saladino Travel, our story, our values, and the dedicated team behind our premium tours in Turkey and Dubai.',
};

export default function AboutPage() {
  // Mock team members data
  const teamMembers = [
    {
      name: 'Marco Saladino',
      position: 'Founder & CEO',
      bio: 'With over 20 years of experience in tourism, Marco founded Saladino Travel with a vision to provide authentic experiences that connect travelers with the true essence of Turkey and Dubai.',
      image: '/images/team/marco.jpg',
    },
    {
      name: 'Ayşe Yilmaz',
      position: 'Head Tour Guide',
      bio: 'Ayşe is a certified archaeologist and has been leading tours throughout Turkey for 15 years. Her deep knowledge of Turkish history and culture brings our tours to life.',
      image: '/images/team/ayse.jpg',
    },
    {
      name: 'Ahmed Al-Farsi',
      position: 'Dubai Operations Manager',
      bio: 'Ahmed oversees all our Dubai operations and ensures that every tour exceeds expectations. His attention to detail and commitment to excellence are unmatched.',
      image: '/images/team/ahmed.jpg',
    },
    {
      name: 'Isabella Rodriguez',
      position: 'Customer Experience Director',
      bio: 'Isabella ensures that every customer interaction is smooth and memorable. She speaks five languages and understands the needs of diverse international travelers.',
      image: '/images/team/isabella.jpg',
    },
  ];

  // Mock values data
  const ourValues = [
    {
      title: 'Authentic Experiences',
      description: 'We believe in creating genuine connections between travelers and local cultures, moving beyond typical tourist attractions.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Exceptional Service',
      description: 'Every detail of your journey is carefully planned and executed with the highest standard of service and personal attention.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      title: 'Sustainable Tourism',
      description: 'We\'re committed to responsible travel practices that respect and preserve local communities, environments, and cultural heritage.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'We embrace technology and new approaches to enhance travel experiences while maintaining the timeless elements that make travel special.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-700/50 z-10"></div>
        <div className="absolute inset-0 bg-gray-300"></div>
        {/* This would be replaced with an actual image */}
        {/* <Image 
          src="/images/about-hero.jpg"
          alt="About Saladino Travel" 
          fill 
          className="object-cover"
        /> */}
        
        <div className="container-custom relative z-20 text-white text-center">
          <h1 className="mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Creating unforgettable journeys through the heart of Turkey and Dubai since 2005
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">The Saladino Travel Journey</h2>
              <div className="space-y-6">
                <p>
                  Saladino Travel was founded in 2005 by Marco Saladino, an Italian traveler who fell in love with Turkey during his first visit and decided to make it his home. What began as a small operation offering guided tours in Istanbul has grown into a premier travel agency specializing in curated experiences throughout Turkey and Dubai.
                </p>
                <p>
                  Our journey over the past 18 years has been defined by our passion for creating authentic connections between travelers and the rich cultural tapestries of these extraordinary destinations. We've guided thousands of visitors from around the world, helping them discover not just the iconic landmarks, but the hidden gems and local experiences that make a journey truly memorable.
                </p>
                <p>
                  Today, we pride ourselves on combining traditional hospitality with modern innovation. Our team of experienced local guides, travel specialists, and customer service experts work together to craft journeys that balance comfort, adventure, and authentic cultural immersion.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
              {/* This would be replaced with an actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Company History Image
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {ourValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm flex">
                <div className="mr-6 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-700">{value.title}</h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What Makes Us Different Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">What Makes Us Different</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Our approach to travel is as unique as your journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl font-bold text-white mb-4">01</div>
              <h3 className="text-xl font-bold mb-4 text-white">Local Expertise</h3>
              <p className="text-white/80">
                Our guides are locals who share not just their knowledge, but their personal connections to the places you'll visit, providing insights that go beyond any guidebook.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl font-bold text-white mb-4">02</div>
              <h3 className="text-xl font-bold mb-4 text-white">Tailored Experiences</h3>
              <p className="text-white/80">
                We recognize that each traveler is unique. Our tours can be customized to match your interests, pace, and travel style, ensuring your journey is exactly what you want it to be.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl font-bold text-white mb-4">03</div>
              <h3 className="text-xl font-bold mb-4 text-white">Bilingual Support</h3>
              <p className="text-white/80">
                Our team speaks both English and Spanish fluently, allowing us to serve a diverse clientele and ensure clear communication throughout your journey.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl font-bold text-white mb-4">04</div>
              <h3 className="text-xl font-bold mb-4 text-white">AI-Enhanced Planning</h3>
              <p className="text-white/80">
                Our innovative AI travel assistant helps personalize your itinerary based on your preferences, making trip planning more efficient while maintaining the human touch.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl font-bold text-white mb-4">05</div>
              <h3 className="text-xl font-bold mb-4 text-white">Exclusive Access</h3>
              <p className="text-white/80">
                Years of operating in the region have given us access to experiences, locations, and people that aren't available through typical travel agencies.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl font-bold text-white mb-4">06</div>
              <h3 className="text-xl font-bold mb-4 text-white">24/7 Support</h3>
              <p className="text-white/80">
                Travel doesn't follow a 9-to-5 schedule, and neither do we. Our team is available around the clock to assist with any needs that arise during your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The passionate travel experts behind your extraordinary journeys
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="h-80 bg-gray-200 relative">
                  {/* This would be replaced with an actual image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    {member.name} Photo
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Real experiences from our valued customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex text-primary-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-600 mb-6">
                "Our tour with Saladino Travel exceeded all expectations. Our guide was incredibly knowledgeable about Turkish history and took us to places we never would have discovered on our own. The accommodations were perfect and the entire trip was seamless."
              </p>
              <div>
                <p className="font-bold">Carlos & Maria Rodriguez</p>
                <p className="text-gray-500">Madrid, Spain</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex text-primary-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-600 mb-6">
                "I was hesitant about booking a combined Turkey-Dubai tour, but Saladino Travel made the transition between countries effortless. The contrast between the two cultures was fascinating, and having Spanish-speaking guides made the experience even more enjoyable for our family."
              </p>
              <div>
                <p className="font-bold">Ana Gómez</p>
                <p className="text-gray-500">Buenos Aires, Argentina</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex text-primary-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-600 mb-6">
                "As a solo female traveler, safety was my primary concern. The team at Saladino Travel made me feel secure while still providing an adventurous experience. The hot air balloon ride over Cappadocia arranged by them was the highlight of my trip!"
              </p>
              <div>
                <p className="font-bold">Lucía Fernández</p>
                <p className="text-gray-500">Mexico City, Mexico</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We collaborate with premium hotels, airlines, and local experiences to deliver exceptional journeys
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* These would be replaced with actual partner logos */}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="h-24 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                Partner Logo {index + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-white">Ready to Experience the Magic of Turkey and Dubai?</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Let our team of travel experts craft the perfect journey for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Explore Our Tours
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white/20">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 