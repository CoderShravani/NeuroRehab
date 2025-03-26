import React, { useState, useRef, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);

  const testimonials = [
    {
      initials: "SM",
      name: "Sarah Mitchell",
      condition: "Stroke Recovery",
      text: "The personalized exercises and progress tracking have made my recovery journey so much more effective. I've seen remarkable improvements in my mobility. The platform's comprehensive approach to rehabilitation has been truly transformative.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      initials: "MR",
      name: "Michael Roberts",
      condition: "TBI Patient",
      text: "The interactive games make therapy engaging and fun while helping me improve my cognitive abilities. It's been a game-changer in my recovery. The real-time feedback and progress tracking keep me motivated.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      initials: "JD",
      name: "James Davis",
      condition: "Spinal Injury",
      text: "The virtual consultations with specialists have been invaluable. The platform's comprehensive approach to rehabilitation is truly impressive. The personalized exercise programs have helped me regain strength and mobility.",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      initials: "AL",
      name: "Amy Lee",
      condition: "Multiple Sclerosis",
      text: "The flexibility of the program allows me to maintain my therapy schedule despite my varying energy levels. The progress tracking keeps me motivated, and the community support is incredibly encouraging.",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      initials: "RK",
      name: "Robert King",
      condition: "Parkinson's Disease",
      text: "The balance exercises and cognitive training have significantly improved my daily activities. The support from the community is incredibly encouraging, and the progress tracking helps me stay motivated.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      initials: "MP",
      name: "Maria Patel",
      condition: "Cerebral Palsy",
      text: "The adaptive exercises have helped me build strength and coordination. The progress tracking shows my improvement over time, and the virtual consultations with specialists are incredibly helpful.",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      initials: "TW",
      name: "Thomas Wright",
      condition: "Traumatic Brain Injury",
      text: "The cognitive exercises and memory games have helped me regain focus and concentration. The platform's user-friendly interface makes it easy to stay consistent, and the progress tracking is motivating.",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
    },
  ];

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector(".testimonial-card");
        if (card) {
          setCardWidth(card.offsetWidth);
        }
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const touchStart = (e) => {
    setIsDragging(true);
    setStartPos(getPositionX(e));
    containerRef.current.style.cursor = "grabbing";
    containerRef.current.style.transition = "none";
  };

  const touchEnd = () => {
    setIsDragging(false);
    containerRef.current.style.cursor = "grab";
    containerRef.current.style.transition = "transform 0.3s ease-out";

    const movedBy = currentTranslate - prevTranslate;
    if (Math.abs(movedBy) > cardWidth * 0.2) {
      if (movedBy < 0) {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
    }
    setCurrentTranslate(prevTranslate);
    setSliderPosition();
  };

  const touchMove = (e) => {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      setCurrentTranslate(prevTranslate + currentPosition - startPos);
      setSliderPosition();
    }
  };

  const getPositionX = (e) => {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  };

  const setSliderPosition = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    updateTestimonials();
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    updateTestimonials();
  };

  const updateTestimonials = () => {
    const offset = -currentIndex * cardWidth;
    setCurrentTranslate(offset);
    setPrevTranslate(offset);
    setSliderPosition();
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Success Stories
        </h2>
        <div className="testimonial-slider relative overflow-hidden">
          <div
            ref={containerRef}
            className="testimonial-container flex transition-transform duration-500 ease-in-out"
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
            onTouchMove={touchMove}
            onMouseDown={touchStart}
            onMouseUp={touchEnd}
            onMouseLeave={touchEnd}
            onMouseMove={touchMove}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card w-full flex-shrink-0 bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-20 h-20 ${testimonial.bgColor} rounded-full flex items-center justify-center`}
                  >
                    <span className={`${testimonial.textColor} text-3xl`}>
                      {testimonial.initials}
                    </span>
                  </div>
                  <div className="ml-8">
                    <h3 className="font-semibold text-gray-800 text-2xl">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.condition}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-xl leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="mt-8 flex items-center">
                  <span className="text-yellow-400 text-3xl">★★★★★</span>
                  <span className="text-sm text-gray-600 ml-4">5.0</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition-colors z-10"
          >
            <svg
              className="w-8 h-8 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition-colors z-10"
          >
            <svg
              className="w-8 h-8 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  updateTestimonials();
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
