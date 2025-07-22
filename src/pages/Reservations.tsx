import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Reservation submitted:', formData);
    alert('Thank you for your reservation! We will confirm your booking within 30 minutes.');
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '2'
    });
  };

  const timeSlots = [
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', 
    '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="h-16 w-16 text-gold-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Make a <span className="text-gold-500">Reservation</span>
          </h1>
          <p className="text-xl font-inter max-w-2xl mx-auto">
            Book your table for an unforgettable dining experience
          </p>
        </div>
      </section>

      {/* Reservation Form & Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Reservation Form */}
            <div className="animate-slide-up">
              <h2 className="text-4xl font-playfair font-bold text-black mb-8">
                Reserve Your Table
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 text-gray-900 rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors font-inter"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 text-gray-900 rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors font-inter"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-200 text-gray-900 rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors font-inter"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 text-gray-900 rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors font-inter"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 text-gray-900 rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors font-inter"
                  >
                    {guestOptions.map((num) => (
                      <option key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gold-500 text-black font-inter font-medium hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 group"
                >
                  Confirm Reservation
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-8 p-6 bg-gold-50 border border-gold-200 rounded-lg">
                <p className="text-gold-800 font-inter text-sm">
                  <strong>Please note:</strong> Reservations are confirmed within 30 minutes. 
                  For same-day bookings or parties larger than 8, please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-playfair font-bold text-black mb-8">
                Contact Details
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-500 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-black mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600 font-inter text-lg">
                      +91-9876543210
                    </p>
                    <p className="text-gray-500 font-inter text-sm mt-1">
                      Available daily 3:00 PM - 11:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-500 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-black mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600 font-inter text-lg">
                      reservations@lemaisonroyale.in
                    </p>
                    <p className="text-gray-500 font-inter text-sm mt-1">
                      We respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-500 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-black mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600 font-inter text-lg">
                      123 Luxury Street<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-500 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-black mb-2">
                      Hours
                    </h3>
                    <div className="text-gray-600 font-inter space-y-1">
                      <p>Monday - Thursday: 6:00 PM - 11:00 PM</p>
                      <p>Friday - Saturday: 6:00 PM - 12:00 AM</p>
                      <p>Sunday: 6:00 PM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-8 rounded-lg">
                <h3 className="font-playfair font-semibold text-2xl text-black mb-4">
                  Reservation Policy
                </h3>
                <ul className="space-y-3 text-gray-600 font-inter">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Reservations are held for 15 minutes past the scheduled time
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Cancellations must be made at least 2 hours in advance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Large parties (8+ guests) require a deposit
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Smart casual dress code is required
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;