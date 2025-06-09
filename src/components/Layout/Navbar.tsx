import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-nav">
        {/* Other navigation items would be here */}
        
        {/* Services with dropdown for categories */}
        <li className="nav-item dropdown">
          <Link to="/pricing" className="nav-link dropdown-toggle">Services</Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/pricing" className="dropdown-item">All Services</Link>
            </li>
            <li>
              <Link to="/pricing#preventive" className="dropdown-item">Preventive</Link>
            </li>
            <li>
              <Link to="/pricing#restorative" className="dropdown-item">Restorative</Link>
            </li>
            <li>
              <Link to="/pricing#cosmetic" className="dropdown-item">Cosmetic</Link>
            </li>
            <li>
              <Link to="/pricing#specialty" className="dropdown-item">Specialty</Link>
            </li>
          </ul>
        </li>
        
        {/* Emergency Care as separate item */}
        <li className="nav-item">
          <Link to="/services" className="nav-link">Emergency Care</Link>
        </li>
        
        {/* Other navigation items would be here */}
      </ul>
    </nav>
  );
};

export default Navbar;