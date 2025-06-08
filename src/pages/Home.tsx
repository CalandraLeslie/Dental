import React, { useState, useEffect } from 'react';
import Button from './Button'; // Adjust the import path as necessary
import './home.css';

const Home: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4148/4148540.png",
      title: "Quality Care",
      description: "We provide top-notch dental services using the latest techniques and equipment."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3636/3636370.png",
      title: "Modern Facilities",
      description: "Our clinic is equipped with state-of-the-art technology for the best patient experience."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
      title: "Patient Comfort",
      description: "Your comfort is our priority. We ensure a relaxing and stress-free environment."
    }
  ];

  // Auto-rotate features every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

      {/* Features Section - Rotating carousel */}
      <section className="features-section">
        <div className="container">
          <div className="features-carousel">
            <div className="features-track" style={{ transform: `translateX(-${activeFeature * 33.33}%)` }}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-card"
                >
                  <img src={feature.icon} alt={feature.title} className="feature-icon" />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="carousel-indicators">
            {features.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeFeature ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;