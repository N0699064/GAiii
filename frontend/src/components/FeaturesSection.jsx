import React from 'react';
import { features } from '../data/mockData';

const FeaturesSection = () => {
  const getFeatureIllustration = (type) => {
    switch (type) {
      case 'crm':
        return (
          <div className="h-56 bg-gradient-to-br from-purple-50 to-white rounded-xl overflow-hidden flex items-center justify-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_c9bd9f06-9dcb-43af-b6e3-be6da472a258/artifacts/1qo7w9xq_Features_CRMIntegration.webp" 
              alt="CRM Integration"
              className="h-full object-contain scale-110"
            />
          </div>
        );
      case 'calendar':
        return (
          <div className="h-56 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl overflow-hidden flex items-center justify-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_c9bd9f06-9dcb-43af-b6e3-be6da472a258/artifacts/481p7aq0_Features_CalendarBooking.webp" 
              alt="Calendar Booking"
              className="h-full object-contain scale-110"
            />
          </div>
        );
      case 'lead':
        return (
          <div className="h-56 bg-white rounded-xl overflow-hidden flex items-center justify-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_c9bd9f06-9dcb-43af-b6e3-be6da472a258/artifacts/cymyn9td_Features_LeadQualification.webp" 
              alt="Lead Qualification"
              className="h-full object-contain scale-110"
            />
          </div>
        );
      case 'multicall':
        return (
          <div className="h-56 bg-white rounded-xl overflow-hidden flex items-center justify-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_c9bd9f06-9dcb-43af-b6e3-be6da472a258/artifacts/7u7tyfik_Features_Multi-CallHandling.webp" 
              alt="Multi-Call Handling"
              className="h-full object-contain scale-110"
            />
          </div>
        );
      case 'multilingual':
        return (
          <div className="h-56 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl overflow-hidden flex items-center justify-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_c9bd9f06-9dcb-43af-b6e3-be6da472a258/artifacts/yz3bq18y_Features_Multi-LingualSupport.webp" 
              alt="Multi-Lingual Agents"
              className="h-full object-contain scale-110"
            />
          </div>
        );
      case 'availability':
        return (
          <div className="h-56 bg-gradient-to-br from-purple-50 to-white rounded-xl overflow-hidden flex items-center justify-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_c9bd9f06-9dcb-43af-b6e3-be6da472a258/artifacts/7w6jwazs_Features_24_7Availability.webp" 
              alt="24/7 Availability"
              className="h-full object-contain scale-110"
            />
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
