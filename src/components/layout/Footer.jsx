import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Vijay.dev
            </h3>
            <p className="text-gray-400">
              Crafting digital experiences with passion and precision
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-400">Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span className="text-gray-400">and lots of</span>
            <span className="text-purple-400">☕</span>
            <span className="text-gray-400">by</span>
            <span className="text-white font-semibold">Vijay Waghmare</span>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} Vijay Waghmare. All rights reserved. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;