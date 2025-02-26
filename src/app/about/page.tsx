import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getAssetPath } from '@/utils/paths';

export const metadata: Metadata = {
  title: 'About Us | Saladino Travel',
  description: 'Learn about Saladino Travel, our story, our values, and the dedicated team behind our premium tours in Turkey and Dubai.',
};

export default function AboutPage() {
  // Mock team members data
  const teamMembers = [
    {
      name: 'Selahaddin Tezel',
      position: 'Founder & CEO',
      bio: 'With over 20 years of experience in tourism, Selahaddin founded Saladino Travel with a vision to provide authentic experiences that connect travelers with the true essence of Turkey, Dubai, Greece, and Egypt.',
      image: '/images/team/selahaddin-tezel.jpg',
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
        <svg className="w-10 h-10 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Sustainable Tourism',
      description: 'We are committed to minimizing our environmental impact and supporting local communities through responsible tourism practices.',
      icon: (
        <svg className="w-10 h-10 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Personalized Service',
      description: 'No two travelers are alike. We tailor our services to match your interests, preferences, and travel style for a truly personalized journey.',
      icon: (
        <svg className="w-10 h-10 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Cultural Respect',
      description: 'We approach every destination with respect for local customs, traditions, and ways of life, promoting cross-cultural understanding.',
      icon: (
        <svg className="w-10 h-10 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900 flex items-center">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-r from-[#9e1687]/80 to-[#14b8a6]/80">
          <Image 
            src={getAssetPath("/images/tours/turkish-delight.jpg")} 
            alt="About Saladino Travel" 
            fill 
            className="object-cover object-center mix-blend-overlay"
            priority
          />
        </div>
        
        <div className="container-custom relative z-20 max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md leading-tight">
                Our <span className="bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-transparent bg-clip-text">Story</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                From our humble beginnings to becoming a premier travel agency, discover the passion and commitment that drives Saladino Travel.
              </p>
              <div className="flex space-x-4">
                <Link href="/contact" className="btn-primary px-6 py-3 rounded-md bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white font-semibold hover:from-[#8a1375] hover:to-[#109e8e] transition duration-300 inline-flex items-center shadow-lg">
                  Contact Us
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/tours" className="btn-secondary px-6 py-3 rounded-md border-2 border-white/70 text-white font-semibold hover:bg-white/10 transition duration-300 inline-flex items-center">
                  View Tours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#9e1687]/10 to-[#14b8a6]/10">
              <div className="aspect-w-4 aspect-h-3 relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
                <Image 
                  src={getAssetPath("/images/about/our-story.jpg")} 
                  alt="Saladino Travel team" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#9e1687] to-[#14b8a6] rounded-full opacity-30 blur-lg"></div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-transparent bg-clip-text">Bringing the Magic</span> of Turkey & Dubai to Life Since 2010
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Saladino Travel was born from a deep love for the rich cultures, stunning landscapes, and historic wonders of Turkey and Dubai. Our founder, Marco Saladino, first visited Istanbul as a backpacker in 2005 and was instantly captivated by the city where East meets West.
                </p>
                <p>
                  After spending years exploring every corner of these magnificent regions, Selahaddin assembled a team of passionate locals who shared his vision: to create immersive travel experiences that go beyond the typical tourist routes and connect travelers with the authentic heart of these extraordinary destinations.
                </p>
                <p>
                  Today, Saladino Travel has grown into a premier travel agency, yet we remain true to our original mission. Our hand-crafted tours combine must-see highlights with hidden gems, creating journeys that transform mere tourists into true travelers who connect deeply with the places they visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#14b8a6] font-semibold tracking-wider uppercase">Our Principles</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              <span className="bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-transparent bg-clip-text">Our Values</span> Guide Everything We Do
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every tour, every interaction, and every decision is shaped by our commitment to these core values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#14b8a6]/20 transition duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9e1687]/10 to-[#14b8a6]/10 rounded-full flex items-center justify-center mb-6 group-hover:from-[#9e1687]/20 group-hover:to-[#14b8a6]/20 transition duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#14b8a6] font-semibold tracking-wider uppercase">Meet Our Experts</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              <span className="bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-transparent bg-clip-text">The Team</span> Behind Your Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our diverse team of travel experts brings together local knowledge, professional expertise, and a shared passion for creating unforgettable experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300 border border-gray-100">
                <div className="relative h-72 bg-gradient-to-r from-[#9e1687]/10 to-[#14b8a6]/10">
                  <Image 
                    src={getAssetPath(member.image)} 
                    alt={member.name} 
                    fill 
                    className="object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#14b8a6] font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#9e1687]/5 to-[#14b8a6]/5"></div>
        <div className="container-custom max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#14b8a6] font-semibold tracking-wider uppercase">Happy Travelers</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              <span className="bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-transparent bg-clip-text">Testimonials</span> From Our Clients
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Hear what travelers have to say about their experiences with Saladino Travel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Our tour of Istanbul with Saladino Travel was nothing short of magical. Our guide Ayşe was knowledgeable, friendly, and went above and beyond to make our experience special. We saw places we would never have found on our own."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-r from-[#9e1687]/10 to-[#14b8a6]/10">
                  <Image
                    src={getAssetPath("/images/testimonials/testimonial-1.jpg")}
                    alt="Sarah Johnson"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">New York, USA</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The Dubai Desert Safari was the highlight of our trip. The attention to detail was impressive, from the luxury transportation to the traditional dinner under the stars. Worth every penny for such a premium experience."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-r from-[#9e1687]/10 to-[#14b8a6]/10">
                  <Image
                    src={getAssetPath("/images/testimonials/testimonial-2.jpg")}
                    alt="David Chen"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">David Chen</h4>
                  <p className="text-sm text-gray-500">Singapore</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "As a solo female traveler, I was concerned about visiting Turkey alone. Saladino Travel made me feel safe and welcome throughout my journey. They customized the perfect itinerary that allowed me to experience both popular sites and off-the-beaten-path locations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-r from-[#9e1687]/10 to-[#14b8a6]/10">
                  <Image
                    src={getAssetPath("/images/testimonials/testimonial-3.jpg")}
                    alt="Emma Wallace"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Emma Wallace</h4>
                  <p className="text-sm text-gray-500">London, UK</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center text-[#9e1687] font-semibold hover:text-[#14b8a6] transition duration-300">
              Share your experience with us
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white">
        <div className="container-custom max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Magic with Us?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Let's create memories that will last a lifetime. Start planning your journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/tours" className="btn-white px-8 py-4 rounded-md bg-white text-[#9e1687] font-semibold hover:bg-opacity-90 transition duration-300 inline-flex items-center justify-center shadow-lg">
                Browse Our Tours
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-outline px-8 py-4 rounded-md border-2 border-white text-white font-semibold hover:bg-white hover:bg-opacity-10 transition duration-300 inline-flex items-center justify-center">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 