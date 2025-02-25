import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Saladino Travel',
  description: 'Get in touch with our travel experts for inquiries about our tour packages or to plan your custom adventure in Turkey, Dubai, Greece, and Egypt.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-700/50 z-10"></div>
        <div className="absolute inset-0 bg-gray-300"></div>
        {/* This would be replaced with an actual image */}
        {/* <Image 
          src="/images/contact-hero.jpg"
          alt="Contact Saladino Travel" 
          fill 
          className="object-cover"
        /> */}
        
        <div className="container-custom relative z-20 text-white text-center">
          <h1 className="mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our bilingual travel experts are here to help you plan your perfect journey through Turkey, Dubai, Greece, and Egypt
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-8">Get in Touch</h2>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      name="first-name" 
                      placeholder="Enter your first name" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="last-name" className="block text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      name="last-name" 
                      placeholder="Enter your last name" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Enter your email" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="Enter your phone number" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
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
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      placeholder="How can we help you?" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                      required
                    ></textarea>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        name="privacy" 
                        className="mt-1 mr-3" 
                        required
                      />
                      <label htmlFor="privacy" className="text-gray-700">
                        I agree to the <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link> and consent to having my data processed to respond to my inquiry
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-primary-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold mb-6 text-primary-700">Contact Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="font-bold mb-2">Email:</p>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:booking@saladinotravel.com" className="text-primary-600 hover:underline">
                        booking@saladinotravel.com
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-bold mb-2">Phone Numbers:</p>
                    <div className="flex items-center mb-2">
                      <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+17864022050" className="hover:underline">
                        +1 786-402-2050
                      </a>
                    </div>
                    <div className="flex items-center ml-8">
                      <span className="text-sm text-gray-600">(US & Canada - WhatsApp)</span>
                    </div>
                    
                    <div className="flex items-center mt-3 mb-2">
                      <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+908501234567" className="hover:underline">
                        +90 (850) 123-4567
                      </a>
                    </div>
                    <div className="flex items-center ml-8">
                      <span className="text-sm text-gray-600">(Turkey)</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-bold mb-2">Office Locations:</p>
                    <div className="mb-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-primary-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="font-medium">Istanbul Office</p>
                          <p className="text-gray-600">
                            Sahkulu Mah, Sahdegirmeni Sok, 12/2<br />
                            Beyoglu, Istanbul 34420<br />
                            Turkey
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-primary-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="font-medium">Cappadocia Office</p>
                          <p className="text-gray-600">
                            H. Ali Bey Cad., 22A<br />
                            Uchisar, Cappadocia<br />
                            Turkey
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-primary-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="font-medium">Florida Office</p>
                          <p className="text-gray-600">
                            2 S Biscayne Blvd<br />
                            Miami, FL 33131<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-primary-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="font-medium">California Office</p>
                          <p className="text-gray-600">
                            4041 MacArthur Blvd<br />
                            Newport Beach, CA 92660<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-bold mb-2">Working Hours:</p>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed<br />
                      <span className="text-sm">(Local time: GMT+3)</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-secondary-700">Need Immediate Assistance?</h3>
                <p className="text-gray-700 mb-6">
                  For urgent inquiries, please contact our customer support hotline:
                </p>
                
                <a href="tel:+15551234567" className="btn btn-secondary w-full mb-4">
                  Call Now
                </a>
                
                <p className="text-center text-sm text-gray-600">
                  Support available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Locations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visit our offices in Istanbul and Dubai
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card overflow-hidden">
              <div className="h-64 bg-gray-300 relative">
                {/* This would be replaced with an actual map */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Istanbul Office Map
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Istanbul Office</h3>
                <p className="text-gray-600 mb-4">
                  Our main office located in the heart of Istanbul's historic district, easily accessible by public transportation.
                </p>
                <a 
                  href="https://maps.google.com/?q=Istiklal+Street+Beyoglu+Istanbul+Turkey" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-600 hover:underline flex items-center"
                >
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="h-64 bg-gray-300 relative">
                {/* This would be replaced with an actual map */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Dubai Office Map
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dubai Office</h3>
                <p className="text-gray-600 mb-4">
                  Our Dubai branch is located in the modern Business Bay area, offering stunning views of the Burj Khalifa.
                </p>
                <a 
                  href="https://maps.google.com/?q=Sheikh+Zayed+Road+Business+Bay+Dubai+UAE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-600 hover:underline flex items-center"
                >
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">How quickly can I expect a response to my inquiry?</h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24 hours during our business days. For urgent matters, we recommend calling our customer support line for immediate assistance.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">Can I visit your office to discuss my travel plans?</h3>
                <p className="text-gray-600">
                  Yes, we welcome in-person meetings at either our Istanbul or Dubai offices. We recommend scheduling an appointment in advance to ensure that one of our travel consultants is available to assist you.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">Do you offer support in languages other than English?</h3>
                <p className="text-gray-600">
                  Yes, our team speaks multiple languages including English, Spanish, Turkish, and Arabic. Please let us know your preferred language when contacting us, and we'll do our best to accommodate your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Start Planning Your Journey?</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Browse our tour packages or inquire about a custom travel experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn bg-white text-secondary-600 hover:bg-gray-100">
              Explore Tours
            </Link>
            <Link href="/booking" className="btn border-2 border-white text-white hover:bg-white/20">
              Book Now
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 