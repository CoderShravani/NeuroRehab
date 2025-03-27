import React from "react";
import "../styles/Header.css";

const Header = () => {
  const handleNotification = () => {
    alert("No new notifications at the moment!");
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <div className="logo-pulse"></div>
          <img src="/addimage/logo.png" alt="Logo" className="logo" />
        </div>
        <div>
          <h1 className="header-title">
            <span className="gradient-text">Welcome to Your Healing Space</span>
          </h1>
          <div className="header-subtitle">
            <span className="animated-text gradient-text-blue">PLAY</span>
            <span className="text-gray-400">|</span>
            <span className="animated-text gradient-text-purple">HEAL</span>
            <span className="text-gray-400">|</span>
            <span className="animated-text gradient-text-pink">THRIVE</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <button className="notification-button" onClick={handleNotification}>
          <div className="notification-dot"></div>
          <span className="notification-icon">🔔</span>
        </button>
        <div className="button-group">
          <button className="button button-primary">Login</button>
          <button className="button button-success">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
