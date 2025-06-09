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
                <nav>
                  <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Emergency</Link></li> {/* Changed from "Services" to "Emergency" */}
                    <li><Link to="/pricing">Services</Link></li> {/* Changed from "Pricing" to "Services" */}
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
            </div>
        </nav>
    );
};

export default Navigation;