import React from 'react';
import './Clinic.css'; // Import the CSS file for styling

const Clinic: React.FC = () => {
    return (
        <div className="clinic-section">
            {/* Background image with blue overlay */}
            <div className="clinic-image-container">
                <img 
                    src="https://img.freepik.com/free-photo/dentist-examining-dental-x-ray_23-2148978366.jpg" 
                    alt="Dentist examining X-ray" 
                    className="clinic-bg-image"
                />
                <div className="clinic-overlay"></div>
            </div>
            
            <div className="clinic-content">
                <h2>About Our Clinic</h2>
                <p>
                    Welcome to our dental clinic! Established in 2020, we have been dedicated to providing top-notch dental care to our community. Our mission is to ensure that every patient leaves with a smile, feeling confident and satisfied with their treatment.
                </p>
                <h3>Our Mission</h3>
                <p>
                    Our mission is to deliver comprehensive dental services in a comfortable and friendly environment. We believe in the importance of preventive care and strive to educate our patients about maintaining their oral health.
                </p>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>Experienced and caring dental professionals</li>
                    <li>State-of-the-art technology and techniques</li>
                    <li>Personalized treatment plans tailored to your needs</li>
                    <li>Flexible appointment scheduling</li>
                </ul>
            </div>
        </div>
    );
};

export default Clinic;