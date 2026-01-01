import React from 'react';
import { features } from '../data/mockData';
import { Calendar, Users, Phone, Globe, Clock, CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  const getFeatureIllustration = (type) => {
    switch (type) {
      case 'crm':
        return (
          <div className="h-48 bg-gradient-to-br from-purple-50 to-white rounded-xl p-4 flex items-center justify-center">
            <div className="relative w-full max-w-xs">
              {/* CRM Integration Illustration */}
              <div className="absolute top-0 left-4 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v18H3V3z" opacity="0.3"/>
                  <path d="M9 9h6v6H9V9z"/>
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h4v4H4zM4 10h4v4H4zM4 16h4v4H4zM10 4h4v4h-4zM10 10h4v4h-4zM10 16h4v4h-4z"/>
                </svg>
              </div>
              <div className="mt-14 bg-white rounded-xl shadow-lg p-4 mx-auto max-w-[180px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-sm">Julia</div>
                    <div className="text-xs text-gray-400">julia@email.com</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">HS</span>
              </div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">A</span>
              </div>
            </div>
          </div>
        );
      case 'calendar':
        return (
          <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-4 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                31
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 w-40">
                <div className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">JUL</div>
                <div className="text-4xl font-bold text-gray-800">17</div>
              </div>
              <div className="absolute -bottom-2 -right-6 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        );
      case 'lead':
        return (
          <div className="h-48 bg-white rounded-xl p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-bold text-green-600">Qualified Lead</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full"></div>
                <div>
                  <div className="font-semibold">Sophie</div>
                  <div className="text-xs text-gray-500">Has recently been in a car accident and has symptoms of whiplash.</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold">X</span>
                <span className="font-bold text-red-500">Unqualified Lead</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-200 rounded-full"></div>
                <div>
                  <div className="font-semibold">James</div>
                  <div className="text-xs text-gray-500">Their incident occurred 3 years ago and they have little evidence.</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'multicall':
        return (
          <div className="h-48 bg-gradient-to-br from-purple-50 to-white rounded-xl p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Ongoing Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Incoming Call</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
                  <div>
                    <div className="text-sm font-semibold">Andrew</div>
                    <div className="text-xs text-gray-400">2:45</div>
                  </div>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-pink-200 rounded-full"></div>
                  <div className="text-sm font-semibold">Claire</div>
                  <Phone className="w-4 h-4 text-green-500" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-amber-200 rounded-full"></div>
                  <div>
                    <div className="text-sm font-semibold">Jacob</div>
                    <div className="text-xs text-gray-400">3:21</div>
                  </div>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-purple-200 rounded-full"></div>
                  <div className="text-sm font-semibold">Amanda</div>
                  <Phone className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        );
      case 'multilingual':
        return (
          <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-4 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-2">
              {['🇬🇧', '🇺🇸', '🇪🇸', '🇩🇪', '🇫🇷', '🇮🇹', '🇧🇷', '🇵🇹', '🇯🇵', '🇨🇳', '🇰🇷', '🇸🇪'].map((flag, i) => (
                <div key={i} className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-xl">
                  {flag}
                </div>
              ))}
            </div>
          </div>
        );
      case 'availability':
        return (
          <div className="h-48 bg-gradient-to-br from-purple-50 to-white rounded-xl p-4 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-8 border-purple-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600">24</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features You'll Actually Love
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our system can call leads within 60 seconds of them filling in an online form making them 21x more likely to convert
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {getFeatureIllustration(feature.type)}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
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
