import React from "react";

const Header = () => {
  const handleNotification = () => {
    alert("No new notifications at the moment!");
  };

  return (
    <header className="header-gradient shadow-lg p-8 flex justify-between items-center w-full max-w-8xl rounded-lg mt-4 relative overflow-hidden">
      <div className="header-decoration"></div>
      <div className="header-content flex justify-between items-center w-full">
        <div className="header-left flex items-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse opacity-20"></div>
            <img
              src="/addimage/logo.png"
              alt="Logo"
              className="w-16 h-16 animate-fadeIn relative z-10"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 animate-slideInLeft">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Welcome to Your Healing Space
              </span>
            </h1>
            <div className="flex items-center space-x-4 text-lg animate-slideInLeft delay-100">
              <span className="animated-text bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text font-bold text-2xl">
                PLAY
              </span>
              <span className="text-gray-400">|</span>
              <span className="animated-text bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-bold text-2xl">
                HEAL
              </span>
              <span className="text-gray-400">|</span>
              <span className="animated-text bg-gradient-to-r from-pink-600 to-red-600 text-transparent bg-clip-text font-bold text-2xl">
                THRIVE
              </span>
            </div>
          </div>
        </div>

        <div className="header-right flex items-center gap-6">
          <button onClick={handleNotification} className="relative group">
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600 text-3xl p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 group-hover:scale-110">
              🔔
            </span>
          </button>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md font-medium hover:shadow-lg hover:-translate-y-1">
              Login
            </button>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md font-medium hover:shadow-lg hover:-translate-y-1">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
