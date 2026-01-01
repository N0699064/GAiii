import React from 'react';
import { traditionalProblems, futureflowBenefits } from '../data/mockData';
import { X, Phone, Clock, Users, DollarSign, CheckCircle, Zap, Target } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 xl:px-48 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Still Hemorrhaging Money on
          <br />
          Missed <span className="text-purple-500 italic">Opportunities?</span>
        </h2>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Traditional Sales Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-5 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
                Traditional Sales Systems
              </h3>
              
              {/* Tilted Cards Illustration */}
              <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-white rounded-2xl p-4 mb-5 h-48">
                <div className="grid grid-cols-2 gap-3 h-full">
                  {/* Tilted card 1 - Missed Calls */}
                  <div className="bg-white rounded-xl shadow-md transform -rotate-3 flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center mb-1 relative">
                      <Phone className="w-4 h-4 text-purple-500" />
                      <X className="w-3 h-3 text-red-500 absolute -top-0.5 -right-0.5 bg-white rounded-full" />
                    </div>
                    <span className="text-[10px] font-bold text-purple-900 text-center">Missed<br/>Calls</span>
                  </div>
                  
                  {/* Tilted card 2 - Slow Responses */}
                  <div className="bg-white rounded-xl shadow-md transform rotate-3 flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-[10px] font-bold text-purple-900 text-center">Slow<br/>Responses</span>
                  </div>
                  
                  {/* Tilted card 3 - Unqualified Leads */}
                  <div className="bg-white rounded-xl shadow-md transform rotate-3 flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-[10px] font-bold text-purple-900 text-center">Unqualified<br/>Leads</span>
                  </div>
                  
                  {/* Tilted card 4 - Missed Opportunities */}
                  <div className="bg-white rounded-xl shadow-md transform -rotate-3 flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center mb-1">
                      <Target className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-[10px] font-bold text-purple-900 text-center">Missed<br/>Opportunities</span>
                  </div>
                </div>
              </div>

              {/* Problems List */}
              <div className="space-y-4">
                {traditionalProblems.map((problem, index) => (
                  <div key={index} className="flex gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{problem.title}</h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FutureFlow System Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-5 md:p-8">
              <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
                <div className="w-6 h-6 md:w-7 md:h-7">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <defs>
                      <linearGradient id="cardLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#7C3AED" />
                      </linearGradient>
                    </defs>
                    <path d="M20 5 L35 30 L5 30 Z" fill="url(#cardLogoGradient)" />
                    <path d="M20 12 L28 26 L12 26 Z" fill="white" opacity="0.3" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  The FutureFlow System
                </h3>
              </div>
              
              {/* Grid Illustration */}
              <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-white rounded-2xl p-4 mb-5 h-48">
                <div className="grid grid-cols-2 gap-3 h-full">
                  <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center mb-1">
                      <Phone className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-800 text-center">Never Miss<br/>A Lead</span>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center mb-1">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-800 text-center">Qualified<br/>Leads</span>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center mb-1">
                      <DollarSign className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-800 text-center">Cost<br/>Savings</span>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center mb-1">
                      <Zap className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-800 text-center">Instant<br/>Responses</span>
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {futureflowBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index === 0 && <Zap className="w-3 h-3 text-purple-600" />}
                      {index === 1 && <Target className="w-3 h-3 text-purple-600" />}
                      {index === 2 && <CheckCircle className="w-3 h-3 text-purple-600" />}
                      {index === 3 && <DollarSign className="w-3 h-3 text-purple-600" />}
                      {index === 4 && <Clock className="w-3 h-3 text-purple-600" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{benefit.title}</h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
