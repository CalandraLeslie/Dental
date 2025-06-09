import React from 'react';
import Button from './Button'; // Adjust the import path as necessary
import ReviewsCarousel from '../components/Home/ReviewsCarousel';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Your Smile Deserves the Best Care</h1>
            <p className="hero-subtitle">Experience exceptional dental services in a comfortable environment</p>
            
            <div className="hero-buttons">
              <Button variant="primary" size="large" href="/appointment">Book Appointment</Button>
              <Button variant="primary" size="large" href="/services">Our Services</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Replacing the features carousel */}
      <ReviewsCarousel />

      {/* Other sections... */}
    </div>
  );
};

export default Home;