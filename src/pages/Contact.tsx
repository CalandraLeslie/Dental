import React, { useState, useEffect } from 'react';
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    // Here you would typically send the form data to your backend
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Patient since 2018',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      text: 'I had severe dental anxiety before coming here, but the team made me feel so comfortable. Dr. Chen is incredibly gentle and explains everything clearly. I no longer dread dental appointments!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Patient since 2020',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      text: 'The staff is always friendly and professional. I appreciate how they worked with me to create a payment plan that fit my budget. My new veneers look amazing!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Thompson',
      role: 'Patient since 2019',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      text: "I brought my 4-year-old son here for his first dental appointment, and they were incredible with him. They made it fun and stress-free. Now he's excited for his next visit!",
      rating: 5
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Patient since 2021',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      text: 'After moving to the area, I needed a new dentist. The team here exceeded my expectations. Their attention to detail and use of modern technology makes all the difference.',
      rating: 5
    }
  ];

  // Rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
          <p className="lead">We're here to answer your questions and provide the care you need</p>
        </div>
      </section>

      {/* Main contact grid with form and info */}
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
                        <option value="appointment">Appointment Inquiry</option>
                        <option value="billing">Billing Question</option>
                        <option value="insurance">Insurance Information</option>
                        <option value="treatment">Treatment Information</option>
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
              
              <div className="contact-card">
                <h3>Office Hours</h3>
                <ul className="hours-list">
                  <li><span>Monday - Thursday:</span> <span className="hours">8:00 AM - 5:00 PM</span></li>
                  <li><span>Friday:</span> <span className="hours">8:00 AM - 3:00 PM</span></li>
                  <li><span>Saturday:</span> <span className="hours">9:00 AM - 1:00 PM</span> <span className="note">(alternating)</span></li>
                  <li><span>Sunday:</span> <span className="hours closed">Closed</span></li>
                </ul>
              </div>

              <div className="contact-card emergency-card">
                <h3>Emergency Care</h3>
                <div className="emergency-content">
                  <div className="emergency-icon">
                    <i className="icon-emergency"></i>
                  </div>
                  <div>
                    <p>During office hours: <strong>(555) 123-4567</strong></p>
                    <p>After hours: <strong>(555) 987-6543</strong></p>
                  </div>
                </div>
              </div>
              
              <div className="office-preview">
                <img 
                  src="https://images.pexels.com/photos/3846005/pexels-photo-3846005.jpeg" 
                  alt="Our modern dental office" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="location-section">
        <div className="container">
          <div className="location-grid">
            <div className="map-container">
              <h2>Our Location</h2>
              <div className="map-wrapper">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-118.2436849!3d34.0522342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDE0JzM3LjMiVw!5e0!3m2!1sen!2sus!4v1234567890" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>
            <div className="directions-container">
              <h2>Getting Here</h2>
              <div className="directions-card">
                <div className="direction-item">
                  <div className="direction-icon">
                    <i className="icon-car"></i>
                  </div>
                  <div>
                    <h4>By Car</h4>
                    <p>Convenient parking is available in our dedicated lot behind the building. Additional street parking is also available.</p>
                  </div>
                </div>
                <div className="direction-item">
                  <div className="direction-icon">
                    <i className="icon-bus"></i>
                  </div>
                  <div>
                    <h4>Public Transportation</h4>
                    <p>We are located within walking distance of the Main Street bus stop (Lines 45 and 67) and a 10-minute walk from the Central Metro Station.</p>
                  </div>
                </div>
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
              <h3>Do you accept new patients?</h3>
              <p>Yes, we welcome new patients of all ages. You can request an appointment online or call our office to schedule your first visit.</p>
            </div>
            <div className="faq-item">
              <h3>What insurance plans do you accept?</h3>
              <p>We accept most major dental insurance plans including Delta Dental, Cigna, Aetna, and many more. Please contact our office to verify your specific coverage.</p>
            </div>
            <div className="faq-item">
              <h3>How do I request my dental records?</h3>
              <p>You can request your dental records by calling our office or submitting a written request. We'll need your signature to release your records.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer payment plans?</h3>
              <p>Yes, we offer flexible payment plans and accept CareCredit to help make dental care affordable. Our staff will be happy to discuss the options available to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Patients Say</h2>
          
          <div className="testimonials-carousel">
            <div className="testimonial-cards" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div className="testimonial-card" key={testimonial.id}>
                  <div className="testimonial-content">
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`star ${i < testimonial.rating ? 'filled' : ''}`}>★</span>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                  </div>
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="author-image"
                    />
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Schedule Your Visit?</h2>
          <p>We're looking forward to meeting you and providing the dental care you deserve.</p>
          <div className="cta-buttons">
            <a href="/appointment" className="btn btn-primary">Book Appointment</a>
            <a href="tel:5551234567" className="btn btn-outline">Call Us Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;