import React from "react";
import "../styles/DescriptionSection.css";

const DescriptionSection = () => {
  return (
    <div className="description-section">
      <div className="description-container">
        <div className="description-gradient-bar"></div>
        <div className="description-grid">
          <div className="description-content">
            <h2 className="description-title">
              Your Journey to Recovery Starts Here
            </h2>
            <p className="description-text">
              Welcome to Neuro Rehab, your comprehensive platform for
              neurological rehabilitation and recovery. We combine cutting-edge
              technology with evidence-based therapeutic approaches to provide
              personalized care and support throughout your healing journey.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Personalized Care</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Expert Guidance</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Progress Tracking</span>
              </div>
            </div>
          </div>
          <div className="description-image">
            <div className="image-background"></div>
            <div className="image-content">
              <div className="feature-card blue">
                <h3 className="feature-card-title blue">
                  Evidence-Based Approach
                </h3>
                <p className="feature-card-text">
                  Our rehabilitation programs are developed by leading
                  neurological experts and backed by scientific research.
                </p>
              </div>
              <div className="feature-card purple">
                <h3 className="feature-card-title purple">
                  Comprehensive Support
                </h3>
                <p className="feature-card-text">
                  From initial assessment to recovery milestones, we provide
                  continuous guidance and support throughout your journey.
                </p>
              </div>
              <div className="feature-card green">
                <h3 className="feature-card-title green">
                  Interactive Learning
                </h3>
                <p className="feature-card-text">
                  Engage with interactive exercises and real-time feedback to
                  enhance your rehabilitation experience.
                </p>
              </div>
              <div className="feature-card orange">
                <h3 className="feature-card-title orange">Community Support</h3>
                <p className="feature-card-text">
                  Connect with others on similar recovery journeys and share
                  experiences in a supportive environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
