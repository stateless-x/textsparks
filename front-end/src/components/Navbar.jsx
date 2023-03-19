import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './../styles/Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <button className="navbar-toggler" onClick={toggleMobileMenu}>
        <span className="navbar-toggler-icon" />
      </button>
      <ul className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMobileMenu}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={toggleMobileMenu}>Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
