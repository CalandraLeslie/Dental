import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/appointment.css';
import { submitAppointment, AppointmentFormData } from '../utils/api';

const Appointment: React.FC = () => {
  // Form state with multiple steps
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<AppointmentFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: '',
    isNewPatient: 'no',
    message: '',
    preferredDentist: '',
    insurance: '',
    agreement: false
  });

  const [submitted, setSubmitted] = useState(false);
  const availableTimeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  // Scroll to top when component mounts or when form is submitted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : null;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      alert('Please agree to the terms and conditions');
      return;
    }

    try {
      await submitAppointment(formData);
      setSubmitted(true);
      setCurrentStep(3); // Move to confirmation step
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  if (submitted) {
    return (
      <div className="appointment-page">
        <div className="container">
          <div className="appointment-success">
            <div className="success-icon">✓</div>
            <h2>Appointment Request Submitted!</h2>
            <p>Thank you for requesting an appointment with our dental clinic. We have received your information and will contact you shortly to confirm your appointment details.</p>
            <div className="success-actions">
              <p className="contact-info">If you need immediate assistance, please call us at <strong>(555) 123-4567</strong></p>
              <div className="success-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Request Another Appointment
                </button>
                <Link to="/" className="btn btn-outline">
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Progress indicator calculation
  const progress = (currentStep / 3) * 100;

  return (
    <div className="appointment-page">
      <div className="appointment-hero">
        <div className="hero-overlay"></div>
        <img 
          src="https://img.freepik.com/free-photo/dentist-doctor-smiling-dental-clinic-office_53876-137824.jpg" 
          alt="Professional dentist in modern dental office" 
          className="hero-bg"
        />
        <div className="hero-content">
          <h1>Schedule Your Dental Appointment</h1>
          <p>We're committed to providing quality care when you need it</p>
        </div>
      </div>

      <section className="appointment-info">
        <div className="container">
          <div className="appointment-intro">
            <h2>Your Comfort Is Our Priority</h2>
            <p>Whether you're coming in for a routine check-up or a specific procedure, we make scheduling your appointment easy and convenient.</p>
          </div>
          
          <div className="appointment-grid">
            <div className="appointment-form-container">
              <h2>Request Your Appointment</h2>
              <div className="form-progress">
                <div className="progress-bar">
                  <div className="progress-indicator" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="step-indicators">
                  <div className={`step-dot ${currentStep >= 1 ? 'active' : ''}`}>1</div>
                  <div className={`step-dot ${currentStep >= 2 ? 'active' : ''}`}>2</div>
                  <div className={`step-dot ${currentStep >= 3 ? 'active' : ''}`}>3</div>
                </div>
                <p className="step-label">
                  Step {currentStep} of 3: {currentStep === 1 ? 'Personal Information' : currentStep === 2 ? 'Appointment Details' : 'Additional Information'}
                </p>
              </div>
              
              <form className="appointment-form" onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="form-step">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name*</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name*</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number*</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Are you a new patient?*</label>
                      <div className="radio-group">
                        <label className="radio-label">
                          <input 
                            type="radio" 
                            name="isNewPatient" 
                            value="yes" 
                            checked={formData.isNewPatient === 'yes'} 
                            onChange={handleChange} 
                          /> Yes
                        </label>
                        <label className="radio-label">
                          <input 
                            type="radio" 
                            name="isNewPatient" 
                            value="no" 
                            checked={formData.isNewPatient === 'no'} 
                            onChange={handleChange} 
                          /> No
                        </label>
                      </div>
                    </div>
                    
                    <div className="form-navigation">
                      <button type="button" className="btn btn-primary" onClick={nextStep}>
                        Continue <span className="btn-icon">→</span>
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Appointment Details */}
                {currentStep === 2 && (
                  <div className="form-step">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="date">Preferred Date*</label>
                        <input 
                          type="date" 
                          id="date" 
                          name="date" 
                          value={formData.date} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="time">Preferred Time*</label>
                        <select 
                          id="time" 
                          name="time" 
                          value={formData.time} 
                          onChange={handleChange} 
                          required
                        >
                          <option value="">Select a time</option>
                          {availableTimeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="serviceType">Type of Service*</label>
                      <select 
                        id="serviceType" 
                        name="serviceType" 
                        value={formData.serviceType} 
                        onChange={handleChange} 
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="regular-checkup">Regular Check-up & Cleaning</option>
                        <option value="emergency">Emergency Visit</option>
                        <option value="cosmetic">Cosmetic Consultation</option>
                        <option value="restorative">Restorative Treatment</option>
                        <option value="orthodontic">Orthodontic Consultation</option>
                        <option value="pediatric">Pediatric Dentistry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="preferredDentist">Preferred Dentist (Optional)</label>
                      <select 
                        id="preferredDentist" 
                        name="preferredDentist" 
                        value={formData.preferredDentist} 
                        onChange={handleChange}
                      >
                        <option value="">No preference</option>
                        <option value="dr-chen">Dr. Elizabeth Chen</option>
                        <option value="dr-patel">Dr. Raj Patel</option>
                        <option value="dr-wilson">Dr. Sarah Wilson</option>
                      </select>
                    </div>
                    
                    <div className="form-navigation">
                      <button type="button" className="btn btn-outline" onClick={prevStep}>
                        <span className="btn-icon">←</span> Back
                      </button>
                      <button type="button" className="btn btn-primary" onClick={nextStep}>
                        Continue <span className="btn-icon">→</span>
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Additional Information */}
                {currentStep === 3 && (
                  <div className="form-step">
                    <div className="form-group">
                      <label htmlFor="insurance">Insurance Provider (Optional)</label>
                      <input 
                        type="text" 
                        id="insurance" 
                        name="insurance" 
                        value={formData.insurance} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Additional Information (Optional)</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Please share any specific concerns or information that will help us prepare for your visit."
                      ></textarea>
                    </div>
                    
                    <div className="form-group checkbox-group">
                      <label className="checkbox-label">
                        <input 
                          type="checkbox" 
                          name="agreement" 
                          checked={formData.agreement as boolean} 
                          onChange={handleChange} 
                          required 
                        /> 
                        I understand that this is a request for an appointment and that my appointment is not confirmed until I receive confirmation from the clinic.*
                      </label>
                    </div>
                    
                    <div className="form-navigation">
                      <button type="button" className="btn btn-outline" onClick={prevStep}>
                        <span className="btn-icon">←</span> Back
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Submit Request
                      </button>
                    </div>
                    
                    <p className="form-note">* Required fields</p>
                  </div>
                )}
              </form>
            </div>
            
            <div className="appointment-benefits">
              <div className="benefits-content">
                <h3>Why Choose Our Dental Clinic?</h3>
                <ul className="benefits-list">
                  <li>
                    <img src="https://img.icons8.com/color/48/null/medical-doctor.png" alt="Expert Dentists" />
                    <div>
                      <h4>Expert Dentists</h4>
                      <p>Our highly trained dentists provide exceptional care</p>
                    </div>
                  </li>
                  <li>
                    <img src="https://img.icons8.com/color/48/null/clinic.png" alt="Modern Facility" />
                    <div>
                      <h4>Modern Facility</h4>
                      <p>State-of-the-art equipment and comfortable environment</p>
                    </div>
                  </li>
                  <li>
                    <img src="https://img.icons8.com/color/48/null/calendar--v1.png" alt="Flexible Scheduling" />
                    <div>
                      <h4>Flexible Scheduling</h4>
                      <p>Evening and weekend appointments available</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="appointment-images">
                <div className="image-grid">
                  <img 
                    src="https://img.freepik.com/free-photo/male-dentist-showing-something-tablet-female-patient_329181-14516.jpg" 
                    alt="Dentist consulting with patient" 
                    className="benefit-image"
                  />
                  <img 
                    src="https://img.freepik.com/free-photo/little-girl-dentist-office-during-her-dental-treatment_1303-26610.jpg" 
                    alt="Child at dental appointment" 
                    className="benefit-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-to-expect">
        <div className="container">
          <h2>What to Expect on Your Visit</h2>
          <div className="expectation-cards">
            <div className="expectation-card">
              <div className="card-number">1</div>
              <h3>Warm Welcome</h3>
              <p>Our friendly staff will greet you and assist with any remaining paperwork. Relax in our comfortable waiting area.</p>
            </div>
            <div className="expectation-card">
              <div className="card-number">2</div>
              <h3>Comprehensive Exam</h3>
              <p>Your dentist will perform a thorough examination, potentially including x-rays if needed.</p>
            </div>
            <div className="expectation-card">
              <div className="card-number">3</div>
              <h3>Treatment Discussion</h3>
              <p>We'll discuss our findings and recommend the best treatment options for your unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="appointment-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What should I bring to my first appointment?</h3>
              <p>Please bring your photo ID, insurance card, completed new patient forms (if not submitted online), and a list of any medications you're currently taking.</p>
            </div>
            
            <div className="faq-item">
              <h3>How early should I arrive for my appointment?</h3>
              <p>We recommend arriving 15 minutes before your scheduled appointment. New patients may want to arrive 20-30 minutes early to complete paperwork if not done in advance.</p>
            </div>
            
            <div className="faq-item">
              <h3>What if I need to reschedule my appointment?</h3>
              <p>We understand that schedules change. Please give us at least 24 hours' notice if you need to reschedule or cancel your appointment.</p>
            </div>
            
            <div className="faq-item">
              <h3>How long will my appointment take?</h3>
              <p>A typical check-up and cleaning appointment takes about 45-60 minutes. Other procedures will vary in duration. We'll provide an estimate when scheduling.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;