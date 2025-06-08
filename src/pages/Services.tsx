import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';

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

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

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
          const id = parseInt((entry.target as HTMLElement).dataset.serviceId!);
          setAnimatedItems(prev => [...prev, id]);
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
      {/* Modern, appropriately sized hero section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p className="lead">Comprehensive dental care with a gentle approach</p>
          </div>
        </div>
      </section>

      {/* Service categories filter */}
      <section className="services-filter">
        <div className="container">
          <div className="filter-tabs">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('all')}
            >
              All Services
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'preventive' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('preventive')}
            >
              Preventive
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'restorative' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('restorative')}
            >
              Restorative
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'cosmetic' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('cosmetic')}
            >
              Cosmetic
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'specialty' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('specialty')}
            >
              Specialty
            </button>
          </div>
        </div>
      </section>

      {/* Services in horizontal rows */}
      <section className="services-rows">
        <div className="container">
          <h2 className="section-title">Our Dental Services</h2>
          
          {/* Display services in pairs on each row */}
          {filteredServices.length > 0 ? (
            <div className="services-rows-container">
              {/* First row - always showing 2 cards or placeholders */}
              <div className="service-row">
                {filteredServices.slice(0, 2).map((service) => (
                  <div 
                    key={service.id} 
                    className={`service-card row-card ${animatedItems.includes(service.id) ? 'animated' : ''}`}
                    data-service-id={service.id}
                  >
                    <div className="service-image">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="service-content">
                      <h3>{service.title}</h3>
                      <ul className="service-highlights-preview">
                        {service.highlights.slice(0, 2).map((highlight, index) => (
                          <li key={index}>{highlight.split(':')[0]}</li>
                        ))}
                      </ul>
                      <button 
                        className="btn btn-read-more" 
                        onClick={() => openServiceModal(service)}
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
                {/* Add empty placeholders as needed to maintain 2 cards per row */}
                {filteredServices.length === 0 && (
                  <>
                    <div className="service-card row-card empty-card"></div>
                    <div className="service-card row-card empty-card"></div>
                  </>
                )}
                {filteredServices.length === 1 && (
                  <div className="service-card row-card empty-card"></div>
                )}
              </div>
              
              {/* Second row - always showing with proper structure */}
              <div className="service-row">
                {filteredServices.slice(2, 4).map((service) => (
                  <div 
                    key={service.id} 
                    className={`service-card row-card ${animatedItems.includes(service.id) ? 'animated' : ''}`}
                    data-service-id={service.id}
                  >
                    <div className="service-image">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="service-content">
                      <h3>{service.title}</h3>
                      <ul className="service-highlights-preview">
                        {service.highlights.slice(0, 2).map((highlight, index) => (
                          <li key={index}>{highlight.split(':')[0]}</li>
                        ))}
                      </ul>
                      <button 
                        className="btn btn-read-more" 
                        onClick={() => openServiceModal(service)}
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
                {/* Add empty placeholders as needed for second row */}
                {filteredServices.length < 3 && (
                  <>
                    <div className="service-card row-card empty-card"></div>
                    <div className="service-card row-card empty-card"></div>
                  </>
                )}
                {filteredServices.length === 3 && (
                  <div className="service-card row-card empty-card"></div>
                )}
              </div>
              
              {/* Third row - for when we have more than 4 services */}
              {filteredServices.length > 4 && (
                <div className="service-row">
                  {filteredServices.slice(4).map((service) => (
                    <div 
                      key={service.id} 
                      className={`service-card row-card ${animatedItems.includes(service.id) ? 'animated' : ''}`}
                      data-service-id={service.id}
                    >
                      <div className="service-image">
                        <img src={service.image} alt={service.title} />
                      </div>
                      <div className="service-content">
                        <h3>{service.title}</h3>
                        <ul className="service-highlights-preview">
                          {service.highlights.slice(0, 2).map((highlight, index) => (
                            <li key={index}>{highlight.split(':')[0]}</li>
                          ))}
                        </ul>
                        <button 
                          className="btn btn-read-more" 
                          onClick={() => openServiceModal(service)}
                          aria-label={`Learn more about ${service.title}`}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="no-services-message">
              <p>No services found in this category. Please try another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Streamlined emergency services section */}
      <section className="emergency-services">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-text">
              <h2>Emergency Dental Care</h2>
              <p>Dental emergencies can happen at any time. Our team is prepared to provide prompt care for urgent situations.</p>
              <ul className="emergency-list">
                <li>Severe toothache or pain</li>
                <li>Broken, chipped, or knocked-out teeth</li>
                <li>Lost crowns or fillings</li>
                <li>Oral injuries and trauma</li>
              </ul>
              <div className="emergency-contact">
                <h3>24/7 Emergency Line</h3>
                <a href="tel:5551234567" className="phone-number">(555) 123-4567</a>
                <Link to="/contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
            <div className="emergency-image">
              <img 
                src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Emergency Dental Care" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clear, compelling CTA section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Experience Quality Dental Care?</h2>
          <p>Schedule your appointment today and take the first step toward a healthier smile.</p>
          <Link to="/appointment" className="btn btn-primary">Book Your Appointment</Link>
        </div>
      </section>
      
      {/* Modal for service details - using the standalone component */}
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