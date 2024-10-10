// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // To handle internal routing
import NavBar from './NavBar';
import './Header.css';

function Header({ isAuthenticated }) {
  return (
    <header className="fade-in-top">
      {/* Logo link: conditionally link to home or dashboard */}
      <div className="logo-container fade-in-left">
        <Link to={isAuthenticated ? "/dashboard" : "/"}>
          <img src="/High-res-white-transparent.png" alt="Main Logo" className="logo" />
        </Link>
      </div>
      <h1 className="fade-in-top">ECO-SOURCE</h1>
      <NavBar className="fade-in-right" />
    </header>
  );
}

export default Header;
