// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';
import Header from './Header';
import Footer from './Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to an API or email
    alert('Thank you for your feedback!');
  };

  return (
    <div>
      <Header />
    <div className="contact-us-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Share your feedback, comments, or concerns"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer />
  </div>
  );
}

export default ContactUs;
