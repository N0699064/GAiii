import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/mockData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className={`mx-auto transition-all duration-300 ${
        scrolled 
          ? 'max-w-full md:max-w-3xl bg-white shadow-xl' 
          : 'max-w-full md:max-w-4xl bg-white/90 backdrop-blur-md shadow-md'
      } rounded-2xl px-6`}>
        <div className="flex items-center justify-between h-[70px] md:h-[80px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 relative">
                <img
                  src="/gold-head-logo.png"
                  alt="GoldrushAi"
                  className="w-full h-full object-contain scale-110"
                />
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-900">GoldrushAi</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/book-demo"
              className="bg-gradient-to-r from-[#f7d046] to-[#d4af37] hover:from-[#f2c14e] hover:to-[#c89a1c] text-gray-900 px-5 py-2.5 rounded-lg font-medium text-sm transition-all hover:shadow-lg hover:shadow-[#f7d046]/50"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/book-demo"
              className="block mt-4 bg-gradient-to-r from-[#f7d046] to-[#d4af37] text-gray-900 text-center px-5 py-2.5 rounded-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
