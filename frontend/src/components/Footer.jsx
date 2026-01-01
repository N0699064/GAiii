import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img
                src="/gold-head-logo.png"
                alt="GoldrushAi"
                className="w-full h-full object-contain scale-110"
              />
            </div>
            <span className="font-bold text-lg">GoldrushAi</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">What We Do</a>
            <a href="#booking" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>

          {/* CTA */}
          <a
            href="/book-demo"
            className="bg-gradient-to-r from-[#f7d046] to-[#d4af37] hover:from-[#f2c14e] hover:to-[#c89a1c] text-gray-900 px-5 py-2.5 rounded-lg font-medium transition-all"
          >
            Book a Demo
          </a>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GoldrushAi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
