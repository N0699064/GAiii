import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          {/* Top Row - Logo and CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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

            {/* CTA */}
            <a
              href="/book-demo"
              className="bg-gradient-to-r from-[#f7d046] to-[#d4af37] hover:from-[#f2c14e] hover:to-[#c89a1c] text-gray-900 px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-medium transition-all text-sm md:text-base"
            >
              Book a Demo
            </a>
          </div>

          {/* Links - Responsive Grid */}
          <div className="flex flex-wrap justify-center md:justify-center gap-3 md:gap-6 text-xs md:text-sm">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <span className="text-gray-600">|</span>
            <a href="#booking" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <span className="text-gray-600">|</span>
            <a href="/sms-consent" className="text-gray-400 hover:text-white transition-colors">SMS Consent</a>
            <span className="text-gray-600">|</span>
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GoldrushAi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
