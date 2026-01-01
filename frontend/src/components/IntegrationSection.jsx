import React from 'react';

const IntegrationSection = () => {
  return (
    <section className="relative py-8 md:py-10 overflow-hidden">
      {/* Dark purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"></div>
      
      {/* Decorative blur elements */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
              We can integrate seamlessly into your current workflow
            </h2>
            <p className="text-purple-200 text-sm md:text-base mb-4">
              With the power of API's, we can integrate the FutureFlow system directly into your current tech stack
            </p>
            <a
              href="#booking"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Book a Demo
            </a>
          </div>

          {/* Right - Floating Logos */}
          <div className="relative h-32 md:h-44">
            {/* Salesforce */}
            <div className="absolute top-0 right-1/4 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
              <svg className="w-5 h-5 md:w-8 md:h-8" viewBox="0 0 48 48">
                <path fill="#00A1E0" d="M20.1 14.5c1.5-1.6 3.6-2.5 5.9-2.5 2.8 0 5.3 1.4 6.8 3.6 1.3-.6 2.7-.9 4.2-.9 5.5 0 10 4.5 10 10s-4.5 10-10 10c-.7 0-1.4-.1-2.1-.2-1.3 2.1-3.6 3.5-6.2 3.5-1.3 0-2.5-.3-3.6-.9-1.3 2.5-4 4.2-7 4.2-3.5 0-6.5-2.3-7.6-5.4-.5.1-1 .1-1.5.1-4.4 0-8-3.6-8-8 0-3.1 1.8-5.8 4.4-7.1-.3-.9-.4-1.9-.4-2.9 0-5 4-9 9-9 3.1 0 5.8 1.5 7.5 3.9z"/>
              </svg>
            </div>
            
            {/* Pipedrive */}
            <div className="absolute top-1 right-2 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
              <span className="text-sm md:text-xl font-bold text-green-600">P</span>
            </div>
            
            {/* Monday.com */}
            <div className="absolute top-8 right-0 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex gap-0.5">
                <div className="w-1 h-2 md:w-1.5 md:h-3 bg-yellow-400 rounded-sm"></div>
                <div className="w-1 h-2 md:w-1.5 md:h-3 bg-green-500 rounded-sm"></div>
                <div className="w-1 h-2 md:w-1.5 md:h-3 bg-pink-500 rounded-sm"></div>
              </div>
            </div>
            
            {/* Pipedrive green */}
            <div className="absolute top-1/4 left-0 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-5 h-5 md:w-7 md:h-7 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-[10px] md:text-xs">p</span>
              </div>
            </div>
            
            {/* HubSpot */}
            <div className="absolute top-1/3 left-1/5 w-9 h-9 md:w-13 md:h-13 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 24 24" fill="#FF7A59">
                <path d="M18.164 7.93V5.307a2.31 2.31 0 001.324-2.083c0-1.27-1.03-2.3-2.299-2.3s-2.3 1.03-2.3 2.3c0 .93.56 1.73 1.36 2.083V7.93a5.323 5.323 0 00-3.063 1.49L5.36 3.716a2.07 2.07 0 00.067-.514c0-1.14-.925-2.065-2.065-2.065S1.297 2.062 1.297 3.202s.925 2.065 2.065 2.065c.345 0 .67-.086.957-.237l7.76 5.682a5.335 5.335 0 00-.61 2.474c0 .907.227 1.76.625 2.508l-2.46 2.46a1.69 1.69 0 00-.505-.08c-.938 0-1.699.76-1.699 1.698s.76 1.699 1.699 1.699c.938 0 1.698-.76 1.698-1.699 0-.177-.028-.347-.08-.507l2.46-2.46a5.323 5.323 0 002.485.614c2.942 0 5.33-2.387 5.33-5.33a5.323 5.323 0 00-2.858-4.717z"/>
              </svg>
            </div>
            
            {/* Monday dots */}
            <div className="absolute bottom-1/4 left-1/4 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.8s' }}>
              <svg className="w-5 h-5 md:w-8 md:h-8" viewBox="0 0 24 24">
                <circle cx="6" cy="12" r="3" fill="#FF3D57"/>
                <circle cx="18" cy="12" r="3" fill="#FFCB00"/>
                <circle cx="12" cy="12" r="3" fill="#00CA72"/>
              </svg>
            </div>
            
            {/* Asana */}
            <div className="absolute bottom-2 right-1/4 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '2.5s' }}>
              <svg className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="6" r="3" fill="#F06A6A"/>
                <circle cx="6" cy="15" r="3" fill="#F06A6A"/>
                <circle cx="18" cy="15" r="3" fill="#F06A6A"/>
              </svg>
            </div>
            
            {/* Analytics */}
            <div className="absolute bottom-0 left-1/5 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="flex gap-0.5 items-end">
                <div className="w-1 h-1.5 md:w-1 md:h-2 bg-yellow-400 rounded-sm"></div>
                <div className="w-1 h-2 md:w-1 md:h-3 bg-green-500 rounded-sm"></div>
                <div className="w-1 h-3 md:w-1 md:h-5 bg-blue-500 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
