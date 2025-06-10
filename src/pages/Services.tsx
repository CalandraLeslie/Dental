import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/services.css';

// Define animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8 
    }
  }
};

interface ServiceType {
  id: number;
  title: string;
  icon: string;
  image: string;
  category: string;
  highlights: string[];
  description: string;
}

// Standalone Service Modal Component
const ServiceModal: React.FC<{
  service: ServiceType;
  onClose: () => void;
}> = ({ service, onClose }) => {
  // Add ESC key handler for closing the modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);
  
  // Handle content click to prevent closing
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  return (
    <div 
      className="service-modal-overlay"
      onClick={onClose}
    >
      <div 
        className="service-modal-content"
        onClick={handleContentClick}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <span aria-hidden="true">×</span>
        </button>
        
        <div className="modal-header">
          <img src={service.image} alt={service.title} />
          <div className="modal-title-container">
            <h2>{service.title}</h2>
          </div>
        </div>
        
        <div className="modal-body">
          <p className="service-description">{service.description}</p>
          
          <h3>Our Services Include:</h3>
          <ul className="service-highlights-modal">
            {service.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        
        <div className="modal-footer">
          <Link 
            to="/appointment" 
            className="btn btn-primary"
            onClick={(e) => e.stopPropagation()}
          >
            Book Appointment
          </Link>
          <button 
            type="button"
            className="btn btn-outline" 
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Add this helper component to display appropriate content for each service type
const ServiceContent: React.FC<{serviceType: string}> = ({ serviceType }) => {
  switch(serviceType) {
    case 'preventive':
      return (
        <>
          <p>Regular check-ups and preventive care to maintain your oral health.</p>
          <ul className="service-highlights-preview">
            <li>Comprehensive dental exams</li>
            <li>Professional cleanings</li>
            <li>Fluoride treatments</li>
          </ul>
        </>
      );
    case 'restorative':
      return (
        <>
          <p>Solutions to repair damaged or missing teeth and restore function.</p>
          <ul className="service-highlights-preview">
            <li>Dental fillings</li>
            <li>Crowns and bridges</li>
            <li>Dental implants</li>
          </ul>
        </>
      );
    case 'cosmetic':
      return (
        <>
          <p>Enhance the appearance of your smile with our cosmetic treatments.</p>
          <ul className="service-highlights-preview">
            <li>Professional teeth whitening</li>
            <li>Porcelain veneers</li>
            <li>Smile makeovers</li>
          </ul>
        </>
      );
    case 'specialty':
      return (
        <>
          <p>Advanced dental services for more complex oral health needs.</p>
          <ul className="service-highlights-preview">
            <li>Root canal therapy</li>
            <li>Periodontal treatment</li>
            <li>Oral surgery</li>
          </ul>
        </>
      );
    default:
      return <p>Learn more about our dental services.</p>;
  }
};

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [activeCategory] = useState<string>('all'); // Changed to string type to match category values

  // Services data with professional dental images and icons
  const services = [
    {
      id: 1,
      title: 'Preventive Dentistry',
      icon: '/images/services/icon-preventive.svg',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'preventive',
      highlights: [
        'Regular Cleanings: Professional cleaning to remove plaque and tartar buildup.',
        'Comprehensive Exams: Thorough examination to identify potential issues.',
        'Dental Sealants: Protective coating to prevent decay in back teeth.',
        'Fluoride Treatments: Strengthen tooth enamel and help prevent cavities.',
      ],
      description: 'Our preventive dentistry services focus on maintaining your oral health and preventing problems before they start. Regular check-ups allow us to detect issues early and provide appropriate treatment. With professional cleanings, fluoride treatments, and dental sealants, we help protect your teeth from decay and disease for a lifetime of healthy smiles.'
    },
    {
      id: 2,
      title: 'Restorative Dentistry',
      icon: '/images/services/icon-restorative.svg',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'restorative',
      highlights: [
        'Tooth-Colored Fillings: Natural-looking composite fillings for cavities.',
        'Crowns and Bridges: Custom-made porcelain crowns and bridges.',
        'Dental Implants: Permanent tooth replacement option.',
        'Dentures: Full or partial dentures to replace missing teeth.',
      ],
      description: 'When teeth become damaged or lost, our restorative dentistry services can help bring back both function and aesthetics. We use modern materials and techniques to create natural-looking restorations that blend seamlessly with your smile. From simple fillings to complex implant restorations, our team has the expertise to handle all your needs with precision and care.'
    },
    {
      id: 3,
      title: 'Cosmetic Dentistry',
      icon: '/images/services/icon-cosmetic.svg',
      image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cosmetic',
      highlights: [
        'Professional Teeth Whitening: In-office and take-home options.',
        'Porcelain Veneers: Thin shells to cover front surface of teeth.',
        'Dental Bonding: Tooth-colored resin to repair minor damage.',
        'Smile Makeovers: Comprehensive treatment plan for your dream smile.',
      ],
      description: 'Our cosmetic dentistry services are designed to enhance the appearance of your smile while maintaining optimal oral health. From professional whitening to complete smile makeovers, we can help you achieve the confident, radiant smile you\'ve always wanted. Our team takes a personalized approach to cosmetic dentistry, considering your facial features, skin tone, and personal preferences.'
    },
    {
      id: 4,
      title: 'Specialty Services',
      icon: '/images/services/icon-specialty.svg',
      image: 'https://images.pexels.com/photos/4269696/pexels-photo-4269696.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'specialty',
      highlights: [
        'Root Canal Therapy: Save infected or severely damaged teeth.',
        'Orthodontics: Traditional braces and clear aligners.',
        'TMJ/TMD Treatment: Relief from jaw pain and related symptoms.',
        'Pediatric Dentistry: Specialized care for children.',
      ],
      description: 'Our specialty services address complex dental issues that require advanced training and techniques. We provide gentle root canal therapy to save infected teeth, orthodontic treatments for straighter smiles, TMJ/TMD therapy for jaw pain relief, and child-friendly dental care. With our comprehensive approach, you can receive all your specialized dental care in one convenient location.'
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  // Check for elements to animate as they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && (entry.target as HTMLElement).dataset.serviceId) {
          // Animation can be handled directly here if needed
          const element = entry.target as HTMLElement;
          element.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.service-card').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, [filteredServices]);

  const openServiceModal = (service: ServiceType) => {
    setSelectedService(service);
    setIsModalOpen(true);
    // Disable body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    // Ensure body scrolling is restored
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden'; // Keep horizontal scrolling disabled
    document.body.style.overflowY = 'auto'; // Explicitly enable vertical scrolling
  };

  return (
    <div className="services-page">
      {/* Hero Section with blue overlay - Emergency Focus */}
      <section className="services-hero">
        <img 
          src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="Emergency dental services"
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Emergency Dental Care
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lead"
          >
            24-Hour Dental Services When You Need It Most
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="hero-emergency-cta"
          >
            <a href="tel:5551234567" className="btn btn-emergency">Call Now: (555) 123-4567</a>
          </motion.div>
        </div>
      </section>

      {/* Display all services directly after filter tabs - removed heading */}
      <section className="services-main">
        <div className="container">
          <div className="services-grid responsive-grid">
            {services.map(service => (
              <div 
                key={service.id}
                className="service-card" 
                data-category={service.category}
                onClick={() => openServiceModal(service)}
              >
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <ServiceContent serviceType={service.category} />
                  <button className="btn btn-primary">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtered services display */}
      {activeCategory !== 'all' && (
        <div data-category={activeCategory}>
          <div className="container">
            <div className="services-grid">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="service-card"
                  data-service-id={service.id}
                  onClick={() => openServiceModal(service)}
                >
                  <div className="service-card-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <ServiceContent serviceType={service.category} />
                    <button className="btn btn-primary">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Emergency services section - Enhanced prominence */}
      <section className="emergency-services">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-text">
              <h2>24/7 Emergency Dental Care</h2>
              <p>Dental emergencies require immediate attention. Our dedicated team is available 24 hours a day, 7 days a week to provide prompt and effective care when you need it most.</p>
              <ul className="emergency-list">
                <li>Severe toothache or dental pain</li>
                <li>Broken, chipped, or knocked-out teeth</li>
                <li>Lost crowns, fillings, or dental work</li>
                <li>Oral injuries and facial trauma</li>
                <li>Dental infections and severe swelling</li>
                <li>Bleeding from the mouth that won't stop</li>
              </ul>
              <div className="emergency-contact">
                <h3>24/7 Emergency Hotline</h3>
                <a href="tel:5551234567" className="phone-number">(555) 123-4567</a>
                <p>Our emergency team is standing by to assist you day or night.</p>
                <div className="emergency-buttons">
                  <Link to="/appointment" className="btn btn-primary">Book Emergency Visit</Link>
                  <Link to="/contact" className="btn btn-outline">Contact Information</Link>
                </div>
              </div>
            </div>
            <div className="emergency-image">
              <img 
                src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Emergency Dental Care" 
              />
              <div className="emergency-badge">
                <span>24/7</span>
                <small>Emergency Care</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Experience Quality Dental Care?</h2>
          <p>Schedule your appointment today and take the first step toward a healthier smile.</p>
          <Link to="/appointment" className="btn btn-primary">Book Your Appointment</Link>
        </div>
      </section>

      {/* Modal for service details */}
      {isModalOpen && selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default Services;