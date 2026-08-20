import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        {/* Left Heading Area */}
        <div className="newsletter-title-box">
          <h2>STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS</h2>
        </div>

        {/* Right Form Area */}
        <div className="newsletter-form-box">
          <div className="input-group">
            <span className="email-icon">✉️</span>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input" 
            />
          </div>
          <button className="newsletter-btn">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;