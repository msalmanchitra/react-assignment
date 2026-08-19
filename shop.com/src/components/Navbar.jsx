import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        
        {/* Left: Mobile Menu Hamburger & Logo */}
        <div className="navbar-left">
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          <a href="#" className="navbar-logo">SHOP.CO</a>
        </div>

        {/* Center: Navigation Links & Dropdown */}
        <nav className={`navbar-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-item dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <span className="nav-link">
              Shop 
              <svg className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#men">Men</a></li>
                <li><a href="#women">Women</a></li>
                <li><a href="#kids">Kids</a></li>
              </ul>
            )}
          </div>
          <a href="#on-sale" className="nav-link">On Sale</a>
          <a href="#new-arrivals" className="nav-link">New Arrivals</a>
          <a href="#brands" className="nav-link">Brands</a>
        </nav>

        {/* Search Bar (Desktop & Tablet) */}
        <div className="navbar-search">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="search-input"
          />
        </div>

        {/* Right: Cart & User Icons */}
        <div className="navbar-right">
          <a href="#cart" className="icon-btn" aria-label="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </a>
          <a href="#profile" className="icon-btn" aria-label="Account">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;