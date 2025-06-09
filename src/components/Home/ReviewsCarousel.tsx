import React, { useState, useEffect } from 'react';
import './ReviewsCarousel.css';

// Reviews data with customer images
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "I've been terrified of dentists my whole life, but Dr. Miller made me feel so comfortable. The emergency care I received was exceptional and pain-free!",
    date: "March 15, 2025"
  },
  {
    id: 2,
    name: "Michael Thompson",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "The entire staff is friendly and professional. My children actually look forward to their dental appointments! Their preventive care program has kept our family cavity-free for years.",
    date: "January 8, 2025"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "I had my teeth whitening done here and the results are amazing! The procedure was explained thoroughly and the staff made sure I was comfortable throughout.",
    date: "February 22, 2025"
  },
  {
    id: 4,
    name: "David Wilson",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "After breaking a tooth during dinner, I called their emergency line. They got me in first thing the next morning and fixed it perfectly. Can't recommend them enough!",
    date: "April 3, 2025"
  },
  {
    id: 5,
    name: "Jennifer Parker",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "The Invisalign treatment I received has completely transformed my smile. The team was supportive throughout the entire process, and I couldn't be happier with the results!",
    date: "May 10, 2025"
  }
];

const ReviewsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate through reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle manual navigation
  const goToReview = (index: number) => {
    setActiveIndex(index);
  };
  
  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };
  
  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="section-title">What Our Patients Say</h2>
        
        <div className="reviews-carousel">
          <div className="reviews-slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-image">
                    <img src={review.image} alt={review.name} />
                  </div>
                  <div className="reviewer-info">
                    <h3>{review.name}</h3>
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                    <p className="review-date">{review.date}</p>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
          
          <div className="carousel-controls">
            <div className="carousel-dots">
              {reviews.map((_, index) => (
                <button 
                  key={index} 
                  className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToReview(index)}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="carousel-arrows">
              <button 
                className="carousel-arrow prev"
                onClick={() => goToReview((activeIndex - 1 + reviews.length) % reviews.length)}
                aria-label="Previous review"
              >
                ←
              </button>
              <button 
                className="carousel-arrow next"
                onClick={() => goToReview((activeIndex + 1) % reviews.length)}
                aria-label="Next review"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;