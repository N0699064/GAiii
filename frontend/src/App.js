import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ComparisonSection from "./components/ComparisonSection";
import IntegrationSection from "./components/IntegrationSection";
import FeaturesSection from "./components/FeaturesSection";
import ProcessSection from "./components/ProcessSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import BookingPage from "./components/BookingPage";
import SmsConsentPage from "./components/SmsConsentPage";
import PrivacyPage from "./components/PrivacyPage";
import TermsPage from "./components/TermsPage";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ComparisonSection />
      <IntegrationSection />
      <FeaturesSection />
      <ProcessSection />
      <BookingSection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/book-demo" element={<BookingPage />} />
          <Route path="/sms-consent" element={<SmsConsentPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
