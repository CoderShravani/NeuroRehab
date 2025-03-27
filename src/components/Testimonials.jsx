import React, { useState, useEffect } from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const testimonials = [
    {
      initials: "SM",
      name: "Sarah Mitchell",
      condition: "Stroke Recovery",
      text: "The personalized exercises and progress tracking have made my recovery journey so much more effective. I've seen remarkable improvements in my mobility. The platform's comprehensive approach to rehabilitation has been truly transformative.",
      bgColor: "blue",
      textColor: "#1e40af",
    },
    {
      initials: "MR",
      name: "Michael Roberts",
      condition: "TBI Patient",
      text: "The interactive games make therapy engaging and fun while helping me improve my cognitive abilities. It's been a game-changer in my recovery. The real-time feedback and progress tracking keep me motivated.",
      bgColor: "purple",
      textColor: "#6d28d9",
    },
    {
      initials: "JD",
      name: "James Davis",
      condition: "Spinal Injury",
      text: "The virtual consultations with specialists have been invaluable. The platform's comprehensive approach to rehabilitation is truly impressive. The personalized exercise programs have helped me regain strength and mobility.",
      bgColor: "green",
      textColor: "#166534",
    },
    {
      initials: "AL",
      name: "Amy Lee",
      condition: "Multiple Sclerosis",
      text: "The flexibility of the program allows me to maintain my therapy schedule despite my varying energy levels. The progress tracking keeps me motivated, and the community support is incredibly encouraging.",
      bgColor: "red",
      textColor: "#991b1b",
    },
    {
      initials: "RK",
      name: "Robert King",
      condition: "Parkinson's Disease",
      text: "The balance exercises and cognitive training have significantly improved my daily activities. The support from the community is incredibly encouraging, and the progress tracking helps me stay motivated.",
      bgColor: "yellow",
      textColor: "#854d0e",
    },
    {
      initials: "MP",
      name: "Maria Patel",
      condition: "Cerebral Palsy",
      text: "The adaptive exercises have helped me build strength and coordination. The progress tracking shows my improvement over time, and the virtual consultations with specialists are incredibly helpful.",
      bgColor: "indigo",
      textColor: "#3730a3",
    },
    {
      initials: "TW",
      name: "Thomas Wright",
      condition: "Traumatic Brain Injury",
      text: "The cognitive exercises and memory games have helped me regain focus and concentration. The platform's user-friendly interface makes it easy to stay consistent, and the progress tracking is motivating.",
      bgColor: "pink",
      textColor: "#831843",
    },
  ];

  useEffect(() => {
    const updateCardWidth = () => {
      const card = document.querySelector(".testimonial-card");
      if (card) {
        setCardWidth(card.offsetWidth);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const touchStart = (event) => {
    setIsDragging(true);
    setStartPos(getPositionX(event));
    setCurrentTranslate(prevTranslate);
  };

  const touchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    if (Math.abs(movedBy) > cardWidth * 0.2) {
      if (movedBy < 0) {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
    }
    setCurrentTranslate(prevTranslate);
  };

  const touchMove = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      setCurrentTranslate(prevTranslate + currentPosition - startPos);
    }
  };

  const getPositionX = (event) => {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Success Stories</h2>
        <div className="testimonial-slider">
          <div
            className="testimonial-container"
            style={{
              transform: `translateX(${currentTranslate}px)`,
              transition: isDragging ? "none" : "transform 0.5s ease-in-out",
            }}
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
            onTouchMove={touchMove}
            onMouseDown={touchStart}
            onMouseUp={touchEnd}
            onMouseLeave={touchEnd}
            onMouseMove={touchMove}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-header">
                    <div
                      className={`testimonial-avatar ${testimonial.bgColor}`}
                      style={{ color: testimonial.textColor }}
                    >
                      {testimonial.initials}
                    </div>
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <p className="testimonial-condition">
                        {testimonial.condition}
                      </p>
                    </div>
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-rating">
                    <span className="rating-stars">★★★★★</span>
                    <span className="rating-value">5.0</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-nav prev" onClick={prevTestimonial}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="slider-nav next" onClick={nextTestimonial}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
