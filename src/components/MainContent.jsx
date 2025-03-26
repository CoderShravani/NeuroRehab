import React, { useState } from "react";

const MainContent = () => {
  const [selectedPain, setSelectedPain] = useState(null);

  const painLevels = [
    { emoji: "😊", value: 0, label: "No Pain" },
    { emoji: "🙂", value: 2, label: "Mild Discomfort" },
    { emoji: "😐", value: 4, label: "Moderate Pain" },
    { emoji: "😕", value: 6, label: "Severe Pain" },
    { emoji: "😟", value: 8, label: "Very Severe Pain" },
    { emoji: "😭", value: 10, label: "Unbearable Pain" },
  ];

  const handlePainSelection = (value) => {
    setSelectedPain(value);
  };

  return (
    <div className="content-wrapper w-full max-w-6xl mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
        Let's Begin Your Journey to Recovery!
      </h2>

      {/* Feature Buttons */}
      <div className="grid grid-cols-2 gap-8 mt-6">
        <button
          className="grid-item rounded-xl hover:scale-105 transition shadow-lg"
          style={{ backgroundImage: "url('/addimage/rehab-icon.png')" }}
        >
          <div className="grid-content">
            <h3 className="feature-title">Rehabilitation Focus</h3>
            <p className="feature-description">
              Personalized exercises to aid your recovery. Our programs are
              tailored to your needs, ensuring a steady and safe rehabilitation
              journey. Follow guided sessions designed by experts to improve
              mobility and strength.
            </p>
          </div>
        </button>
        <button
          className="grid-item rounded-xl hover:scale-105 transition shadow-lg"
          style={{ backgroundImage: "url('/addimage/games-icon.png')" }}
        >
          <div className="grid-content">
            <h3 className="feature-title">Games</h3>
            <p className="feature-description">
              Engaging cognitive and physical therapy games. Improve memory,
              motor skills, and coordination while having fun. Designed for all
              ages and ability levels, these games support your neuroplasticity
              and rehabilitation.
            </p>
          </div>
        </button>
        <button
          className="grid-item rounded-xl hover:scale-105 transition shadow-lg"
          style={{ backgroundImage: "url('/addimage/Analytics.png')" }}
        >
          <div className="grid-content">
            <h3 className="feature-title">Analytics</h3>
            <p className="feature-description">
              Track your progress with real-time insights. Get personalized
              reports and data-driven recommendations to enhance your therapy
              outcomes. Monitor improvements, identify patterns, and stay on
              track with your recovery plan.
            </p>
          </div>
        </button>
        <button
          className="grid-item rounded-xl hover:scale-105 transition shadow-lg"
          style={{ backgroundImage: "url('/addimage/doctor-logo.png')" }}
        >
          <div className="grid-content">
            <h3 className="feature-title">Connect with Doctor</h3>
            <p className="feature-description">
              Get expert advice from healthcare professionals. Schedule virtual
              consultations and receive tailored medical guidance to support
              your recovery journey, ensuring you stay on the right path.
            </p>
          </div>
        </button>
      </div>

      {/* Pain Scale */}
      <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
          How are you feeling today?
        </h2>
        <div className="flex justify-between flex-wrap gap-4">
          {painLevels.map((level) => (
            <button
              key={level.value}
              onClick={() => handlePainSelection(level.value)}
              className={`pain-scale-button text-center p-4 rounded-lg transition ${
                selectedPain === level.value
                  ? "bg-purple-500 text-white"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <p className="text-2xl mb-2">{level.emoji}</p>
              <p className="font-semibold">{level.value}</p>
              <p className="text-sm">{level.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Healing Highlights */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Healing Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button
            className="grid-item rounded-xl hover:scale-105 transition shadow-lg"
            style={{ backgroundImage: "url('/addimage/blogs-icon.png')" }}
          >
            <div className="grid-content">
              <h3 className="feature-title">Health Blogs</h3>
              <p className="feature-description">
                Explore insightful articles on recovery, wellness, and
                rehabilitation. Stay updated with expert advice, success
                stories, and the latest trends in neuro rehab.
              </p>
            </div>
          </button>
          <button
            className="grid-item rounded-xl hover:scale-105 transition shadow-lg"
            style={{ backgroundImage: "url('/addimage/videos-logo.png')" }}
          >
            <div className="grid-content">
              <h3 className="feature-title">Watch Health Videos</h3>
              <p className="feature-description">
                Watch informative and engaging videos covering therapy
                techniques, patient experiences, and expert tips to support your
                healing journey.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
