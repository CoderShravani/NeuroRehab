import React from "react";
import Header from "./components/Header";
import DescriptionSection from "./components/DescriptionSection";
import MainContent from "./components/MainContent";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <div className="animated-background"></div>
      <Header />
      <DescriptionSection />
      <MainContent />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
