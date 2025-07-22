import React from 'react';
import { Crown, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-gold-500" />
              <span className="text-2xl font-playfair font-bold">
                Le Maison Royale
              </span>
            </div>
            <p className="font-inter text-gray-300 mb-6 max-w-md">
              Where taste meets elegance. Experience fine dining at its finest with 
              world-class cuisine and impeccable service since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4 text-gold-500">
              Contact
            </h3>
            <div className="space-y-3 font-inter text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold-500" />
                <span>123 Luxury Street, Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold-500" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold-500" />
                <span>reservations@lemaisonroyale.in</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4 text-gold-500">
              Hours
            </h3>
            <div className="space-y-2 font-inter text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>6:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>6:00 PM - 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>6:00 PM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-inter text-sm text-gray-400">
            © 2025 Le Maison Royale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;