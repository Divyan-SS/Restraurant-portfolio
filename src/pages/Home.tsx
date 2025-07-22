import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Home: React.FC = () => {
  const testimonials = [
    {
      text: "Luxury redefined. Worth every moment.",
      author: "Sarah Johnson",
      role: "Food Critic"
    },
    {
      text: "Perfect anniversary spot.",
      author: "Michael Chen",
      role: "Regular Guest"
    },
    {
      text: "Chef's creations are divine.",
      author: "Elena Rodriguez",
      role: "Food Enthusiast"
    }
  ];

  const stats = [
    { icon: Star, label: "Michelin Recognition", value: "5 Stars" },
    { icon: Users, label: "Happy Guests", value: "10,000+" },
    { icon: Award, label: "Awards Won", value: "25+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Welcome to <span className="text-gold-500">Le Maison Royale</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter mb-12 font-light">
            Where Taste Meets Elegance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/reservations"
              className="inline-flex items-center px-8 py-4 bg-gold-500 text-black font-inter font-medium rounded-none hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 group"
            >
              Reserve a Table
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-inter font-medium rounded-none hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 group"
            >
              View Menu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-gold-500" />
                </div>
                <div className="text-4xl font-playfair font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-playfair font-bold text-black mb-6">
                A Legacy of <span className="text-gold-500">Excellence</span>
              </h2>
              <p className="text-gray-600 font-inter text-lg mb-6 leading-relaxed">
                Le Maison Royale is a fine-dining destination founded in 2005, 
                known for elegance, service, and world-class cuisine. Under the 
                leadership of Chef Arvind Mathur, we create unforgettable dining 
                experiences.
              </p>
              <p className="text-gray-600 font-inter text-lg mb-8 leading-relaxed">
                We believe every dish is a memory in the making.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border-2 border-gold-500 text-gold-600 font-inter font-medium hover:bg-gold-500 hover:text-white transition-all duration-300 group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Restaurant Interior"
                className="w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-black mb-4">
              What Our Guests Say
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="bg-white p-8 shadow-lg h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 font-inter text-lg italic mb-6">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                  <div>
                    <cite className="text-black font-playfair font-semibold text-lg">
                      {testimonial.author}
                    </cite>
                    <p className="text-gray-500 font-inter text-sm mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;