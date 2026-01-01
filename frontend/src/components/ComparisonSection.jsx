import React from 'react';
import { traditionalProblems, futureflowBenefits } from '../data/mockData';
import { X, Phone, Clock, Users, DollarSign, CheckCircle, Zap, Target } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-20 px-8 md:px-16 lg:px-32 xl:px-48 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Still Hemorrhaging Money on
          <br />
          Missed <span className="text-[#d4af37] italic">Opportunities?</span>
        </h2>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Traditional Sales Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="p-5 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
                Traditional Sales Systems
              </h3>
              
              {/* Tilted Cards Illustration */}
              <div className="bg-gradient-to-br from-[#fff7e0] via-[#fff3c4] to-white rounded-2xl p-4 mb-5 h-48">
                <div className="grid grid-cols-2 gap-3 h-full">
                  {/* Tilted card 1 - Missed Calls */}
                  <div className="bg-white rounded-xl shadow-md transform -rotate-3 flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-[#fff3c4] rounded-full flex items-center justify-center mb-1 relative">
                      <Phone className="w-4 h-4 text-[#d4af37]" />
                      <X className="w-3 h-3 text-red-500 absolute -top-0.5 -right-0.5 bg-white rounded-full" />
                    </div>
                    <span className="text-[10px] font-bold text-[#9c7b16] text-center">Missed<br/>Calls</span>
                  </div>
                  
                  {/* Tilted card 2 - Slow Responses */}
                  <div className="bg-white rounded-xl shadow-md transform rotate-3 flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-[#fff3c4] rounded-full flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span className="text-[10px] font-bold text-[#9c7b16] text-center">Slow<br/>Responses</span>
                  </div>
                  
                  {/* Tilted card 3 - Unqualified Leads */}
                  <div className="bg-white rounded-xl shadow-md transform rotate-3 flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-[#fff3c4] rounded-full flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span className="text-[10px] font-bold text-[#9c7b16] text-center">Unqualified<br/>Leads</span>
                  </div>
                  
                  {/* Tilted card 4 - Missed Opportunities */}
                  <div className="bg-white rounded-xl shadow-md transform -rotate-3 flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-[#fff3c4] rounded-full flex items-center justify-center mb-1">
                      <Target className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span className="text-[10px] font-bold text-[#9c7b16] text-center">Missed<br/>Opportunities</span>
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

          {/* GoldrushAi System Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="p-5 md:p-8">
              <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
                <div className="w-6 h-6 md:w-7 md:h-7">
                  <img
                    src="/gold-head-logo.png"
                    alt="GoldrushAi"
                    className="w-full h-full object-contain scale-110"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  The GoldrushAi System
                </h3>
              </div>
              
              {/* Grid Illustration */}
              <div className="bg-gradient-to-br from-[#fff7e0] via-[#fff3c4] to-white rounded-2xl p-4 mb-5 h-48">
                <div className="grid grid-cols-2 gap-3 h-full">
                  <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-[#fff3c4] rounded-xl flex items-center justify-center mb-1">
                      <Phone className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-800 text-center">Never Miss<br/>A Lead</span>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-[#fff3c4] rounded-xl flex items-center justify-center mb-1">
                      <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-800 text-center">Qualified<br/>Leads</span>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-[#fff3c4] rounded-xl flex items-center justify-center mb-1">
                      <DollarSign className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-800 text-center">Cost<br/>Savings</span>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2">
                    <div className="w-9 h-9 bg-[#fff3c4] rounded-xl flex items-center justify-center mb-1">
                      <Zap className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-800 text-center">Instant<br/>Responses</span>
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {futureflowBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#fff3c4] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index === 0 && <Zap className="w-3 h-3 text-[#d4af37]" />}
                      {index === 1 && <Target className="w-3 h-3 text-[#d4af37]" />}
                      {index === 2 && <CheckCircle className="w-3 h-3 text-[#d4af37]" />}
                      {index === 3 && <DollarSign className="w-3 h-3 text-[#d4af37]" />}
                      {index === 4 && <Clock className="w-3 h-3 text-[#d4af37]" />}
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
