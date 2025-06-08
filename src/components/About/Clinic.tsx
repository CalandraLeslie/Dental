import React from 'react';

const Clinic: React.FC = () => {
    return (
        <div style={{ padding: '20px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ color: 'rgb(41, 128, 185)' }}>About Our Clinic</h2>
            <p style={{ color: 'rgb(44, 62, 80)' }}>
                Welcome to our dental clinic! Established in 2020, we have been dedicated to providing top-notch dental care to our community. Our mission is to ensure that every patient leaves with a smile, feeling confident and satisfied with their treatment.
            </p>
            <h3 style={{ color: 'rgb(41, 128, 185)' }}>Our Mission</h3>
            <p style={{ color: 'rgb(44, 62, 80)' }}>
                Our mission is to deliver comprehensive dental services in a comfortable and friendly environment. We believe in the importance of preventive care and strive to educate our patients about maintaining their oral health.
            </p>
            <h3 style={{ color: 'rgb(41, 128, 185)' }}>Why Choose Us?</h3>
            <ul style={{ color: 'rgb(44, 62, 80)' }}>
                <li>Experienced and caring dental professionals</li>
                <li>State-of-the-art technology and techniques</li>
                <li>Personalized treatment plans tailored to your needs</li>
                <li>Flexible appointment scheduling</li>
            </ul>
        </div>
    );
};

export default Clinic;