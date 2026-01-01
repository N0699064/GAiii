import React from 'react';
import { features } from '../data/mockData';
import { Phone, PhoneIncoming, PhoneCall, Check, X } from 'lucide-react';

const FeaturesSection = () => {
  const getFeatureIllustration = (type) => {
    switch (type) {
      case 'crm':
        return (
          <div className="h-52 bg-gradient-to-br from-purple-50 to-white rounded-xl overflow-hidden">
            <img 
              src="https://customer-assets.emergentagent.com/job_c9bd9f06-9dcb-43af-b6e3-be6da472a258/artifacts/1qo7w9xq_Features_CRMIntegration.webp" 
              alt="CRM Integration"
              className="w-full h-full object-cover"
            />
          </div>
        );
      case 'calendar':
        return (
          <div className="h-52 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl overflow-hidden">
            <img 
              src="https://customer-assets.emergentagent.com/job_c9bd9f06-9dcb-43af-b6e3-be6da472a258/artifacts/481p7aq0_Features_CalendarBooking.webp" 
              alt="Calendar Booking"
              className="w-full h-full object-cover"
            />
          </div>
        );
      case 'lead':
        return (
          <div className="h-52 bg-white rounded-xl overflow-hidden">
            <img 
              src="https://customer-assets.emergentagent.com/job_c9bd9f06-9dcb-43af-b6e3-be6da472a258/artifacts/cymyn9td_Features_LeadQualification.webp" 
              alt="Lead Qualification"
              className="w-full h-full object-cover"
            />
          </div>
        );
      case 'multicall':
        return (
          <div className="h-52 bg-white rounded-xl p-4">
            {/* Multi-Call Handling Illustration */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="flex justify-between">
                <div>
                  <div className="text-[10px] text-gray-400 mb-1">Ongoing Call</div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-200 to-green-300 rounded-full"></div>
                    <div>
                      <div className="text-sm font-semibold">Andrew</div>
                      <div className="text-[10px] text-gray-400">2:45</div>
                    </div>
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <Phone className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 mb-1">Incoming Call</div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full"></div>
                    <div className="text-sm font-semibold">Claire</div>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <PhoneIncoming className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="flex justify-between">
                <div>
                  <div className="text-[10px] text-gray-400 mb-1">Ongoing Call</div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full"></div>
                    <div>
                      <div className="text-sm font-semibold">Jacob</div>
                      <div className="text-[10px] text-gray-400">3:21</div>
                    </div>
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <Phone className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 mb-1">Incoming Call</div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full"></div>
                    <div className="text-sm font-semibold">Amanda</div>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <PhoneIncoming className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'multilingual':
        return (
          <div className="h-52 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-4 flex items-center justify-center">
            {/* Multi-Lingual Illustration - Flag Grid */}
            <div className="grid grid-cols-4 gap-3">
              {/* Row 1 */}
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200">
                <div className="h-full bg-gradient-to-b from-blue-900 via-white to-red-600"></div>
              </div>
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200 flex flex-col">
                <div className="flex-1 bg-red-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="flex-1 bg-white flex">
                  <div className="flex-1 bg-red-600"></div>
                  <div className="flex-1 bg-white"></div>
                </div>
              </div>
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200 flex flex-col">
                <div className="flex-1 bg-red-600"></div>
                <div className="flex-1 bg-yellow-400"></div>
                <div className="flex-1 bg-red-600"></div>
              </div>
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200 flex flex-col">
                <div className="flex-1 bg-green-600"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-red-600"></div>
              </div>
              
              {/* Row 2 */}
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200 flex flex-col">
                <div className="flex-1 bg-black"></div>
                <div className="flex-1 bg-red-600"></div>
                <div className="flex-1 bg-yellow-400"></div>
              </div>
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200 flex flex-col">
                <div className="flex-1 bg-green-600"></div>
                <div className="flex-1 bg-red-600"></div>
              </div>
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200 bg-red-600 flex items-center justify-center">
                <div className="w-4 h-4 bg-yellow-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-600"></div>
                </div>
              </div>
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200 bg-red-600 flex items-center">
                <div className="w-3 h-full bg-yellow-400"></div>
              </div>
              
              {/* Row 3 */}
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200 flex flex-col">
                <div className="flex-1 bg-green-500"></div>
                <div className="flex-1 bg-yellow-400 flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-800 rounded-full"></div>
                </div>
                <div className="flex-1 bg-blue-600"></div>
              </div>
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200 flex">
                <div className="w-1/3 bg-blue-600"></div>
                <div className="w-1/3 bg-white"></div>
                <div className="w-1/3 bg-blue-600"></div>
              </div>
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200 flex flex-col">
                <div className="flex-1 bg-green-600"></div>
                <div className="flex-1 bg-yellow-400"></div>
              </div>
              <div className="w-12 h-9 rounded overflow-hidden shadow-sm border border-gray-200 bg-blue-900 flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'availability':
        return (
          <div className="h-52 bg-gradient-to-br from-purple-50 to-white rounded-xl p-4 flex items-center justify-center">
            {/* 24/7 Availability Illustration */}
            <div className="relative">
              {/* Outer circle */}
              <div className="w-36 h-36 rounded-full border-8 border-purple-200 flex items-center justify-center relative">
                {/* Inner content */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-purple-600">24</div>
                </div>
                
                {/* Checkmark badge */}
                <div className="absolute -top-1 -right-1 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Check className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-16 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Features You'll Actually Love
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Our system can call leads within 60 seconds of them filling in an online form making them 21x more likely to convert
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {getFeatureIllustration(feature.type)}
              <div className="p-5">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
