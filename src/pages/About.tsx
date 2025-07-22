import React from 'react';
import { Crown, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            About <span className="text-gold-500">Le Maison Royale</span>
          </h1>
          <p className="text-xl font-inter max-w-2xl mx-auto">
            A journey of culinary excellence that began in 2005
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center mb-6">
                <Crown className="h-8 w-8 text-gold-500 mr-3" />
                <h2 className="text-4xl font-playfair font-bold text-black">
                  Our Story
                </h2>
              </div>
              <p className="text-gray-600 font-inter text-lg mb-6 leading-relaxed">
                Le Maison Royale is a fine-dining destination founded in 2005, 
                born from a passion for creating extraordinary culinary experiences. 
                What started as a dream to combine French elegance with global 
                flavors has evolved into one of the most prestigious dining 
                establishments in the city.
              </p>
              <p className="text-gray-600 font-inter text-lg mb-6 leading-relaxed">
                Known for our unwavering commitment to elegance, exceptional service, 
                and world-class cuisine, we have consistently set the standard for 
                fine dining. Every detail, from our carefully curated ingredients 
                to our impeccable presentation, reflects our dedication to excellence.
              </p>
              <p className="text-gray-600 font-inter text-lg leading-relaxed">
                Over the years, we have had the privilege of hosting countless 
                celebrations, intimate dinners, and special moments, always striving 
                to exceed expectations and create lasting memories for our guests.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Restaurant History"
                className="w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Chef Arvind Mathur"
                className="w-full h-96 object-cover shadow-2xl"
              />
            </div>
            <div className="animate-slide-in-right order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-gold-500 mr-3" />
                <h2 className="text-4xl font-playfair font-bold text-black">
                  Meet Our Chef
                </h2>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-gold-600 mb-4">
                Chef Arvind Mathur
              </h3>
              <p className="text-gray-600 font-inter text-lg mb-6 leading-relaxed">
                Chef Arvind Mathur leads our culinary team with a distinguished 
                Michelin-starred legacy spanning over two decades. His innovative 
                approach to traditional cuisine, combined with impeccable technique 
                and artistic presentation, has earned him recognition as one of the 
                finest chefs in the industry.
              </p>
              <p className="text-gray-600 font-inter text-lg mb-6 leading-relaxed">
                Trained in the finest culinary institutions of France and India, 
                Chef Mathur brings a unique perspective that seamlessly blends 
                international techniques with local flavors. His philosophy centers 
                on using only the finest ingredients, sourced locally when possible, 
                to create dishes that are both innovative and deeply satisfying.
              </p>
              <p className="text-gray-600 font-inter text-lg leading-relaxed">
                Under his leadership, our kitchen has become a place of creativity 
                and excellence, where every dish tells a story and every meal becomes 
                an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center items-center mb-8">
              <Heart className="h-12 w-12 text-gold-500 mr-4" />
              <h2 className="text-4xl font-playfair font-bold">
                Our Philosophy
              </h2>
            </div>
            <div className="mb-12">
              <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
              <blockquote className="text-3xl font-playfair italic text-gold-400 mb-8">
                "We believe every dish is a memory in the making."
              </blockquote>
            </div>
            <p className="text-xl font-inter leading-relaxed mb-8 text-gray-300">
              At Le Maison Royale, we understand that dining is more than just 
              sustenance—it's an experience that engages all the senses and creates 
              lasting memories. Our philosophy is built on the belief that every 
              ingredient, every technique, and every moment of service should contribute 
              to something truly extraordinary.
            </p>
            <p className="text-lg font-inter leading-relaxed text-gray-300">
              We are committed to sustainability, sourcing our ingredients responsibly 
              and supporting local producers wherever possible. Our team is dedicated 
              to continuous learning and innovation, always seeking new ways to 
              surprise and delight our guests while honoring the timeless traditions 
              of fine dining.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-black mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-slide-up">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-black mb-4">
                Excellence
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                We strive for perfection in every dish, every service interaction, 
                and every detail of the dining experience.
              </p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-black mb-4">
                Passion
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                Our love for culinary arts drives us to create innovative dishes 
                and memorable experiences for every guest.
              </p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-black mb-4">
                Integrity
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                We maintain the highest standards of quality, sustainability, 
                and ethical practices in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;