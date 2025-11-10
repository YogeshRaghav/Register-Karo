import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo-container">
        <div className="logo">
          Register<span className="highlight">Karo</span>
        </div>
      </div>

      {/* Navigation Links and Contact Section */}
      <div className="nav-contact-container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/our-services">Our Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>

        <div className="contact">
          <a href="tel:+918427476183">+91 999998888</a>
          <button className="btn-primary">Talk To An Expert</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
