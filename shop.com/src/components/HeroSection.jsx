import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/images/hero.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Content Area */}
        <div className="hero-content">
          <h1 className="hero-title">
            FIND CLOTHES<br />
            THAT MATCHES<br />
            YOUR STYLE
          </h1>
          <p className="hero-description">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="hero-btn">Shop Now</button>

          {/* Stats Section */}
          <div className="hero-stats">
            <div className="stat-item">
              <h2>200+</h2>
              <p>International Brands</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h2>2,000+</h2>
              <p>High-Quality Products</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h2>30,000+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="hero-image-wrapper">
          {/* Decorative Sparkle Icons */}
          <div className="sparkle sparkle-top">✦</div>
          <div className="sparkle sparkle-bottom">✦</div>
          
          <img 
            src={heroImage}
            alt="Models wearing stylish clothes" 
            className="hero-main-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;