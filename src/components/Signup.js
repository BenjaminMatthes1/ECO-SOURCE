import React, { useState } from 'react';
import './SignUp.css'; // Import the updated CSS
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    companyName: '',
    address: '',
    productInterests: '',
    businessLicenseFile: null,
    businessType: 'buyer', // Default to buyer, can toggle to seller
  });

  const navigate = useNavigate(); // For navigation after form submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, businessLicenseFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    alert("Your application has been submitted for review.");
    navigate('/applicationsubmitted');
  };

  const toggleBusinessType = () => {
    setFormData({
      ...formData,
      businessType: formData.businessType === 'buyer' ? 'seller' : 'buyer',
    });
  };

  return (
    <div>
      <Header />
      <div className="signup-page">
        <section className="form-section">
          <h2>Apply to Join Eco-Source</h2>
          
          <div>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder=" Full Name*"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
                <input
                type="email"
                name="email"
                placeholder=" Email Address*"
                value={formData.email}
                onChange={handleInputChange}
                required
                />
                <input
                type="text"
                name="username"
                placeholder=" Username*"
                value={formData.username}
                onChange={handleInputChange}
                required
                />
                <input
                type="password"
                name="password"
                placeholder=" Password*"
                value={formData.password}
                onChange={handleInputChange}
                required
                />
                <input
                type="text"
                name="companyName"
                placeholder=" Company Name*"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                />
                <input
                type="text"
                name="address"
                placeholder=" Company Address*"
                value={formData.address}
                onChange={handleInputChange}
                required
                />

                {/* Business Type Slider */}
                <div className="slider-container">
                  <div className="slider" onClick={toggleBusinessType}>
                    <span className={`slider-label ${formData.businessType === 'buyer' ? 'active' : ''}`}>BUYER</span>
                    <span className={`slider-label ${formData.businessType === 'seller' ? 'active' : ''}`}>SELLER</span>
                    <div className={`slider-toggle ${formData.businessType === 'seller' ? 'active' : ''}`}></div>
                  </div>
                </div>

                <textarea
                  name="productInterests"
                  placeholder=" Materials and/or Products Interested In/Selling: "
                  value={formData.productInterests}
                  onChange={handleInputChange}
                />

                {/* Sleek File Upload Section */}
                <div className="file-upload">
                  <label htmlFor="businessLicense">Upload Business License (PDF, JPEG): </label>
                  <input
                    type="file"
                    id="businessLicense"
                    name="businessLicenseFile"
                    accept=".pdf, .jpeg, .jpg"
                    onChange={handleFileChange}
                    required
                    hidden
                  />
                  <button
                    type="button"
                    className="upload-button"
                    onClick={() => document.getElementById('businessLicense').click()}
                  >
                    Upload Document
                  </button>
                  {formData.businessLicenseFile && <p>{formData.businessLicenseFile.name}</p>}
                </div>

                <button type="submit">Submit Application</button>
              </form>
            </div>
        </section>
        
      </div>
      <Footer />
      </div>
  );
}

export default Signup;
