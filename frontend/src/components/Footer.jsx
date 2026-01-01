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
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                <path d="M20 5 L35 30 L5 30 Z" fill="url(#footerLogoGradient)" />
                <path d="M20 12 L28 26 L12 26 Z" fill="white" opacity="0.3" />
              </svg>
            </div>
            <span className="font-bold text-lg">FutureFlow AI</span>
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
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all"
          >
            Book a Demo
          </a>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FutureFlow AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
