// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';



function NavBar({ className }) {
  return (
    <nav className = {className}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/contact">Contact Us</Link></li> 
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default NavBar;
