import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <div className="container">
                <div className="logo">
                    <Link to="/" className="no-hover">
                        {/* Logo area is now intentionally empty */}
                    </Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="appointment-link">
                        <Link to="/appointment" className="appointment-btn">Book Appointment</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;