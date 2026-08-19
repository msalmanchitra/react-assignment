import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Content Column */}
        <div className="hero-content">
          <div className="hero-title-wrapper">
            <h1 className="hero-heading">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            {/* Decorative Sparkle Icon (Right side of heading) */}
            <div className="sparkle-icon sparkle-1">✦</div>
          </div>

          <p className="hero-description">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>

          <button className="hero-btn">
            Shop Now
          </button>

          {/* Stats Section */}
          <div className="hero-stats">
            <div className="stat-item">
              <h3 className="stat-number">200+</h3>
              <p className="stat-label">International Brands</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number">2,000+</h3>
              <p className="stat-label">High-Quality Products</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number">30,000+</h3>
              <p className="stat-label">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="hero-image-wrapper">
          <div className="sparkle-icon sparkle-2">✦</div>
          {/* Yahan aap apni image ka path daal sakte hain */}
          <img 
            src="./public/images/Hero.png" 
            alt="Models showcasing stylish fashion clothes" 
            className="HeroSection-main-image"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;