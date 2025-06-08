import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TestimonialSlider.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient since 2020",
    image: "/images/testimonials/patient1.jpg",
    quote: "I've always been anxious about dental visits, but the team here made me feel completely at ease. The care and attention to detail is exceptional.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Patient since 2019",
    image: "/images/testimonials/patient2.jpg",
    quote: "The modern technology they use makes every procedure quick and painless. Best dental experience I've ever had!",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Patient since 2021",
    image: "/images/testimonials/patient3.jpg",
    quote: "I came in for a complex procedure and was amazed by how smooth everything went. The staff is knowledgeable and genuinely caring.",
    rating: 4
  }
];

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial-container">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="testimonial-card"
          >
            <div className="testimonial-quote">
              <svg viewBox="0 0 24 24" className="quote-icon">
                <path d="M10 10.5c0 1.3-0.9 2.5-2.1 2.8-0.2 0-0.5 0.1-0.7 0.1-2.1 0-3.8-1.7-3.8-3.8 0-1.5 0.8-2.8 2.2-3.4 0.2-0.1 0.4-0.2 0.6-0.2 0 0 0 0 0 0 0.2-0.1 0.5-0.1 0.7-0.1 0.2 0 0.5 0 0.7 0.1 0.2 0 0.4 0.1 0.5 0.2 0.2 0.1 0.4 0.2 0.6 0.3 0.2 0.1 0.4 0.3 0.6 0.5 0.1 0.2 0.3 0.3 0.4 0.5 0.1 0.2 0.2 0.4 0.3 0.6 0.1 0.2 0.1 0.4 0.1 0.6 0 0.2 0 0.5 0 0.7z"></path>
                <path d="M22.2 10.5c0 1.3-0.9 2.5-2.1 2.8-0.2 0-0.5 0.1-0.7 0.1-2.1 0-3.8-1.7-3.8-3.8 0-1.5 0.8-2.8 2.2-3.4 0.2-0.1 0.4-0.2 0.6-0.2 0 0 0 0 0 0 0.2-0.1 0.5-0.1 0.7-0.1 0.2 0 0.5 0 0.7 0.1 0.2 0 0.4 0.1 0.5 0.2 0.2 0.1 0.4 0.2 0.6 0.3 0.2 0.1 0.4 0.3 0.6 0.5 0.1 0.2 0.3 0.3 0.4 0.5 0.1 0.2 0.2 0.4 0.3 0.6 0.1 0.2 0.1 0.4 0.1 0.6 0 0.2 0 0.5 0 0.7z"></path>
              </svg>
              <p>{testimonials[current].quote}</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonials[current].rating ? "star filled" : "star"}>★</span>
                ))}
              </div>
            </div>
            <div className="testimonial-author">
              <img src={testimonials[current].image} alt={testimonials[current].name} />
              <div>
                <h4>{testimonials[current].name}</h4>
                <p>{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="testimonial-controls">
        <button onClick={prevTestimonial} className="control-btn">
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </button>
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
            />
          ))}
        </div>
        <button onClick={nextTestimonial} className="control-btn">
          <svg viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;