import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SmsConsentPage = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Stay Updated with Gold Rush AI</h1>
          <p className="text-gray-600 mb-8">
            Sign up to receive important updates from Gold Rush AI.
          </p>

          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <label className="flex items-start gap-3">
                <input type="checkbox" name="transactionalConsent" className="mt-1 h-4 w-4" />
                <span>
                  <span className="block text-base font-semibold text-gray-900 mb-2">
                    SMS Notifications (Transactional)
                  </span>
                  <span className="block text-sm text-gray-700">
                    By checking this box and submitting this form, you consent to receive transactional text messages from Gold Rush AI, including appointment reminders, account notifications, and service updates.
                  </span>
                  <span className="block text-sm text-gray-700 mt-2">Reply STOP to opt out.</span>
                  <span className="block text-sm text-gray-700">Reply HELP for help.</span>
                  <span className="block text-sm text-gray-700">Message and data rates may apply.</span>
                  <span className="block text-sm text-gray-700">Message frequency may vary.</span>
                </span>
              </label>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <label className="flex items-start gap-3">
                <input type="checkbox" name="marketingConsent" className="mt-1 h-4 w-4" />
                <span>
                  <span className="block text-base font-semibold text-gray-900 mb-2">
                    SMS Marketing Messages
                  </span>
                  <span className="block text-sm text-gray-700">
                    By checking this box, you agree to receive marketing text messages from Gold Rush AI. Message frequency may vary. Reply STOP to unsubscribe. Message and data rates may apply.
                  </span>
                </span>
              </label>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p>
                View our Terms and Conditions:{" "}
                <a
                  href="https://agent-698bc5e50296b67ce2c9f55b--gai-solutions.netlify.app/terms"
                  className="underline hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms
                </a>
              </p>
              <p>
                View our Privacy Policy:{" "}
                <a
                  href="https://agent-698bc5e50296b67ce2c9f55b--gai-solutions.netlify.app/privacy"
                  className="underline hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </a>
              </p>
              <p className="pt-2 text-gray-600">
                Gold Rush AI does not sell, rent, or share mobile phone numbers or SMS consent with third parties for promotional or marketing purposes.
              </p>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#f7d046] to-[#d4af37] hover:from-[#f2c14e] hover:to-[#c89a1c] text-gray-900 px-6 py-2.5 rounded-lg font-medium transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SmsConsentPage;
