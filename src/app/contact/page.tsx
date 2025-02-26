import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getAssetPath } from '@/utils/paths';

export const metadata: Metadata = {
  title: 'Contact Us | Saladino Travel',
  description: 'Get in touch with our travel experts for inquiries about our premium tour packages or to plan your custom adventure in Turkey and Dubai.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9e1687]/80 to-[#14b8a6]/70 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src={getAssetPath("/images/contact/contact-hero.jpg")} 
            alt="Contact Saladino Travel" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20 text-white text-center">
          <div className="relative">
            <div className="absolute -left-24 -top-24 w-48 h-48 bg-[#9e1687]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-[#14b8a6]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 drop-shadow-lg">Contact Us</h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto text-white/90 drop-shadow-md">
            Our bilingual travel experts are here to help you plan your perfect journey through Turkey and Dubai
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9e1687]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#14b8a6]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="container-custom max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-10">
                <div className="inline-block px-3 py-1 bg-[#9e1687]/10 text-[#9e1687] rounded-full text-sm font-medium mb-4">GET IN TOUCH</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-600 max-w-2xl">
                  Have questions about our tours or need help planning your trip? Fill out the form below and one of our travel experts will respond within 24 hours.
                </p>
              </div>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      name="first-name" 
                      placeholder="Enter your first name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9e1687] focus:border-[#9e1687] shadow-sm transition-all" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="last-name" className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      name="last-name" 
                      placeholder="Enter your last name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9e1687] focus:border-[#9e1687] shadow-sm transition-all" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Enter your email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9e1687] focus:border-[#9e1687] shadow-sm transition-all" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="Enter your phone number" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9e1687] focus:border-[#9e1687] shadow-sm transition-all"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9e1687] focus:border-[#9e1687] shadow-sm transition-all" 
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="booking-inquiry">Booking Inquiry</option>
                      <option value="custom-tour">Custom Tour Request</option>
                      <option value="existing-booking">Existing Booking</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      placeholder="How can we help you?" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9e1687] focus:border-[#9e1687] shadow-sm transition-all" 
                      required
                    ></textarea>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        name="privacy" 
                        className="mt-1 mr-3 h-5 w-5 rounded text-[#9e1687] focus:ring-[#9e1687]" 
                        required
                      />
                      <label htmlFor="privacy" className="text-gray-700">
                        I agree to the <Link href="/privacy" className="text-[#9e1687] hover:text-[#14b8a6] transition-colors">Privacy Policy</Link> and consent to having my data processed to respond to my inquiry
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <button type="submit" className="px-8 py-4 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#9e1687]/20 transition-all transform hover:-translate-y-1">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-8 mb-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-transparent bg-clip-text">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#9e1687]/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-[#9e1687]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a href="mailto:info@saladinotravel.com" className="text-gray-900 hover:text-[#9e1687] transition-colors">
                        info@saladinotravel.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#9e1687]/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-[#9e1687]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <a href="tel:+902123456789" className="text-gray-900 hover:text-[#9e1687] transition-colors">
                        +90 212 345 6789
                      </a>
                      <p className="text-sm text-gray-500 mt-2">WhatsApp available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#9e1687]/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-[#9e1687]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Address</p>
                      <p className="text-gray-900">
                        Sultanahmet District<br />
                        Istanbul, Turkey
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#9e1687]/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-[#9e1687]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Business Hours</p>
                      <p className="text-gray-900">
                        Monday-Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#9e1687] to-[#14b8a6] rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-white/90 mb-6">
                  Chat with our travel concierge for instant answers to your questions about our tours and services.
                </p>
                <Link 
                  href="/ai-assistant" 
                  className="inline-flex items-center px-6 py-3 bg-white text-[#9e1687] rounded-lg font-medium hover:bg-white/90 transition-all shadow-md"
                >
                  Chat Now
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container-custom max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#9e1687]/10 text-[#9e1687] rounded-full text-sm font-medium mb-4">OUR LOCATION</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the historic Sultanahmet district, our office is easily accessible from most major hotels in Istanbul.
            </p>
          </div>
          
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
            {/* This would be replaced with an actual map component */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Map Loading...</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#9e1687]/10 text-[#9e1687] rounded-full text-sm font-medium mb-4">COMMON QUESTIONS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our tours and booking process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-gray-900">How do I book a tour?</h3>
              <p className="text-gray-600">
                You can book directly through our website by selecting your preferred tour and following the booking steps, or contact us via this form for assistance with your reservation.
              </p>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-gray-900">What languages do your guides speak?</h3>
              <p className="text-gray-600">
                All our guides are fluent in Spanish and English. We also have guides available who speak Portuguese, French, and Italian upon request.
              </p>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-gray-900">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                We offer free cancellation up to 30 days before the tour start date. Cancellations between 15-30 days receive a 50% refund, and less than 15 days are non-refundable. We recommend travel insurance for all bookings.
              </p>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Are your tours suitable for families with children?</h3>
              <p className="text-gray-600">
                Yes, most of our tours are family-friendly. We can customize the pace and activities to accommodate children of different ages. Please mention the ages of children when booking so we can tailor the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white">
        <div className="container-custom max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="max-w-2xl mx-auto mb-10 text-white/90 text-lg">
            Explore our premium tour packages or contact us to create your custom adventure
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/tours" 
              className="px-8 py-4 bg-white text-[#9e1687] rounded-lg font-semibold shadow-lg hover:bg-white/90 transition-all transform hover:-translate-y-1"
            >
              Browse Tours
            </Link>
            <Link 
              href="/booking" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 