import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email Address:', username);
    console.log('Password:', password);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleRegisterClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email Address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account?{' '}
          <Link to="/RegisterForm" onClick={handleRegisterClick}>
            Register
          </Link>
        </p>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Popup Message</h3>
            <p>Conditions apply. Please register to continue.</p>
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
