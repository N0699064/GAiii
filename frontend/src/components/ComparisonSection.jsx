import React from 'react';
import { traditionalProblems, futureflowBenefits } from '../data/mockData';
import { X, Phone, Clock, Users, DollarSign, CheckCircle, Zap, Target, TrendingDown } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Still Hemorrhaging Money on
          <br />
          Missed <span className="text-purple-600 italic">Opportunities?</span>
        </h2>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Traditional Sales Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Traditional Sales Systems
              </h3>
              
              {/* Illustration */}
              <div className="bg-purple-50 rounded-xl p-6 mb-8 relative overflow-hidden">
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center relative">
                      <Phone className="w-8 h-8 text-purple-400" />
                      <X className="w-5 h-5 text-red-500 absolute -top-1 -right-1 bg-white rounded-full" />
                    </div>
                    <span className="text-sm text-gray-600 mt-2 font-medium">Missed<br/>Calls</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="w-8 h-8 text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-600 mt-2 font-medium">Slow<br/>Responses</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-600 mt-2 font-medium">Unqualified<br/>Leads</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <TrendingDown className="w-8 h-8 text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-600 mt-2 font-medium">Missed<br/>Opportunities</span>
                  </div>
                </div>
              </div>

              {/* Problems List */}
              <div className="space-y-4">
                {traditionalProblems.map((problem, index) => (
                  <div key={index} className="flex gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{problem.title}</h4>
                      <p className="text-gray-500 text-sm">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FutureFlow System Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-6 h-6">
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
                <h3 className="text-xl font-bold text-gray-900">
                  The FutureFlow System
                </h3>
              </div>
              
              {/* Illustration */}
              <div className="bg-purple-50 rounded-xl p-6 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
                      <Phone className="w-8 h-8 text-purple-500" />
                    </div>
                    <span className="text-sm text-gray-700 mt-2 font-medium text-center">Never Miss<br/>A Lead</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-purple-500" />
                    </div>
                    <span className="text-sm text-gray-700 mt-2 font-medium text-center">Qualified<br/>Leads</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
                      <DollarSign className="w-8 h-8 text-purple-500" />
                    </div>
                    <span className="text-sm text-gray-700 mt-2 font-medium text-center">Cost<br/>Savings</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
                      <Zap className="w-8 h-8 text-purple-500" />
                    </div>
                    <span className="text-sm text-gray-700 mt-2 font-medium text-center">Instant<br/>Responses</span>
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {futureflowBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index === 0 && <Zap className="w-3 h-3 text-purple-600" />}
                      {index === 1 && <Target className="w-3 h-3 text-purple-600" />}
                      {index === 2 && <CheckCircle className="w-3 h-3 text-purple-600" />}
                      {index === 3 && <DollarSign className="w-3 h-3 text-purple-600" />}
                      {index === 4 && <Clock className="w-3 h-3 text-purple-600" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                      <p className="text-gray-500 text-sm">{benefit.description}</p>
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
