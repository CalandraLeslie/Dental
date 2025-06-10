import React, { useState } from 'react';
import '../styles/contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.pexels.com/photos/3845767/pexels-photo-3845767.jpeg" 
          alt="Dental office reception" 
          className="hero-bg"
        />
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p className="lead text-white">We're here to answer your questions and provide the care you need</p>
        </div>
      </section>

      {/* Booking Reference Banner */}
      <section className="booking-reference">
        <div className="container">
          <p>Looking to schedule an appointment? <a href="/appointment" className="booking-link">Visit our online booking system</a></p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Left column: Contact form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              {submitted ? (
                <div className="message-sent">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We will get back to you as soon as possible.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name*</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address*</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">Subject*</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="information">General Information</option>
                        <option value="billing">Billing Question</option>
                        <option value="insurance">Insurance Information</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message*</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Send Message</button>
                  <p className="form-note">* Required fields</p>
                </form>
              )}
            </div>
            
            {/* Right column: Contact information */}
            <div className="contact-info-container">
              {/* Primary contact card */}
              <div className="contact-card primary-card">
                <h3>Quick Contact</h3>
                <ul className="contact-list">
                  <li>
                    <div className="contact-icon">
                      <i className="icon-phone"></i>
                    </div>
                    <div>
                      <p className="contact-label">Phone</p>
                      <p className="contact-value">(555) 123-4567</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="icon-email"></i>
                    </div>
                    <div>
                      <p className="contact-label">Email</p>
                      <p className="contact-value">info@dentalclinic.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="icon-location"></i>
                    </div>
                    <div>
                      <p className="contact-label">Address</p>
                      <p className="contact-value">
                        123 Dental Care Lane<br />
                        Suite 200<br />
                        Anytown, CA 90210
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Transportation Info */}
      <section className="location-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="location-grid">
            {/* Left: Map */}
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2164191658036!2d-73.98784532342067!3d40.748440471397445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab0c525!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1686259751382!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Office location"
              ></iframe>
            </div>
            
            {/* Right: Transportation Information */}
            <div className="directions-container">
              <div className="transportation-card">
                <h3>Getting Here</h3>
                <ul className="transport-list">
                  <li>
                    <div className="transport-icon">
                      <i className="icon-car"></i>
                    </div>
                    <div>
                      <p className="transport-label">By Car</p>
                      <p className="transport-value">
                        Free parking available in our dedicated lot.<br />
                        Additional paid parking at the public garage across the street.<br />
                        Accessible parking spaces available near entrance.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="transport-icon">
                      <i className="icon-bus"></i>
                    </div>
                    <div>
                      <p className="transport-label">Public Transit</p>
                      <p className="transport-value">
                        Bus routes 15, 22, and 31 stop directly in front of our office.<br />
                        Nearest subway station: Central Station (0.3 miles).<br />
                        Bike racks available at the front entrance.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What insurance plans do you accept?</h3>
              <p>We accept most major insurance plans. Please contact our office for specific information about your coverage.</p>
            </div>
            <div className="faq-item">
              <h3>How often should I schedule a dental checkup?</h3>
              <p>For most patients, we recommend a dental checkup and cleaning every six months.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer emergency dental services?</h3>
              <p>Yes, we provide emergency dental care. Please call our office immediately if you experience a dental emergency.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept cash, credit cards, and offer various financing options to make dental care accessible to everyone.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;