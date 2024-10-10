import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; // Social media icons
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Statement */}
        <h3>Empowering a Sustainable Future, One Connection at a Time</h3>

        {/* Social Media Icons */}
        <div className="footer-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>

        {/* Link to Contact Page */}
        <Link to="/contact" className="contact-link">Contact Us</Link>
        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} Eco-Source. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;