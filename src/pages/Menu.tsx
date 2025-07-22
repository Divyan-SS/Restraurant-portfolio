import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const categories = [
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Main Course', icon: '🍽️' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥂' },
  ];

  const menuItems = {
    starters: [
      {
        name: 'Truffle Mushroom Soup',
        description: 'Wild mushrooms with cream and shaved truffle',
        price: '₹1,200',
        image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Seared Foie Gras',
        description: 'Pan-seared foie gras with cherry gastrique',
        price: '₹2,100',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Oysters Rockefeller',
        description: 'Fresh oysters with spinach and herb butter',
        price: '₹1,800',
        image: 'https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Caviar Service',
        description: 'Ossetra caviar with traditional accompaniments',
        price: '₹3,500',
        image: 'https://images.pexels.com/photos/1833334/pexels-photo-1833334.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    mains: [
      {
        name: 'Lobster Thermidor',
        description: 'Baked lobster in mustard cream',
        price: '₹3,200',
        image: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Wagyu Beef Tenderloin',
        description: 'Grilled A5 Wagyu with seasonal vegetables',
        price: '₹4,500',
        image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Duck Confit',
        description: 'Slow-cooked duck leg with orange glaze',
        price: '₹2,800',
        image: 'https://images.pexels.com/photos/5710165/pexels-photo-5710165.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Rack of Lamb',
        description: 'Herb-crusted lamb with rosemary jus',
        price: '₹3,100',
        image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    desserts: [
      {
        name: 'Belgian Chocolate Fondant',
        description: 'Warm chocolate cake with vanilla ice cream',
        price: '₹950',
        image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Rose Panna Cotta',
        description: 'Silky custard with rose and fresh berries',
        price: '₹850',
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Crème Brûlée',
        description: 'Vanilla custard with caramelized sugar',
        price: '₹800',
        image: 'https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Tarte Tatin',
        description: 'Upside-down apple tart with cinnamon ice cream',
        price: '₹900',
        image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    beverages: [
      {
        name: 'Dom Pérignon 2012',
        description: 'Vintage champagne, full bottle',
        price: '₹18,000',
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Château Margaux 2015',
        description: 'Bordeaux red wine, full bottle',
        price: '₹25,000',
        image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Macallan 25 Year',
        description: 'Single malt Scotch whisky',
        price: '₹4,200',
        image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Signature Cocktails',
        description: 'Craft cocktails made by our mixologist',
        price: '₹1,100',
        image: 'https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ChefHat className="h-16 w-16 text-gold-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Our <span className="text-gold-500">Menu</span>
          </h1>
          <p className="text-xl font-inter max-w-2xl mx-auto">
            Discover our carefully curated collection of culinary masterpieces
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-8 py-4 font-inter font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gold-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up">
                <div className="flex">
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-playfair font-semibold text-black">
                          {item.name}
                        </h3>
                        <span className="text-gold-600 font-inter font-bold text-lg ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 font-inter leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chef's Note */}
          <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-playfair font-semibold text-black mb-4">
              Chef's Note
            </h3>
            <p className="text-gray-600 font-inter text-lg max-w-3xl mx-auto leading-relaxed">
              All dishes are prepared with the finest ingredients, sourced locally when possible. 
              Our menu changes seasonally to reflect the best available produce. Please inform 
              our staff of any dietary restrictions or allergies, and we will be happy to 
              accommodate your needs.
            </p>
            <div className="mt-6 p-4 bg-gold-50 border border-gold-200 rounded-lg inline-block">
              <p className="text-gold-800 font-inter font-medium">
                Wine pairings available for all courses. Ask your sommelier for recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;