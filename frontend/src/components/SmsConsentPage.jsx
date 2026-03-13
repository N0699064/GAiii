import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SmsConsentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    smsConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
            <span className="font-bold text-lg text-gray-900">GS Gov Contracts</span>
          </a>

          <div className="w-24"></div>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Receive SMS from GS Gov Contracts
          </h1>
          <p className="text-gray-600 mb-8">
            Sign up to receive SMS notifications about business qualification and appointment scheduling from GS Gov Contracts.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600">
                  🇺🇸 +1
                </span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 987-6543"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 rounded-r-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="rounded-lg border-2 border-green-500 bg-green-50 p-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="smsConsent"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 text-green-500 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
                <span className="text-sm text-gray-800">
                  <span className="font-semibold">I agree to receive SMS messages from GS Gov Contracts</span> related to contractor qualification and appointment scheduling. Message frequency varies. Message & data rates may apply. Reply STOP to opt out, HELP for help.
                </span>
              </label>
            </div>

            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                {" | "}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms
                </a>
                {" | "}
                <a href="/sms opt-in consent.png" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View Workflow
                </a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Submit
            </button>

            <p className="text-sm text-gray-600 text-center">
              GS Gov Contracts does not sell, rent, or share mobile phone numbers or SMS consent with third parties for promotional or marketing purposes.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SmsConsentPage;
