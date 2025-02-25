import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

// Tour data (simplified version for the booking page)
const tours = {
  'turkiye-imperdible': {
    id: 'turkiye-imperdible',
    title: 'Türkiye Imperdible',
    duration: '10 nights',
    price: 1499,
  },
  'estambul-capadocia': {
    id: 'estambul-capadocia',
    title: 'Estambul y Capadocia',
    duration: '6 nights',
    price: 899,
  },
  'turkiye-dubai': {
    id: 'turkiye-dubai',
    title: 'Türkiye y Dubái',
    duration: '11 nights',
    price: 1899,
  },
  'turkiye-grecia': {
    id: 'turkiye-grecia',
    title: 'Türkiye y Grecia con Crucero',
    duration: '11 nights',
    price: 2099,
  },
  'turkiye-express': {
    id: 'turkiye-express',
    title: 'Türkiye Express',
    duration: '6 nights',
    price: 849,
  },
  'estrellas-oriente': {
    id: 'estrellas-oriente',
    title: 'Las Estrellas del Oriente',
    duration: '18 nights',
    price: 3499,
  },
};

export const metadata: Metadata = {
  title: 'Book Your Tour | Saladino Travel',
  description: 'Secure your spot on one of our premium Spanish-speaking guided tours in Turkey, Dubai, Greece, and Egypt. Easy booking process with flexible payment options.',
};

export default function BookingPage() {
  // For static export, we'll show all tours instead of using searchParams
  // Users can select the tour on the page itself
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-700/50 z-10"></div>
        <div className="absolute inset-0 bg-gray-300"></div>
        {/* This would be replaced with an actual image */}
        {/* <Image 
          src="/images/booking-hero.jpg"
          alt="Booking your travel experience" 
          fill 
          className="object-cover"
        /> */}
        
        <div className="container-custom relative z-20 text-white text-center">
          <h1 className="mb-6">Book Your Tour</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Secure your spot on one of our premium Spanish-speaking guided tours and embark on an unforgettable journey through Turkey, Dubai, Greece, and Egypt
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-8">Booking Information</h2>
              
              <form className="space-y-8">
                {/* Tour Selection */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-6">1. Select Your Tour</h3>
                  
                  <div className="space-y-4">
                    {Object.values(tours).map((tour) => (
                      <div key={tour.id} className="relative">
                        <input 
                          type="radio" 
                          id={tour.id} 
                          name="tour" 
                          value={tour.id} 
                          className="hidden peer" 
                          defaultChecked={tour.id === tours['turkiye-imperdible']?.id}
                          required
                        />
                        <label 
                          htmlFor={tour.id} 
                          className="block cursor-pointer p-4 border rounded-lg transition-colors peer-checked:border-primary-500 peer-checked:bg-primary-50"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="block font-bold text-lg">{tour.title}</span>
                              <span className="block text-gray-500">{tour.duration}</span>
                            </div>
                            <div className="text-xl font-bold text-primary-600">
                              ${tour.price}
                            </div>
                          </div>
                        </label>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-primary-500 peer-checked:bg-primary-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    ))}
                    
                    <Link href="/tours" className="text-primary-600 hover:text-primary-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Browse all tours
                    </Link>
                  </div>
                </div>
                
                {/* Travel Information */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-6">2. Travel Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="travel-date" className="block text-gray-700 mb-2">Preferred Travel Date</label>
                      <input 
                        type="date" 
                        id="travel-date" 
                        name="travel-date" 
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="travelers" className="block text-gray-700 mb-2">Number of Travelers</label>
                      <select 
                        id="travelers" 
                        name="travelers" 
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
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
                      <label htmlFor="room-type" className="block text-gray-700 mb-2">Room Type</label>
                      <select 
                        id="room-type" 
                        name="room-type" 
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
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
                      <label htmlFor="airport-transfer" className="block text-gray-700 mb-2">Airport Transfer</label>
                      <select 
                        id="airport-transfer" 
                        name="airport-transfer" 
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
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
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-6">3. Personal Information</h3>
                  
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
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="special-requests" className="block text-gray-700 mb-2">Special Requests or Requirements</label>
                      <textarea 
                        id="special-requests" 
                        name="special-requests" 
                        rows={4} 
                        placeholder="Please let us know if you have any special requirements or requests" 
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                {/* Terms and Conditions */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-6">4. Terms and Conditions</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        name="terms" 
                        className="mt-1 mr-3" 
                        required
                      />
                      <label htmlFor="terms" className="text-gray-700">
                        I have read and agree to the <Link href="/terms" className="text-primary-600 hover:underline">Terms and Conditions</Link>, <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>, and <Link href="/cancellation" className="text-primary-600 hover:underline">Cancellation Policy</Link>
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="newsletter" 
                        name="newsletter" 
                        className="mt-1 mr-3"
                      />
                      <label htmlFor="newsletter" className="text-gray-700">
                        I would like to receive newsletters and promotional emails from Saladino Travel
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Proceed to Payment
                  </button>
                  <p className="text-gray-500 mt-4">
                    You will be redirected to our secure payment gateway
                  </p>
                </div>
              </form>
            </div>
            
            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="card overflow-hidden">
                  <div className="bg-primary-600 text-white p-6">
                    <h3 className="text-xl font-bold mb-1">Booking Summary</h3>
                    <p className="text-white/80">Review your booking details</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-2">Super Turkey Tour</h4>
                      <p className="text-gray-600">9 days</p>
                    </div>
                    
                    <div className="border-t border-b py-4 mb-6">
                      <div className="flex justify-between mb-3">
                        <span className="text-gray-600">Tour Price</span>
                        <span className="font-bold">$1,299 <span className="text-sm font-normal">/ person</span></span>
                      </div>
                      <div className="flex justify-between mb-3">
                        <span className="text-gray-600">Travelers</span>
                        <span className="font-bold">x 1</span>
                      </div>
                      <div className="flex justify-between text-lg">
                        <span className="font-bold">Total</span>
                        <span className="font-bold text-primary-600">$1,299</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold mb-2">What Happens Next?</h4>
                      <div className="flex items-start">
                        <div className="bg-primary-100 h-6 w-6 rounded-full text-primary-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <p className="text-gray-600">Complete the booking form and proceed to payment</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-100 h-6 w-6 rounded-full text-primary-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <p className="text-gray-600">Receive a confirmation email with your booking details</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-100 h-6 w-6 rounded-full text-primary-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <p className="text-gray-600">Our team will contact you to finalize your booking</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-bold mb-4">Need Assistance?</h4>
                  <p className="text-gray-600 mb-4">
                    If you have any questions or need help with your booking, please don't hesitate to contact us.
                  </p>
                  <div className="flex items-center mb-3">
                    <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>bookings@saladinotravel.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Information */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Booking Information</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about booking your tour with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-primary-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Payment</h3>
              <p className="text-gray-600">
                We use a secure payment gateway to ensure that your financial information is always protected. We accept all major credit cards, PayPal, and bank transfers.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="text-primary-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Booking</h3>
              <p className="text-gray-600">
                We understand that plans can change. That's why we offer flexible booking options with free date changes up to 30 days before departure and a transparent cancellation policy.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="text-primary-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated customer support team is available 24/7 to assist you with any questions or concerns you might have before, during, or after your tour.
              </p>
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
              Find answers to common questions about booking with us.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">How do I confirm my booking?</h3>
                <p className="text-gray-600">
                  After completing the booking form and making the deposit payment, you will receive an email confirmation with your booking details. Our team will then contact you to finalize your booking and answer any questions you may have.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">What is the payment process?</h3>
                <p className="text-gray-600">
                  We require a 25% deposit to secure your booking, with the remaining balance due 60 days before your tour start date. For bookings made less than 60 days before departure, full payment is required at the time of booking.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">What is your cancellation policy?</h3>
                <p className="text-gray-600">
                  Our standard cancellation policy provides a full refund (minus processing fees) for cancellations made 90 days or more before the tour start date. Cancellations made 60-89 days prior receive a 75% refund, 30-59 days prior receive a 50% refund, and cancellations less than 30 days before departure are non-refundable.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-700">Can I customize my tour?</h3>
                <p className="text-gray-600">
                  Yes, we offer customization options for our tours. Please contact us directly if you would like to add extra days, change accommodations, or include additional activities in your itinerary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 