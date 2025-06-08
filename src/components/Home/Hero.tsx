import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <div className="hero" style={{ backgroundColor: 'rgb(248, 249, 250)', padding: '50px 20px', textAlign: 'center' }}>
            <h1 style={{ color: 'rgb(44, 62, 80)' }}>Welcome to Our Dental Clinic</h1>
            <p style={{ color: 'rgb(44, 62, 80)', fontSize: '18px' }}>
                Your smile is our priority. We offer a range of dental services to keep your teeth healthy and beautiful.
            </p>
            <button className="cta-button" style={{ backgroundColor: 'rgb(41, 128, 185)', color: 'rgb(255, 255, 255)', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Book an Appointment
            </button>
        </div>
    );
};

export default Hero;