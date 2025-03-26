import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    initials: "SM",
    condition: "Stroke Recovery",
    text: "The personalized exercises and progress tracking have made my recovery journey so much more effective. I've seen remarkable improvements in my mobility. The platform's comprehensive approach to rehabilitation has been truly transformative.",
    color: "blue",
  },
  {
    id: 2,
    name: "Michael Roberts",
    initials: "MR",
    condition: "TBI Patient",
    text: "The interactive games make therapy engaging and fun while helping me improve my cognitive abilities. It's been a game-changer in my recovery. The real-time feedback and progress tracking keep me motivated.",
    color: "purple",
  },
  {
    id: 3,
    name: "James Davis",
    initials: "JD",
    condition: "Spinal Injury",
    text: "The virtual consultations with specialists have been invaluable. The platform's comprehensive approach to rehabilitation is truly impressive. The personalized exercise programs have helped me regain strength and mobility.",
    color: "green",
  },
  {
    id: 4,
    name: "Amy Lee",
    initials: "AL",
    condition: "Multiple Sclerosis",
    text: "The flexibility of the program allows me to maintain my therapy schedule despite my varying energy levels. The progress tracking keeps me motivated, and the community support is incredibly encouraging.",
    color: "red",
  },
  {
    id: 5,
    name: "Robert King",
    initials: "RK",
    condition: "Parkinson's Disease",
    text: "The balance exercises and cognitive training have significantly improved my daily activities. The support from the community is incredibly encouraging, and the progress tracking helps me stay motivated.",
    color: "yellow",
  },
  {
    id: 6,
    name: "Maria Patel",
    initials: "MP",
    condition: "Cerebral Palsy",
    text: "The adaptive exercises have helped me build strength and coordination. The progress tracking shows my improvement over time, and the virtual consultations with specialists are incredibly helpful.",
    color: "indigo",
  },
  {
    id: 7,
    name: "Thomas Wright",
    initials: "TW",
    condition: "Traumatic Brain Injury",
    text: "The cognitive exercises and memory games have helped me regain focus and concentration. The platform's user-friendly interface makes it easy to stay consistent, and the progress tracking is motivating.",
    color: "pink",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current?.children[0]) {
        setCardWidth(containerRef.current.children[0].offsetWidth);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPos(getPositionX(e));
    containerRef.current.style.transition = "none";
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      setCurrentTranslate(prevTranslate + currentPosition - startPos);
      containerRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
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
    containerRef.current.style.transform = `translateX(${prevTranslate}px)`;
  };

  const getPositionX = (e) => {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setCurrentTranslate(
      -((currentIndex + 1) % testimonials.length) * cardWidth
    );
    setPrevTranslate(-((currentIndex + 1) % testimonials.length) * cardWidth);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setCurrentTranslate(
      -((currentIndex - 1 + testimonials.length) % testimonials.length) *
        cardWidth
    );
    setPrevTranslate(
      -((currentIndex - 1 + testimonials.length) % testimonials.length) *
        cardWidth
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setCurrentTranslate(-index * cardWidth);
    setPrevTranslate(-index * cardWidth);
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card w-full flex-shrink-0 bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-20 h-20 bg-${testimonial.color}-100 rounded-full flex items-center justify-center`}
                  >
                    <span className={`text-${testimonial.color}-600 text-3xl`}>
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
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
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
