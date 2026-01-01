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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
