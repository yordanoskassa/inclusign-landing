import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // Adjust this path as needed

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll to toggle background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle toggling the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Close the mobile menu when a link is clicked (optional)
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-bar">
        {/* Left side: Logo */}
        <div className="nav-brand">
          <img src={logo} alt="Brand Logo" className="brand-logo" />
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          {/* This is a simple "icon" using 3 bars. You could also use an <svg> or an icon library. */}
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation links - hide/show based on mobileMenuOpen */}
        {/* <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li onClick={handleLinkClick}>Home</li>
          <li onClick={handleLinkClick}>About</li>
          <li onClick={handleLinkClick}>Product</li>
          <li onClick={handleLinkClick}>Contact</li>
        </ul> */}

        {/* Right side: Call-to-action buttons (optional) */}
        <div className="nav-actions">
          <button className="btn btn-white">Request a demo</button>
          <button className="btn btn-black">Get started</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
