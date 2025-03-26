import React from "react";

const DescriptionSection = () => {
  return (
    <div className="description-section w-full max-w-6xl mt-6 mb-8">
      <div className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="description-content space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 animate-fadeIn">
              Your Journey to Recovery Starts Here
            </h2>
            <p className="text-gray-600 leading-relaxed animate-fadeIn">
              Welcome to Neuro Rehab, your comprehensive platform for
              neurological rehabilitation and recovery. We combine cutting-edge
              technology with evidence-based therapeutic approaches to provide
              personalized care and support throughout your healing journey.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✓</span>
                <span className="text-gray-700">Personalized Care</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✓</span>
                <span className="text-gray-700">Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✓</span>
                <span className="text-gray-700">Progress Tracking</span>
              </div>
            </div>
          </div>
          <div className="description-image relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg transform rotate-3"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-md transform -rotate-2">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Evidence-Based Approach
                  </h3>
                  <p className="text-sm text-gray-700">
                    Our rehabilitation programs are developed by leading
                    neurological experts and backed by scientific research.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">
                    Comprehensive Support
                  </h3>
                  <p className="text-sm text-gray-700">
                    From initial assessment to recovery milestones, we provide
                    continuous guidance and support throughout your journey.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Interactive Learning
                  </h3>
                  <p className="text-sm text-gray-700">
                    Engage with interactive exercises and real-time feedback to
                    enhance your rehabilitation experience.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">
                    Community Support
                  </h3>
                  <p className="text-sm text-gray-700">
                    Connect with others on similar recovery journeys and share
                    experiences in a supportive environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
