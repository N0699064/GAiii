import React from 'react';
import { features } from '../data/mockData';
import { Phone, PhoneIncoming, PhoneCall, Check, X } from 'lucide-react';

const FeaturesSection = () => {
  const getFeatureIllustration = (type) => {
    switch (type) {
      case 'crm':
        return (
          <div className="h-52 bg-gradient-to-br from-purple-50 to-white rounded-xl p-4 flex items-center justify-center relative">
            {/* CRM Integration Illustration */}
            <div className="relative w-full h-full">
              {/* Google Drive icon - top left */}
              <div className="absolute top-2 left-4 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M12 11l5 8H7z"/>
                  <path fill="#FBBC05" d="M17 19l5-8h-5z"/>
                  <path fill="#34A853" d="M7 19l5-8-5-8z"/>
                  <path fill="#EA4335" d="M12 3l5 8-5 8-5-8z" opacity="0.5"/>
                </svg>
              </div>
              
              {/* Analytics icon - top right */}
              <div className="absolute top-2 right-4 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="flex gap-0.5 items-end">
                  <div className="w-1.5 h-3 bg-orange-400 rounded-sm"></div>
                  <div className="w-1.5 h-5 bg-blue-500 rounded-sm"></div>
                  <div className="w-1.5 h-4 bg-yellow-400 rounded-sm"></div>
                </div>
              </div>
              
              {/* Contact card - center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-3 w-36">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-800">Julia</div>
                    <div className="text-[10px] text-blue-500">julia@email.com</div>
                  </div>
                </div>
              </div>
              
              {/* Arrows */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <path d="M 60 50 Q 80 80 90 100" stroke="#ddd" strokeWidth="2" fill="none" strokeDasharray="4"/>
                <path d="M 140 50 Q 130 80 120 100" stroke="#ddd" strokeWidth="2" fill="none" strokeDasharray="4"/>
                <path d="M 60 160 Q 80 140 90 130" stroke="#ddd" strokeWidth="2" fill="none" strokeDasharray="4"/>
                <path d="M 140 160 Q 130 140 120 130" stroke="#ddd" strokeWidth="2" fill="none" strokeDasharray="4"/>
              </svg>
              
              {/* HubSpot icon - bottom left */}
              <div className="absolute bottom-2 left-4 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF7A59">
                  <path d="M18.164 7.93V5.307a2.31 2.31 0 001.324-2.083c0-1.27-1.03-2.3-2.299-2.3s-2.3 1.03-2.3 2.3c0 .93.56 1.73 1.36 2.083V7.93a5.323 5.323 0 00-3.063 1.49L5.36 3.716a2.07 2.07 0 00.067-.514c0-1.14-.925-2.065-2.065-2.065S1.297 2.062 1.297 3.202s.925 2.065 2.065 2.065c.345 0 .67-.086.957-.237l7.76 5.682a5.335 5.335 0 00-.61 2.474c0 .907.227 1.76.625 2.508l-2.46 2.46a1.69 1.69 0 00-.505-.08c-.938 0-1.699.76-1.699 1.698s.76 1.699 1.699 1.699c.938 0 1.698-.76 1.698-1.699 0-.177-.028-.347-.08-.507l2.46-2.46a5.323 5.323 0 002.485.614c2.942 0 5.33-2.387 5.33-5.33a5.323 5.323 0 00-2.858-4.717z"/>
                </svg>
              </div>
              
              {/* Asana icon - bottom right */}
              <div className="absolute bottom-2 right-4 w-10 h-10 bg-teal-700 rounded-lg shadow-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
            </div>
          </div>
        );
      case 'calendar':
        return (
          <div className="h-52 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-4 flex items-center justify-center relative">
            {/* Calendar Booking Illustration */}
            <div className="relative">
              {/* Google Calendar - top right */}
              <div className="absolute -top-4 right-0 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-blue-500 rounded flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-sm">31</span>
                </div>
              </div>
              
              {/* Main calendar card */}
              <div className="bg-white rounded-xl shadow-lg p-4 w-32 relative z-10">
                <div className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded mb-1 inline-block">JUL</div>
                <div className="text-4xl font-bold text-gray-800">17</div>
              </div>
              
              {/* Calendar grid - right */}
              <div className="absolute top-8 -right-16 bg-white rounded-lg shadow-md p-2 w-20">
                <div className="grid grid-cols-7 gap-0.5 text-[6px] text-gray-400">
                  {[...Array(35)].map((_, i) => (
                    <div key={i} className={`w-2 h-2 flex items-center justify-center ${i === 16 ? 'bg-purple-500 text-white rounded' : ''}`}>
                      {i < 31 ? i + 1 : ''}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Outlook icon - bottom right */}
              <div className="absolute -bottom-2 right-0 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">O</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'lead':
        return (
          <div className="h-52 bg-white rounded-xl p-4">
            {/* Lead Qualification Illustration */}
            <div className="space-y-3">
              {/* Qualified Lead */}
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="font-bold text-green-600 text-sm italic">Qualified Lead</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full overflow-hidden flex items-center justify-center">
                    <svg className="w-8 h-8 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Sophie</div>
                    <div className="text-[10px] text-gray-500 leading-tight">Has recently been in a car accident and has symptoms of whiplash.</div>
                  </div>
                </div>
              </div>
              
              {/* Unqualified Lead */}
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <X className="w-4 h-4 text-red-500" />
                  <span className="font-bold text-red-500 text-sm italic">Unqualified Lead</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full overflow-hidden flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">James</div>
                    <div className="text-[10px] text-gray-500 leading-tight">Their incident occurred 3 years ago and they have little evidence.</div>
                  </div>
                </div>
              </div>
            </div>
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
