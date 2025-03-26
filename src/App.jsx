import React from "react";
import Header from "./components/Header";
import DescriptionSection from "./components/DescriptionSection";
import MainContent from "./components/MainContent";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 min-h-screen flex flex-col items-center">
      <div className="animated-background"></div>

      <Header />
      <DescriptionSection />
      <MainContent />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
