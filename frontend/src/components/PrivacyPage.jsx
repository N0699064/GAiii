import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7e0] to-white">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img
                src="/gold-head-logo.png"
                alt="GoldrushAi"
                className="w-full h-full object-contain scale-110"
              />
            </div>
            <span className="font-bold text-lg text-gray-900">GoldrushAi</span>
          </a>

          <div className="w-24"></div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: March 7, 2026</p>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-2">Information We Collect</h2>
              <p>
                We may collect your name, email address, phone number, and any information you submit through our forms
                or messages so we can provide requested services and support.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-2">How We Use Information</h2>
              <p>
                We use your information to communicate with you, schedule and provide services, improve our offerings,
                and send transactional or marketing messages when consent is provided.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-2">SMS Data and Consent</h2>
              <p>
                Gold Rush AI does not sell, rent, or share mobile phone numbers or SMS consent with third parties for
                promotional or marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-2">Your Choices</h2>
              <p>
                You may opt out of marketing messages at any time by replying STOP. For assistance, reply HELP.
                Message and data rates may apply.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-2">Contact</h2>
              <p>
                If you have privacy questions, please contact us through the contact options available on our website.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
