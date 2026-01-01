import React from 'react';

const IntegrationSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Dark purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"></div>
      
      {/* Decorative blur elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              We can integrate seamlessly into your current workflow
            </h2>
            <p className="text-purple-200 text-base md:text-lg mb-6">
              With the power of API's, we can integrate the FutureFlow system directly into your current tech stack
            </p>
            <a
              href="#booking"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg"
            >
              Book a Demo
            </a>
          </div>

          {/* Right - Floating Logos */}
          <div className="relative h-72 md:h-80">
            {/* Salesforce */}
            <div className="absolute top-2 right-1/4 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
              <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 48 48">
                <path fill="#00A1E0" d="M20.1 14.5c1.5-1.6 3.6-2.5 5.9-2.5 2.8 0 5.3 1.4 6.8 3.6 1.3-.6 2.7-.9 4.2-.9 5.5 0 10 4.5 10 10s-4.5 10-10 10c-.7 0-1.4-.1-2.1-.2-1.3 2.1-3.6 3.5-6.2 3.5-1.3 0-2.5-.3-3.6-.9-1.3 2.5-4 4.2-7 4.2-3.5 0-6.5-2.3-7.6-5.4-.5.1-1 .1-1.5.1-4.4 0-8-3.6-8-8 0-3.1 1.8-5.8 4.4-7.1-.3-.9-.4-1.9-.4-2.9 0-5 4-9 9-9 3.1 0 5.8 1.5 7.5 3.9z"/>
              </svg>
            </div>
            
            {/* Pipedrive */}
            <div className="absolute top-0 right-4 w-14 h-14 md:w-18 md:h-18 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
              <span className="text-xl md:text-2xl font-bold text-green-600">P</span>
            </div>
            
            {/* Monday.com - top */}
            <div className="absolute top-16 right-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5 mb-1">
                  <div className="w-2 h-4 bg-yellow-400 rounded-sm"></div>
                  <div className="w-2 h-4 bg-green-500 rounded-sm"></div>
                  <div className="w-2 h-4 bg-pink-500 rounded-sm"></div>
                </div>
                <span className="text-[8px] font-bold text-gray-800">monday.com</span>
              </div>
            </div>
            
            {/* Pipedrive green */}
            <div className="absolute top-1/3 left-4 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">p</span>
              </div>
            </div>
            
            {/* HubSpot */}
            <div className="absolute top-1/3 left-1/3 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="#FF7A59">
                <path d="M18.164 7.93V5.307a2.31 2.31 0 001.324-2.083c0-1.27-1.03-2.3-2.299-2.3s-2.3 1.03-2.3 2.3c0 .93.56 1.73 1.36 2.083V7.93a5.323 5.323 0 00-3.063 1.49L5.36 3.716a2.07 2.07 0 00.067-.514c0-1.14-.925-2.065-2.065-2.065S1.297 2.062 1.297 3.202s.925 2.065 2.065 2.065c.345 0 .67-.086.957-.237l7.76 5.682a5.335 5.335 0 00-.61 2.474c0 .907.227 1.76.625 2.508l-2.46 2.46a1.69 1.69 0 00-.505-.08c-.938 0-1.699.76-1.699 1.698s.76 1.699 1.699 1.699c.938 0 1.698-.76 1.698-1.699 0-.177-.028-.347-.08-.507l2.46-2.46a5.323 5.323 0 002.485.614c2.942 0 5.33-2.387 5.33-5.33a5.323 5.323 0 00-2.858-4.717z"/>
              </svg>
            </div>
            
            {/* Monday.com - middle */}
            <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.8s' }}>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="12" r="4" fill="#FF3D57"/>
                  <circle cx="18" cy="12" r="4" fill="#FFCB00"/>
                  <circle cx="12" cy="12" r="4" fill="#00CA72"/>
                </svg>
                <span className="text-[7px] font-bold text-gray-800 mt-0.5">monday.com</span>
              </div>
            </div>
            
            {/* Asana */}
            <div className="absolute bottom-8 right-1/3 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '2.5s' }}>
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24">
                  <circle cx="12" cy="6" r="4" fill="#F06A6A"/>
                  <circle cx="6" cy="16" r="4" fill="#F06A6A"/>
                  <circle cx="18" cy="16" r="4" fill="#F06A6A"/>
                </svg>
                <span className="text-[8px] font-bold text-gray-600 mt-0.5">asana</span>
              </div>
            </div>
            
            {/* Google Analytics style */}
            <div className="absolute bottom-4 left-1/3 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="flex gap-0.5 items-end">
                <div className="w-1.5 h-3 bg-yellow-400 rounded-sm"></div>
                <div className="w-1.5 h-5 bg-green-500 rounded-sm"></div>
                <div className="w-1.5 h-7 bg-blue-500 rounded-sm"></div>
              </div>
            </div>
            
            {/* Extra floating bubble */}
            <div className="absolute bottom-0 right-8 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1.8s' }}>
              <svg className="w-6 h-6 md:w-8 md:h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
