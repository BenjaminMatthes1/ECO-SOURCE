import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the username and password in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setIsSignedUp(true); // Redirect or show success message
  };

  if (isSignedUp) {
    return <Navigate to="/login" />; // Redirect to login after signup
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
