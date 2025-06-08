import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <svg className="dental-logo" width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Stylized Tooth */}
              <path d="M22 4C16.5 4 12 8.5 12 14c0 1.8 0.6 4.2 2.4 7.8 1.8 3.6 3 5.4 3 5.4 0.6 0.6 1.2 1.2 2.4 1.2h3.6c1.2 0 1.8-0.6 2.4-1.2 0 0 1.2-1.8 3-5.4 1.8-3.6 2.4-6 2.4-7.8 0-5.5-4.5-10-10-10z" fill="#4eaaff"/>
              <path d="M22 6c4.4 0 8 3.6 8 8 0 1.2-0.6 3.6-2.4 7.2-1.2 2.4-2.4 4.2-3 4.8h-5c-0.6-0.6-1.8-2.4-3-4.8-1.8-3.6-2.4-6-2.4-7.2 0-4.4 3.6-8 8-8z" fill="white"/>
              <path d="M20 15c0 1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2zm8 0c0 1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2zm-9.3 3.3c-0.4 0-0.7 0.3-0.7 0.7s0.3 0.7 0.7 0.7h6.7c0.4 0 0.7-0.3 0.7-0.7s-0.3-0.7-0.7-0.7h-6.7z" fill="#4eaaff"/>
              
              {/* DentalCare Text */}
              <path d="M50 14h3.5c3 0 5 2 5 5s-2 5-5 5H50V14zm3.5 8c1.8 0 3-1.2 3-3s-1.2-3-3-3H52v6h1.5z" fill="#1e4583"/>
              <path d="M62 14h2v1c0.5-0.7 1.3-1.2 2.5-1.2 2 0 3.5 1.5 3.5 4v6h-2v-5.5c0-1.5-0.8-2.5-2-2.5-1.3 0-2 1-2 2.5V24h-2V14z" fill="#1e4583"/>
              <path d="M73 18.5c0-3.3 2-4.7 4-4.7 2.5 0 4 1.7 4 4.5 0 0.3 0 0.5-0.1 0.7h-6c0.2 1.5 1 2.2 2.3 2.2 0.8 0 1.5-0.3 2-0.8l1 1.2c-0.8 0.8-1.8 1.2-3.2 1.2-2.5 0-4-1.7-4-4.3zm6-0.7c0-1.3-0.6-2.2-2-2.2-1.1 0-1.8 0.8-2 2.2h4z" fill="#1e4583"/>
              <path d="M84 14h2v1.2c0.6-0.8 1.5-1.4 2.8-1.4v2h-0.3c-1.5 0-2.5 1-2.5 2.7V24h-2V14z" fill="#1e4583"/>
              <path d="M92 18.5c0-3.3 2-4.7 4.2-4.7 1.2 0 2 0.4 2.8 1l-1 1.5c-0.5-0.5-1-0.7-1.7-0.7-1.5 0-2.5 1-2.5 3s1 3 2.5 3c0.7 0 1.2-0.3 1.7-0.8l1 1.5c-0.8 0.7-1.7 1-2.8 1-2.2 0-4.2-1.5-4.2-4.8z" fill="#1e4583"/>
              <path d="M102 19c0-3 2-5 4.8-5 2.8 0 4.8 2 4.8 5s-2 5-4.8 5c-2.8 0-4.8-2-4.8-5zm7.5 0c0-2-1-3.2-2.8-3.2-1.7 0-2.8 1.2-2.8 3.2s1 3.2 2.8 3.2c1.7 0 2.8-1.2 2.8-3.2z" fill="#1e4583"/>
              <path d="M115 14h2v1c0.5-0.7 1.3-1.2 2.5-1.2 2 0 3.5 1.5 3.5 4v6h-2v-5.5c0-1.5-0.8-2.5-2-2.5-1.3 0-2 1-2 2.5V24h-2V14z" fill="#1e4583"/>
              <path d="M126 14h2v1.2c0.6-0.8 1.5-1.4 2.8-1.4v2h-0.3c-1.5 0-2.5 1-2.5 2.7V24h-2V14z" fill="#1e4583"/>
              <path d="M134 14h2v1c0.5-0.7 1.3-1.2 2.5-1.2 2 0 3.5 1.5 3.5 4v6h-2v-5.5c0-1.5-0.8-2.5-2-2.5-1.3 0-2 1-2 2.5V24h-2V14z" fill="#1e4583"/>
            </svg>
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;