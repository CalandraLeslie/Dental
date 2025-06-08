import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pricing.css';

const Pricing: React.FC = () => {
  const [activeSection, setActiveSection] = useState('preventive');
  
  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['preventive', 'restorative', 'cosmetic', 'specialty', 'insurance'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pricing-page">
      {/* Hero with unique professional dental clinic image */}
      <section className="pricing-hero">
        <img 
          src="https://images.pexels.com/photos/305564/pexels-photo-305564.jpeg" 
          alt="Modern dental clinic reception" 
          className="hero-bg"
        />
        <div className="container">
          <h1>Clear & Transparent Pricing</h1>
          <p className="lead">Quality dental care with no surprises</p>
          <Link to="/appointment" className="btn btn-cta">Schedule Consultation</Link>
        </div>
      </section>

      {/* Sticky navigation */}
      <nav className="pricing-nav">
        <div className="container">
          <ul className="pricing-nav-list">
            <li className="pricing-nav-item">
              <a 
                href="#preventive" 
                className={`pricing-nav-link ${activeSection === 'preventive' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('preventive'); }}
              >
                Preventive Care
              </a>
            </li>
            <li className="pricing-nav-item">
              <a 
                href="#restorative" 
                className={`pricing-nav-link ${activeSection === 'restorative' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('restorative'); }}
              >
                Restorative
              </a>
            </li>
            <li className="pricing-nav-item">
              <a 
                href="#cosmetic" 
                className={`pricing-nav-link ${activeSection === 'cosmetic' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('cosmetic'); }}
              >
                Cosmetic
              </a>
            </li>
            <li className="pricing-nav-item">
              <a 
                href="#specialty" 
                className={`pricing-nav-link ${activeSection === 'specialty' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('specialty'); }}
              >
                Specialty
              </a>
            </li>
            <li className="pricing-nav-item">
              <a 
                href="#insurance" 
                className={`pricing-nav-link ${activeSection === 'insurance' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('insurance'); }}
              >
                Insurance
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Preventive Care Section */}
      <section id="preventive" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Preventive Care</h2>
            <p className="section-subtitle">Regular check-ups and preventive treatments to maintain oral health</p>
          </div>
          
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="service-name">New Patient Exam</td>
                <td className="price">$95</td>
              </tr>
              <tr>
                <td className="service-name">Regular Check-up</td>
                <td className="price">$65</td>
              </tr>
              <tr>
                <td className="service-name">Professional Cleaning</td>
                <td className="price">$85</td>
              </tr>
              <tr>
                <td className="service-name">Full Mouth X-rays</td>
                <td className="price">$120</td>
              </tr>
              <tr>
                <td className="service-name">Fluoride Treatment</td>
                <td className="price">$35</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Restorative Section */}
      <section id="restorative" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Restorative Dentistry</h2>
            <p className="section-subtitle">Solutions to restore damaged teeth and replace missing teeth</p>
          </div>
          
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="service-name">Composite Filling</td>
                <td className="price">$150 - $250</td>
              </tr>
              <tr>
                <td className="service-name">Root Canal Treatment</td>
                <td className="price">$700 - $900</td>
              </tr>
              <tr>
                <td className="service-name">Crown (Porcelain)</td>
                <td className="price">$900 - $1,200</td>
              </tr>
              <tr>
                <td className="service-name">Bridge (per unit)</td>
                <td className="price">$850 - $1,100</td>
              </tr>
              <tr>
                <td className="service-name">Full Denture (per arch)</td>
                <td className="price">$1,500 - $2,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cosmetic Section with updated teeth whitening image */}
      <section id="cosmetic" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cosmetic Dentistry</h2>
            <p className="section-subtitle">Treatments to enhance the appearance of your smile</p>
          </div>
          
          <div className="offers-grid">
            <div className="offer-card">
              <img 
                src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg" 
                alt="Beautiful white teeth smile" 
                className="offer-image"
              />
              <div className="offer-content">
                <h3 className="offer-title">Professional Whitening</h3>
                <p className="offer-price">$299</p>
                <ul className="offer-features">
                  <li>In-office treatment</li>
                  <li>Visible results in one visit</li>
                  <li>Safe and effective</li>
                </ul>
                <Link to="/appointment" className="btn btn-primary">Book Now</Link>
              </div>
            </div>
            
            <div className="offer-card">
              <img 
                src="https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg" 
                alt="Dental veneers procedure" 
                className="offer-image"
              />
              <div className="offer-content">
                <h3 className="offer-title">Porcelain Veneers</h3>
                <p className="offer-price">$900 - $1,200<small>/tooth</small></p>
                <ul className="offer-features">
                  <li>Natural-looking results</li>
                  <li>Stain-resistant</li>
                  <li>Durable and long-lasting</li>
                </ul>
                <Link to="/appointment" className="btn btn-primary">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section id="specialty" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Specialty Services</h2>
            <p className="section-subtitle">Advanced dental procedures for complex needs</p>
          </div>
          
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="service-name">Dental Implant (single tooth)</td>
                <td className="price">$2,500 - $3,500</td>
              </tr>
              <tr>
                <td className="service-name">Invisalign® Treatment</td>
                <td className="price">$3,500 - $6,000</td>
              </tr>
              <tr>
                <td className="service-name">Wisdom Tooth Extraction</td>
                <td className="price">$300 - $500</td>
              </tr>
              <tr>
                <td className="service-name">Periodontal Treatment</td>
                <td className="price">$200 - $600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Insurance Section with three smaller medical-themed icons */}
      <section id="insurance" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Insurance & Payment Options</h2>
            <p className="section-subtitle">We work with most major insurance providers</p>
          </div>
          
          <div className="insurance-icons">
            <div className="insurance-icon-item">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3030/3030768.png" 
                alt="Dental Insurance" 
                className="insurance-icon"
              />
              <p>Dental Plans</p>
            </div>
            <div className="insurance-icon-item">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/994/994888.png" 
                alt="Dental Coverage" 
                className="insurance-icon"
              />
              <p>Dental Coverage</p>
            </div>
            <div className="insurance-icon-item">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3997/3997872.png" 
                alt="Family Plans" 
                className="insurance-icon"
              />
              <p>Family Plans</p>
            </div>
          </div>
          
          <div className="accepted-plans">
            <h3>Accepted Insurance Providers:</h3>
            <ul className="plans-list">
              <li>Delta Dental</li>
              <li>Aetna</li>
              <li>Blue Cross Blue Shield</li>
              <li>MetLife</li>
              <li>Cigna</li>
              <li>Guardian</li>
            </ul>
          </div>
          
          <div className="payment-options">
            <h3>We Accept:</h3>
            <p>All major credit cards, cash, personal checks, and flexible payment plans. We also accept HSA and FSA accounts for eligible services.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready for Your Smile Makeover?</h2>
          <p className="cta-text">Book your appointment today and discuss your treatment options with our experts.</p>
          <Link to="/appointment" className="btn-cta">Schedule Appointment</Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;