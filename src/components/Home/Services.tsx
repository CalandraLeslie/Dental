import React from 'react';
import { Link } from 'react-router-dom';

// Define proper interface for your service items
interface ServiceItem {
  id: number;
  title: string; // Make sure to use 'title' instead of 'name'
  description: string;
  icon: string;
}

const Services: React.FC = () => {
  // Fix these objects by changing 'name' to 'title'
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Preventive Care", // Changed from 'name' to 'title'
      description: "Regular check-ups and cleanings to maintain oral health",
      icon: "tooth-icon"
    },
    {
      id: 2,
      title: "Restorative Dentistry", // Changed from 'name' to 'title'
      description: "Fillings, crowns, and bridges to restore function and appearance",
      icon: "restore-icon"
    },
    {
      id: 3,
      title: "Cosmetic Services", // Changed from 'name' to 'title'
      description: "Whitening, veneers, and other treatments to enhance your smile",
      icon: "smile-icon"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/services" className="service-link">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;