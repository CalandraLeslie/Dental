import React, { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';
import ScrollToTop from './ScrollToTop'; // Import the new component

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add shadow to header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="site-layout">
      <ScrollToTop /> {/* Add this line near the top of the component */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="logo">
            <div className="logo-container">
              <svg className="logo-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C7.58 2 4 5.58 4 10c0 1.5.5 3.5 2 6.5 1.5 3 2.5 4.5 2.5 4.5.5.5 1 1 2 1h3c1 0 1.5-.5 2-1 0 0 1-1.5 2.5-4.5 1.5-3 2-5 2-6.5 0-4.42-3.58-8-8-8zm0 2c3.31 0 6 2.69 6 6 0 1-.5 3-2 6-1 2-2 3.5-2.5 4h-3c-.5-.5-1.5-2-2.5-4-1.5-3-2-5-2-6 0-3.31 2.69-6 6-6z" fill="#4eaaff"/>
                <path d="M10.5 9.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm6 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM9.5 12c-.28 0-.5.22-.5.5s.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5z" fill="#4eaaff"/>
              </svg>
              <div className="logo-text">
                <span className="logo-text-main">Dental</span>
                <span className="logo-text-accent">Care</span>
              </div>
            </div>
          </Link>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className={location.pathname === '/' ? 'active' : ''}>
                <Link to="/">Home</Link>
              </li>
              <li className={location.pathname === '/about' ? 'active' : ''}>
                <Link to="/about">About</Link>
              </li>
              <li className={location.pathname === '/services' ? 'active' : ''}>
                <Link to="/services">Emergency</Link>
              </li>
              <li className={location.pathname === '/pricing' ? 'active' : ''}>
                <Link to="/pricing">Services</Link>
              </li>
              <li className={location.pathname === '/contact' ? 'active' : ''}>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/appointment" className="appointment-link">Book Appointment</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-about">
              <Link to="/" className="footer-logo">
                <svg className="tooth-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C7.58 2 4 5.58 4 10c0 1.5.5 3.5 2 6.5 1.5 3 2.5 4.5 2.5 4.5.5.5 1 1 2 1h3c1 0 1.5-.5 2-1 0 0 1-1.5 2.5-4.5 1.5-3 2-5 2-6.5 0-4.42-3.58-8-8-8zm0 2c3.31 0 6 2.69 6 6 0 1-.5 3-2 6-1 2-2 3.5-2.5 4h-3c-.5-.5-1.5-2-2.5-4-1.5-3-2-5-2-6 0-3.31 2.69-6 6-6z" fill="white"/>
                  <path d="M10.5 9.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm6 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM9.5 12c-.28 0-.5.22-.5.5s.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5z" fill="white"/>
                </svg>
                <span className="footer-logo-text">DentalCare</span>
              </Link>
              <p>Providing exceptional dental care with a gentle touch. Your smile is our passion.</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/pricing">Pricing</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>Our Services</h3>
                <ul>
                  <li><Link to="/services#preventive">Preventive Care</Link></li>
                  <li><Link to="/services#restorative">Restorative Dentistry</Link></li>
                  <li><Link to="/services#cosmetic">Cosmetic Dentistry</Link></li>
                  <li><Link to="/services#emergency">Emergency Care</Link></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>Contact Info</h3>
                <address>
                  <p>123 Dental Care Lane<br />Suite 200<br />Anytown, CA 90210</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@dentalclinic.com</p>
                </address>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Dental Clinic. All Rights Reserved.</p>
            <p>Created by <span className="creator-name">Calandra Leslie</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;