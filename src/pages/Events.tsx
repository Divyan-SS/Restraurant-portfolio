import React, { useState } from 'react';
import { Calendar, Users, Wine, Heart, Star, Send } from 'lucide-react';

const Events: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours to discuss your event.');
    setFormData({
      name: '',
      email: '',
      date: '',
      message: ''
    });
  };

  const eventTypes = [
    {
      icon: Heart,
      title: 'Anniversary Celebrations',
      description: 'Create unforgettable memories with our intimate anniversary packages, featuring personalized menus and romantic ambiance.',
      features: ['Private table setup', 'Customized menu', 'Complimentary champagne', 'Personal service']
    },
    {
      icon: Wine,
      title: 'Wine Tasting Events',
      description: 'Discover exceptional wines paired with carefully selected dishes in our exclusive tasting experiences.',
      features: ['Expert sommelier guidance', 'Premium wine selection', 'Paired appetizers', 'Educational experience']
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Impress clients and colleagues with sophisticated business dinners in our elegant private dining spaces.',
      features: ['Private dining room', 'Business-friendly atmosphere', 'Customized presentations', 'Flexible timing']
    },
    {
      icon: Star,
      title: 'Special Celebrations',
      description: 'From birthdays to milestone achievements, we make every celebration extraordinary with personalized service.',
      features: ['Custom decorations', 'Personalized menu', 'Special arrangements', 'Memorable experience']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 text-gold-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Events & <span className="text-gold-500">Private Dining</span>
          </h1>
          <p className="text-xl font-inter max-w-2xl mx-auto">
            Create unforgettable moments in our elegant private spaces
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-black mb-4">
              Exceptional Events
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-gray-600 font-inter text-lg max-w-2xl mx-auto">
              Whether it's an intimate dinner for two or a corporate gathering, 
              we create personalized experiences that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up">
                <div className="flex items-center mb-6">
                  <div className="bg-gold-500 p-3 rounded-full mr-4">
                    <event.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold text-black">
                    {event.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-inter leading-relaxed mb-6">
                  {event.description}
                </p>
                <ul className="space-y-2">
                  {event.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 font-inter">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Dining Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-playfair font-bold text-black mb-6">
                Private Dining <span className="text-gold-500">Excellence</span>
              </h2>
              <p className="text-gray-600 font-inter text-lg mb-6 leading-relaxed">
                Our private dining rooms offer an intimate setting for your most 
                important occasions. Each space is designed with elegant furnishings, 
                ambient lighting, and personalized service that ensures your event 
                is truly memorable.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-gold-600 mb-2">12</div>
                  <div className="text-gray-600 font-inter text-sm">Maximum Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-gold-600 mb-2">3</div>
                  <div className="text-gray-600 font-inter text-sm">Private Rooms</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Dedicated service staff
                </div>
                <div className="flex items-center text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Customized menu options
                </div>
                <div className="flex items-center text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Audio-visual equipment available
                </div>
                <div className="flex items-center text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Flexible seating arrangements
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Private Dining Room"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Plan Your <span className="text-gold-500">Event</span>
            </h2>
            <p className="text-gray-300 font-inter text-lg">
              Tell us about your special occasion and we'll create a personalized experience for you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-inter font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors font-inter"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-inter font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors font-inter"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-inter font-medium text-gray-300 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors font-inter"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-inter font-medium text-gray-300 mb-2">
                Event Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors font-inter resize-none"
                placeholder="Please describe your event, number of guests, special requirements, and any other details..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-gold-500 text-black font-inter font-medium hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 group"
              >
                Send Inquiry
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Events;