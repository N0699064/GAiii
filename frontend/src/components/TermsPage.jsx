import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsPage = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Terms & Conditions</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: March 7, 2026</p>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-2">Acceptance of Terms</h2>
              <p>
                By using this website, you agree to these Terms & Conditions and our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-2">Use of Services</h2>
              <p>
                You agree to use our website and services only for lawful purposes and to provide accurate information
                when submitting forms.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-2">SMS Communications</h2>
              <p>
                If you opt in, you may receive transactional or marketing text messages from Gold Rush AI. Reply STOP to
                opt out and HELP for help. Message and data rates may apply. Message frequency may vary.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-2">Intellectual Property</h2>
              <p>
                All website content is owned by or licensed to Gold Rush AI and may not be copied, distributed, or used
                without permission.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-2">Limitation of Liability</h2>
              <p>
                Gold Rush AI is not liable for indirect or consequential damages arising from use of this website,
                except where prohibited by law.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;
