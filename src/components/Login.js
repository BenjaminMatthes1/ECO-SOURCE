import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Header from './Header'; // Assuming Header is already built
import Footer from './Footer'; // Assuming Footer is already built
import './Login.css'; // Import the updated CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Error message state
  const [shake, setShake] = useState(false); // State for shaking animation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication check and set user in localStorage
    if (username === 'user' && password === 'password') {
      localStorage.setItem('user', 'true'); // Store user as logged in
      setIsAuthenticated(true);
      setErrorMessage(''); // Clear any error messages
    } else {
      setShake(true); // Trigger the shaking animation
      setErrorMessage('Invalid username or password'); // Set error message
      setTimeout(() => setShake(false), 500); // Remove shake after animation
    }
  };

  if (isAuthenticated || localStorage.getItem('user')) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-page">
      <Header />
      <div className={`login-container ${shake ? 'shake' : ''}`}>
        <h2 className="login-heading">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>

        {/* Section for users who don't have an account */}
        <p className="no-account">
          Don’t have an account? <Link to="/signup" className="signup-link">Apply now to view the best plan for you</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
