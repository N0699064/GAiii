import React from 'react';
import { processSteps } from '../data/mockData';

const ProcessSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-medium">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            How It Works?
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Large Number */}
              <div className="mb-6">
                <span 
                  className="text-7xl md:text-8xl font-bold text-purple-600 italic"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {step.number}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
