import React, { useState } from "react";

const MainContent = () => {
  const [selectedPain, setSelectedPain] = useState(null);

  const painScaleData = [
    { emoji: "😊", value: 0, label: "No Pain" },
    { emoji: "🙂", value: 2, label: "Mild Discomfort" },
    { emoji: "😐", value: 4, label: "Moderate Pain" },
    { emoji: "😕", value: 6, label: "Severe Pain" },
    { emoji: "😟", value: 8, label: "Very Severe Pain" },
    { emoji: "😭", value: 10, label: "Unbearable Pain" },
  ];

  const features = [
    {
      title: "Rehabilitation Focus",
      description:
        "Personalized exercises to aid your recovery. Our programs are tailored to your needs, ensuring a steady and safe rehabilitation journey. Follow guided sessions designed by experts to improve mobility and strength.",
      image: "rehab-icon.png",
    },
    {
      title: "Games",
      description:
        "Engaging cognitive and physical therapy games. Improve memory, motor skills, and coordination while having fun. Designed for all ages and ability levels, these games support your neuroplasticity and rehabilitation.",
      image: "games-icon.png",
    },
    {
      title: "Analytics",
      description:
        "Track your progress with real-time insights. Get personalized reports and data-driven recommendations to enhance your therapy outcomes. Monitor improvements, identify patterns, and stay on track with your recovery plan.",
      image: "Analytics.png",
    },
    {
      title: "Connect with Doctor",
      description:
        "Get expert advice from healthcare professionals. Schedule virtual consultations and receive tailored medical guidance to support your recovery journey, ensuring you stay on the right path.",
      image: "doctor-logo.png",
    },
  ];

  const healingHighlights = [
    {
      title: "Health Blogs",
      description:
        "Explore insightful articles on recovery, wellness, and rehabilitation. Stay updated with expert advice, success stories, and the latest trends in neuro rehab.",
      image: "blogs-icon.png",
    },
    {
      title: "Watch Health Videos",
      description:
        "Watch informative and engaging videos covering therapy techniques, patient experiences, and expert tips to support your healing journey.",
      image: "videos-logo.png",
    },
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
        {features.map((feature, index) => (
          <button
            key={index}
            className="grid-item rounded-xl hover:scale-105 transition shadow-lg"
            style={{ backgroundImage: `url('/addimage/${feature.image}')` }}
          >
            <div className="grid-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Pain Scale */}
      <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
          How are you feeling today?
        </h2>
        <div className="flex justify-between flex-wrap gap-4">
          {painScaleData.map((pain) => (
            <button
              key={pain.value}
              onClick={() => handlePainSelection(pain.value)}
              className={`pain-scale-button text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition ${
                selectedPain === pain.value ? "bg-purple-500 text-white" : ""
              }`}
            >
              <p className="text-2xl mb-2">{pain.emoji}</p>
              <p className="font-semibold">{pain.value}</p>
              <p className="text-sm text-gray-600">{pain.label}</p>
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
          {healingHighlights.map((highlight, index) => (
            <button
              key={index}
              className="grid-item rounded-xl hover:scale-105 transition shadow-lg"
              style={{ backgroundImage: `url('/addimage/${highlight.image}')` }}
            >
              <div className="grid-content">
                <h3 className="feature-title">{highlight.title}</h3>
                <p className="feature-description">{highlight.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
