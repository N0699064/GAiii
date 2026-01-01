import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient that fades out at bottom */}
      <div className="absolute inset-0">
        {/* Light gold gradient at top, fading to white at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff7e0] via-[#fff3c4] to-white"></div>
        
        {/* Decorative wave shapes */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7d046" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#fff7e0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f2c14e" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#fff3c4" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Left wave - fades out */}
          <path
            d="M-100,100 Q200,50 300,200 T400,350 T200,500 T-100,400 Z"
            fill="url(#waveGradient1)"
            className="animate-pulse"
            style={{ animationDuration: '8s' }}
          />
          {/* Right wave - fades out */}
          <path
            d="M1540,100 Q1240,200 1140,100 T940,200 T1140,400 T1540,300 Z"
            fill="url(#waveGradient2)"
            className="animate-pulse"
            style={{ animationDuration: '10s', animationDelay: '1s' }}
          />
        </svg>
        
        {/* Additional fade overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI Voice Agents,
          <br />
          Made <span className="text-[#d4af37] italic">Simple</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Save Time, Make More Money, And Never Miss An
          <br className="hidden md:block" />
          Opportunity By Automating Lead Nurturing With AI
        </p>
        <a
          href="/book-demo"
          className="inline-block bg-gradient-to-r from-[#f7d046] to-[#d4af37] hover:from-[#f2c14e] hover:to-[#c89a1c] text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:shadow-[#f7d046]/50 hover:-translate-y-0.5"
        >
          Book a Demo
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
