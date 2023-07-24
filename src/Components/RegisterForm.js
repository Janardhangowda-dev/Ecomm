import React, { useState } from 'react';
import './Register.css';


const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Add your registration logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Contact Number:', contactNumber);
    console.log('Address:', address);
    console.log('Password:', password);
  };

  const validateForm = () => {
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      contactNumber.trim() === '' ||
      address.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      setErrorMessage('All fields are required');
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return false;
    }

    setErrorMessage('');
    return true;
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
