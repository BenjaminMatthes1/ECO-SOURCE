import React from 'react';
import './ApplicationSubmitted.css';
import { Link } from 'react-router-dom';

function ApplicationSubmitted() {
  return (
    <div className="application-submitted-page">
      <div className="confirmation-container">
        <h1>Application Submitted!</h1>
        <p>
          Thank you for applying to join Eco-Source. We are reviewing your application, and you will
          receive an email notification once it has been processed.
        </p>
        <p>
          If you have any questions, feel free to <Link to="/contact">contact us</Link>.
        </p>
        <Link to="/" className="home-link">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

export default ApplicationSubmitted;
