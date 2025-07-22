import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-16 w-16 text-gold-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Contact <span className="text-gold-500">Us</span>
          </h1>
          <p className="text-xl font-inter max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with Le Maison Royale
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="animate-slide-up">
              <h2 className="text-4xl font-playfair font-bold text-black mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gold-500 p-4 rounded-full">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-2xl text-black mb-3">
                      Address
                    </h3>
                    <p className="text-gray-600 font-inter text-lg leading-relaxed">
                      123 Luxury Street<br />
                      Bandra West<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-gold-500 p-4 rounded-full">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-2xl text-black mb-3">
                      Phone
                    </h3>
                    <p className="text-gray-600 font-inter text-lg">
                      +91-9876543210
                    </p>
                    <p className="text-gray-500 font-inter text-sm mt-2">
                      Available daily 3:00 PM - 11:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-gold-500 p-4 rounded-full">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-2xl text-black mb-3">
                      Email
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 font-inter text-lg">
                        reservations@lemaisonroyale.in
                      </p>
                      <p className="text-gray-600 font-inter text-lg">
                        info@lemaisonroyale.in
                      </p>
                    </div>
                    <p className="text-gray-500 font-inter text-sm mt-2">
                      We respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-gold-500 p-4 rounded-full">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-2xl text-black mb-3">
                      Operating Hours
                    </h3>
                    <div className="space-y-2 text-gray-600 font-inter text-lg">
                      <div className="flex justify-between">
                        <span>Monday - Thursday</span>
                        <span>6:00 PM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday - Saturday</span>
                        <span>6:00 PM - 12:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>6:00 PM - 10:00 PM</span>
                      </div>
                    </div>
                    <p className="text-gray-500 font-inter text-sm mt-3">
                      Closed on major holidays
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-playfair font-semibold text-2xl text-black mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="bg-gold-500 p-4 rounded-full hover:bg-gold-400 transition-colors group"
                  >
                    <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="bg-gold-500 p-4 rounded-full hover:bg-gold-400 transition-colors group"
                  >
                    <Facebook className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                <p className="text-gray-500 font-inter text-sm mt-3">
                  @lemaisonroyale - Follow our culinary journey
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-playfair font-bold text-black mb-8">
                Find Us
              </h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.542225155157!2d72.8261149!3d19.0596000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91103ed9dc1%3A0x5b9b2e4e5c3c5e0e!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions & Parking */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-3xl font-playfair font-bold text-black mb-6">
                Directions
              </h3>
              <div className="space-y-4 text-gray-600 font-inter">
                <div>
                  <h4 className="font-semibold text-black mb-2">By Car</h4>
                  <p>
                    Located in the heart of Bandra West, easily accessible via 
                    Western Express Highway. Take the Bandra exit and follow signs 
                    to Linking Road.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">By Train</h4>
                  <p>
                    Bandra Railway Station (Western Line) - 10 minutes walk<br />
                    Khar Road Station - 15 minutes walk
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">By Metro</h4>
                  <p>
                    Bandra Kurla Complex Metro Station - 20 minutes by taxi
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <h3 className="text-3xl font-playfair font-bold text-black mb-6">
                Parking & Amenities
              </h3>
              <div className="space-y-4 text-gray-600 font-inter">
                <div>
                  <h4 className="font-semibold text-black mb-2">Parking</h4>
                  <ul className="space-y-1">
                    <li>• Complimentary valet parking available</li>
                    <li>• Private parking garage with 50 spaces</li>
                    <li>• Street parking available nearby</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Accessibility</h4>
                  <ul className="space-y-1">
                    <li>• Wheelchair accessible entrance</li>
                    <li>• Elevator access to all floors</li>
                    <li>• Accessible restrooms available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Additional Services</h4>
                  <ul className="space-y-1">
                    <li>• Coat check service</li>
                    <li>• Private dining rooms</li>
                    <li>• Event planning assistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;