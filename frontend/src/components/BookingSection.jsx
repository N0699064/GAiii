import React from 'react';
import { Clock, Globe, AlignLeft } from 'lucide-react';

const BookingSection = () => {
  const googleCalendarLink = "https://calendar.app.google/GChpUApsh7vgbFEv7";

  return (
    <section id="booking" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Book a Free Introduction Call
        </h2>

        {/* Booking Widget */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Left Side - Info */}
            <div className="md:col-span-2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">
              {/* Logo */}
              <div className="w-12 h-12 mb-4">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="bookingLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  <path d="M20 5 L35 30 L5 30 Z" fill="url(#bookingLogoGradient)" />
                  <path d="M20 12 L28 26 L12 26 Z" fill="white" opacity="0.3" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                FutureFlow AI - Introduction Call
              </h3>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>30 Mins</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span>Google Meet</span>
                </div>
                <div className="flex items-start gap-3">
                  <AlignLeft className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">
                      For Businesses Who Want To Save Time & Make More Money By Automating Lead Nurturing With AI Agents.
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      This is just a quick introduction to see if you would be a good fit for our solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Google Calendar Embed */}
            <div className="md:col-span-3 min-h-[500px]">
              <iframe
                src={googleCalendarLink}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ minHeight: '500px' }}
                title="Book a meeting"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
