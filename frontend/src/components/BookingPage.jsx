import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate();
  const googleCalendarLink = "https://calendar.app.google/GChpUApsh7vgbFEv7";

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="bookingPageLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <path d="M20 5 L35 30 L5 30 Z" fill="url(#bookingPageLogo)" />
                <path d="M20 12 L28 26 L12 26 Z" fill="white" opacity="0.3" />
              </svg>
            </div>
            <span className="font-bold text-lg text-gray-900">FutureFlow AI</span>
          </a>
          
          <div className="w-24"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Book a Free Introduction Call
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule a 30-minute call to learn how FutureFlow AI can help automate your lead nurturing and save you time.
          </p>
        </div>

        {/* Calendar Embed */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <iframe
            src={googleCalendarLink}
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a meeting with FutureFlow AI"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
