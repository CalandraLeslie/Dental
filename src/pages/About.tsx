import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './about.css';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="about-page">
      <section className="about-hero">
        <img 
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
          alt="Our Dental Team" 
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            About Our Clinic
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lead"
          >
            Providing exceptional dental care in a comfortable environment since 2005
          </motion.p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Dental Practice</h2>
              <p>Founded in 2005, our clinic has been providing exceptional dental care to our community for over two decades.</p>
              <p>We believe in a patient-centered approach, combining advanced technology with compassionate care.</p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop" 
                alt="Our Modern Dental Clinic" 
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-story">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2005 by Dr. Elizabeth Chen, our dental clinic began with a simple mission: to provide exceptional dental care that puts patients first. What started as a small practice has grown into a trusted dental care provider in the community, known for our gentle approach and commitment to excellence.
              </p>
              <p>
                Today, our expanded team of dental professionals continues this tradition of compassionate care, combining decades of experience with the latest advancements in dental technology. We believe that a healthy smile can transform lives, and we're dedicated to making that possible for every patient who walks through our doors.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1000&auto=format&fit=crop" 
                alt="Dental Clinic Building" 
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <div className="container">
          <h2 className="section-title">Our Mission & Values</h2>
          <div className="mission-values">
            <div className="mission-box">
              <h3>Our Mission</h3>
              <p>To improve the oral health of our community by providing personalized, high-quality dental care in a comfortable and supportive environment.</p>
            </div>
            <div className="mission-box">
              <h3>Our Vision</h3>
              <p>To be the leading dental care provider known for excellence, innovation, and patient satisfaction.</p>
            </div>
            <div className="mission-box">
              <h3>Our Values</h3>
              <ul>
                <li><strong>Excellence:</strong> Striving for the highest standards in all aspects of care</li>
                <li><strong>Compassion:</strong> Treating each patient with kindness and understanding</li>
                <li><strong>Integrity:</strong> Practicing with honesty and transparency</li>
                <li><strong>Innovation:</strong> Embracing new technologies and techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop" alt="Dr. Elizabeth Chen" />
              </div>
              <h3>Dr. Elizabeth Chen</h3>
              <p className="role">Founder & Lead Dentist</p>
              <p>Dr. Chen founded our clinic in 2005 and has over 20 years of experience in general and cosmetic dentistry.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop" alt="Dr. Michael Chen" />
              </div>
              <h3>Dr. Michael Chen</h3>
              <p className="role">Orthodontist</p>
              <p>Specializing in orthodontics, Dr. Chen helps patients achieve perfectly aligned smiles.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=600&auto=format&fit=crop" alt="Sarah Williams" />
              </div>
              <h3>Sarah Williams</h3>
              <p className="role">Dental Hygienist</p>
              <p>Sarah ensures each patient receives thorough and gentle dental cleanings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-facility">
        <div className="container">
          <h2 className="section-title">Our Facility</h2>
          <p className="section-intro">Step into our modern dental clinic designed with your comfort in mind. Our state-of-the-art facility features the latest dental technology in a welcoming environment.</p>
          
          <div className="facility-grid">
            <div className="facility-image">
              <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop" alt="Reception Area" />
              <p>Welcoming Reception Area</p>
            </div>
            <div className="facility-image">
              <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop" alt="Treatment Room" />
              <p>Modern Treatment Room</p>
            </div>
            <div className="facility-image">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" alt="Waiting Area" />
              <p>Comfortable Waiting Area</p>
            </div>
            <div className="facility-image">
              <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000&auto=format&fit=crop" alt="Dental Technology" />
              <p>Advanced Dental Technology</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Experience Our Care</h2>
          <p>We're committed to making your dental experience positive and stress-free. Schedule your visit today and see the difference our care can make.</p>
          <div className="cta-buttons">
            <Link to="/appointment" className="btn btn-primary">Book an Appointment</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;