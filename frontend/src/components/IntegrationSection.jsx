import React from 'react';

const integrationLogos = [
  { name: 'Asana', color: '#F06A6A' },
  { name: 'Salesforce', color: '#00A1E0' },
  { name: 'PipeDrive', color: '#1A1A1A' },
  { name: 'Monday', color: '#FF3D57' },
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'GoHighLevel', color: '#0575E6' }
];

const IntegrationSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dark purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"></div>
      
      {/* Decorative blur elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              We can integrate seamlessly into your current workflow
            </h2>
            <p className="text-purple-200 text-lg mb-8">
              With the power of API's, we can integrate the FutureFlow system directly into your current tech stack
            </p>
            <a
              href="#booking"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Book a Demo
            </a>
          </div>

          {/* Right - Floating Logos Grid */}
          <div className="relative h-80 md:h-96">
            {/* Floating integration bubbles */}
            <div className="absolute top-0 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-2xl flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
              <span className="text-xs font-semibold text-orange-500">asana</span>
            </div>
            <div className="absolute top-4 right-0 w-24 h-24 md:w-28 md:h-28 bg-white rounded-full shadow-2xl flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
              <span className="text-xs font-bold text-blue-600">salesforce</span>
            </div>
            <div className="absolute top-1/3 left-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-2xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-xs font-bold text-green-600">P</span>
            </div>
            <div className="absolute top-1/3 right-1/3 w-24 h-24 md:w-28 md:h-28 bg-white rounded-full shadow-2xl flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex gap-0.5">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-1/4 left-1/4 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-2xl flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <span className="text-2xl">monday</span>
            </div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 md:w-28 md:h-28 bg-white rounded-full shadow-2xl flex items-center justify-center animate-float" style={{ animationDelay: '2.5s' }}>
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5">
                  <div className="w-2 h-6 bg-green-500"></div>
                  <div className="w-2 h-4 bg-blue-500"></div>
                  <div className="w-2 h-5 bg-purple-500"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1/3 right-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-2xl flex items-center justify-center animate-float" style={{ animationDelay: '0.8s' }}>
              <span className="text-orange-500 font-bold">HubSpot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
