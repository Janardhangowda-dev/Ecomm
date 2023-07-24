import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Logo</a>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/Category">Category</a>
            
          </li>
          <li className="navbar-item">
            <a href="/Shop">Shop</a>
          </li>
          <li className="navbar-item">
            <a href="/Blog">Blog</a>
          </li>
          <li className="navbar-item">
            <a href="/ContactUs">ContactUs</a>
          </li>
          <li className="navbar-item">
            <a href="/LoginPage">Profile</a>
            


            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
