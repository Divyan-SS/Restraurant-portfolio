import React, { useState } from 'react';
import { X, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Restaurant Interior',
      category: 'ambience'
    },
    {
      src: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Lobster Thermidor',
      category: 'dishes'
    },
    {
      src: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Chef Arvind Mathur',
      category: 'chef'
    },
    {
      src: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Belgian Chocolate Fondant',
      category: 'dishes'
    },
    {
      src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Elegant Dining Room',
      category: 'ambience'
    },
    {
      src: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Wagyu Beef Tenderloin',
      category: 'dishes'
    },
    {
      src: 'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Bar Area',
      category: 'ambience'
    },
    {
      src: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Rose Panna Cotta',
      category: 'dishes'
    },
    {
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Seared Foie Gras',
      category: 'dishes'
    },
    {
      src: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Private Dining Room',
      category: 'ambience'
    },
    {
      src: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Truffle Mushroom Soup',
      category: 'dishes'
    },
    {
      src: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Kitchen in Action',
      category: 'chef'
    },
    {
      src: 'https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Crème Brûlée',
      category: 'dishes'
    },
    {
      src: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Rack of Lamb',
      category: 'dishes'
    },
    {
      src: 'https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Signature Cocktails',
      category: 'dishes'
    }
  ];

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
          <Camera className="h-16 w-16 text-gold-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Our <span className="text-gold-500">Gallery</span>
          </h1>
          <p className="text-xl font-inter max-w-2xl mx-auto">
            A visual journey through our culinary artistry and elegant ambiance
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-slide-up"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-inter text-sm font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-black mb-6">
            Experience It Yourself
          </h2>
          <p className="text-gray-600 font-inter text-lg mb-8 leading-relaxed">
            These images only capture a glimpse of the Le Maison Royale experience. 
            Join us for an unforgettable evening of exceptional cuisine and 
            unparalleled service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/reservations"
              className="inline-flex items-center px-8 py-4 bg-gold-500 text-black font-inter font-medium hover:bg-gold-400 transition-all duration-300 transform hover:scale-105"
            >
              Reserve Your Table
            </a>
            <a
              href="/menu"
              className="inline-flex items-center px-8 py-4 border-2 border-gold-500 text-gold-600 font-inter font-medium hover:bg-gold-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;