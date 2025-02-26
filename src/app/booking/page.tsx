import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getAssetPath } from '@/utils/paths';

// Tour data (simplified version for the booking page)
const tours = {
  'super-turkey': {
    id: 'super-turkey',
    title: 'Super Turkey Tour',
    subtitle: 'La experiencia Turca completa',
    duration: '9 days',
    price: 1499,
  },
  'istanbul-cappadocia': {
    id: 'istanbul-cappadocia',
    title: 'Istanbul-Cappadocia Tour',
    subtitle: 'Lo esencial de Turquía',
    duration: '6 days',
    price: 899,
  },
  'turkey-dubai': {
    id: 'turkey-dubai',
    title: 'Turkey-Dubai Combined Tour',
    subtitle: 'De lo ancestral a lo ultramoderno',
    duration: '11 days',
    price: 1899,
  },
};

export const metadata: Metadata = {
  title: 'Book Your Tour | Saladino Travel',
  description: 'Secure your spot on one of our premium Spanish-speaking guided tours in Turkey and Dubai. Easy booking process with flexible payment options.',
};

export default function BookingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9e1687]/80 to-[#14b8a6]/70 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src={getAssetPath("/images/booking/booking-hero.jpg")} 
            alt="Booking your travel experience" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20 text-white text-center">
          <div className="relative">
            <div className="absolute -left-24 -top-24 w-48 h-48 bg-[#9e1687]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-[#14b8a6]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 drop-shadow-lg">Book Your Tour</h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto text-white/90 drop-shadow-md">
            Secure your spot on one of our premium Spanish-speaking guided tours and embark on an unforgettable journey through Turkey and Dubai
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9e1687]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#14b8a6]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="container-custom max-w-screen-xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-10">
                <div className="inline-block px-3 py-1 bg-[#9e1687]/10 text-[#9e1687] rounded-full text-sm font-medium mb-4">BOOK NOW</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Booking Information</h2>
                <p className="text-gray-600 max-w-2xl">
                  Complete the form below to book your premium tour experience. Our team will review your information and contact you to finalize the details.
                </p>
              </div>
              
              <form className="space-y-10">
                {/* Tour Selection */}
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#9e1687] text-white mr-3 text-sm">1</span>
                    Select Your Tour
                  </h3>
                  
                  <div className="space-y-4">
                    {Object.values(tours).map((tour) => (
                      <div key={tour.id} className="relative">
                        <input 
                          type="radio" 
                          id={tour.id} 
                          name="tour" 
                          value={tour.id} 
                          className="hidden peer" 
                          defaultChecked={tour.id === 'super-turkey'}
                          required
                        />
                        <label 
                          htmlFor={tour.id} 
                          className="block cursor-pointer p-4 border border-gray-200 rounded-lg transition-all peer-checked:border-[#9e1687] peer-checked:bg-[#9e1687]/5 hover:border-[#9e1687]/30"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="block font-bold text-lg">{tour.title}</span>
                              <span className="block text-gray-500">{tour.subtitle} | {tour.duration}</span>
                            </div>
                            <div className="text-xl font-bold bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-transparent bg-clip-text">
                              ${tour.price}
                            </div>
                          </div>
                        </label>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-[#9e1687] peer-checked:bg-[#9e1687] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    ))}
                    
                    <Link href="/tours" className="inline-flex items-center text-[#9e1687] hover:text-[#14b8a6] transition-colors mt-4">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Browse all tours
                    </Link>
                  </div>
                </div>
                
                {/* Travel Information */}
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#9e1687] text-white mr-3 text-sm">2</span>
                    Travel Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="travel-date" className="block text-gray-700 font-medium mb-2">Preferred Travel Date</label>
                      <input 
                        type="date" 
                        id="travel-date" 
                        name="travel-date" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9e1687] focus:border-[#9e1687] shadow-sm transition-all" 
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="travelers" className="block text-gray-700 font-medium mb-2">Number of Travelers</label>
                      <select 
                        id="travelers" 
                        name="travelers" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9e1687] focus:border-[#9e1687] shadow-sm transition-all" 
                        required
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="room-type" className="block text-gray-700 font-medium mb-2">Room Type</label>
                      <select 
                        id="room-type" 
                        name="room-type" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9e1687] focus:border-[#9e1687] shadow-sm transition-all" 
                        required
                      >
                        <option value="">Select</option>
                        <option value="single">Single Room</option>
                        <option value="double">Double Room</option>
                        <option value="twin">Twin Room</option>
                        <option value="triple">Triple Room</option>
                        <option value="family">Family Room</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="airport-transfer" className="block text-gray-700 font-medium mb-2">Airport Transfer</label>
                      <select 
                        id="airport-transfer" 
                        name="airport-transfer" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9e1687] focus:border-[#9e1687] shadow-sm transition-all" 
                        required
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes, I need airport transfer</option>
                        <option value="no">No, I'll arrange my own transportation</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Personal Information */}
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#9e1687] text-white mr-3 text-sm">3</span>
                    Personal Information
                  </h3>
                  
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
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="special-requests" className="block text-gray-700 font-medium mb-2">Special Requests or Requirements</label>
                      <textarea 
                        id="special-requests" 
                        name="special-requests" 
                        rows={4} 
                        placeholder="Please let us know if you have any special requirements or requests" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9e1687] focus:border-[#9e1687] shadow-sm transition-all"
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                {/* Terms and Conditions */}
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#9e1687] text-white mr-3 text-sm">4</span>
                    Terms and Conditions
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        name="terms" 
                        className="mt-1 mr-3 h-5 w-5 rounded text-[#9e1687] focus:ring-[#9e1687]" 
                        required
                      />
                      <label htmlFor="terms" className="text-gray-700">
                        I have read and agree to the <Link href="/terms" className="text-[#9e1687] hover:text-[#14b8a6] transition-colors">Terms and Conditions</Link>, <Link href="/privacy" className="text-[#9e1687] hover:text-[#14b8a6] transition-colors">Privacy Policy</Link>, and <Link href="/cancellation" className="text-[#9e1687] hover:text-[#14b8a6] transition-colors">Cancellation Policy</Link>
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="newsletter" 
                        name="newsletter" 
                        className="mt-1 mr-3 h-5 w-5 rounded text-[#9e1687] focus:ring-[#9e1687]"
                      />
                      <label htmlFor="newsletter" className="text-gray-700">
                        I would like to receive newsletters and promotional emails from Saladino Travel
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="text-center py-4">
                  <button type="submit" className="px-10 py-4 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#9e1687]/20 transition-all transform hover:-translate-y-1">
                    Proceed to Payment
                  </button>
                  <p className="text-gray-500 mt-4 flex items-center justify-center">
                    <svg className="h-5 w-5 text-[#14b8a6] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    You will be redirected to our secure payment gateway
                  </p>
                </div>
              </form>
            </div>
            
            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white p-6">
                    <h3 className="text-xl font-bold mb-1">Booking Summary</h3>
                    <p className="text-white/80">Review your booking details</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-bold text-lg bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-transparent bg-clip-text mb-1">Super Turkey Tour</h4>
                      <p className="text-gray-600">La experiencia Turca completa • 9 days</p>
                    </div>
                    
                    <div className="border-t border-b py-4 mb-6">
                      <div className="flex justify-between mb-3">
                        <span className="text-gray-600">Tour Price</span>
                        <span className="font-bold">$1,499 <span className="text-sm font-normal">/ person</span></span>
                      </div>
                      <div className="flex justify-between mb-3">
                        <span className="text-gray-600">Travelers</span>
                        <span className="font-bold">x 1</span>
                      </div>
                      <div className="flex justify-between text-lg">
                        <span className="font-bold">Total</span>
                        <span className="font-bold text-[#9e1687]">$1,499</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-bold mb-2">What Happens Next?</h4>
                      <div className="flex items-start">
                        <div className="bg-[#9e1687]/10 h-6 w-6 rounded-full text-[#9e1687] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <p className="text-gray-600">Complete the booking form and proceed to payment</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#9e1687]/10 h-6 w-6 rounded-full text-[#9e1687] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <p className="text-gray-600">Receive a confirmation email with your booking details</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#9e1687]/10 h-6 w-6 rounded-full text-[#9e1687] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <p className="text-gray-600">Our team will contact you to finalize your booking</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <h4 className="font-bold mb-4 text-gray-900">Need Assistance?</h4>
                  <p className="text-gray-600 mb-6">
                    If you have any questions or need help with your booking, please don't hesitate to contact us.
                  </p>
                  <div className="flex items-center mb-3">
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
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#9e1687]/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-[#9e1687]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a href="mailto:bookings@saladinotravel.com" className="text-gray-900 hover:text-[#9e1687] transition-colors">
                        bookings@saladinotravel.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] rounded-xl p-8 text-white shadow-lg">
                  <h4 className="font-bold mb-4">Get Instant Help</h4>
                  <p className="text-white/90 mb-6">
                    Chat with our travel concierge for immediate assistance with your booking.
                  </p>
                  <Link 
                    href="/ai-assistant" 
                    className="inline-flex items-center px-6 py-3 bg-white text-[#9e1687] rounded-lg font-medium hover:bg-white/90 transition-all shadow-md w-full justify-center"
                  >
                    Chat with Concierge
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Information */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container-custom max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#9e1687]/10 text-[#9e1687] rounded-full text-sm font-medium mb-4">HELPFUL INFORMATION</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Booking Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about booking your tour with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-[#9e1687] mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Payment Methods</h3>
              <p className="text-gray-600 mb-4">
                We accept all major credit cards, PayPal, and bank transfers. Your payment information is always secure with advanced encryption.
              </p>
              <Link href="/payment-info" className="text-[#9e1687] hover:text-[#14b8a6] transition-colors inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-[#14b8a6] mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Booking Requirements</h3>
              <p className="text-gray-600 mb-4">
                To secure your booking, we require a 30% deposit. The remaining balance is due 30 days before your tour start date.
              </p>
              <Link href="/booking-requirements" className="text-[#14b8a6] hover:text-[#9e1687] transition-colors inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-[#9e1687] mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cancellation Policy</h3>
              <p className="text-gray-600 mb-4">
                Free cancellation up to 30 days before departure. Cancellations 15-30 days before receive a 50% refund. Less than 15 days is non-refundable.
              </p>
              <Link href="/cancellation-policy" className="text-[#9e1687] hover:text-[#14b8a6] transition-colors inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
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
              Find answers to common questions about our booking process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-gray-900">How far in advance should I book my tour?</h3>
              <p className="text-gray-600">
                We recommend booking at least 3-4 months in advance, especially during peak season (May-September). This ensures availability for your preferred dates and accommodations.
              </p>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Can I customize my tour package?</h3>
              <p className="text-gray-600">
                Yes! We offer customization options for all our tours. After booking, our team will contact you to discuss your preferences and make adjustments to your itinerary.
              </p>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-gray-900">What if I need to change my travel dates after booking?</h3>
              <p className="text-gray-600">
                We understand plans change. You can modify your travel dates up to 45 days before departure at no additional cost, subject to availability.
              </p>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Do I need travel insurance?</h3>
              <p className="text-gray-600">
                While not mandatory, we strongly recommend travel insurance to protect your investment. We can recommend trusted providers or you can purchase your own policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white">
        <div className="container-custom max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Planning Your Perfect Trip?</h2>
          <p className="max-w-2xl mx-auto mb-10 text-white/90 text-lg">
            Our travel experts are here to help you create the perfect itinerary tailored to your interests, preferences, and budget
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-[#9e1687] rounded-lg font-semibold shadow-lg hover:bg-white/90 transition-all transform hover:-translate-y-1"
            >
              Contact Our Team
            </Link>
            <Link 
              href="/ai-assistant" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              Chat with Concierge
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 