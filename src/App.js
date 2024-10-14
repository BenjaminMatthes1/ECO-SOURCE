import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import BuyerDashboard from './components/BuyerDashboard'; // Add BuyerDashboard
import SellerDashboard from './components/SellerDashboard'; // Add SellerDashboard
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import ApplicationSubmitted from './components/ApplicationSubmitted';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const userType = localStorage.getItem('userType'); // Get the user type from localStorage

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/applicationsubmitted" element={<ApplicationSubmitted />} />
        
        {/* Redirect to the appropriate dashboard based on the user type */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated 
              ? (userType === 'buyer' ? <BuyerDashboard /> : <SellerDashboard />) 
              : <Navigate to="/login" />
          }
        />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
