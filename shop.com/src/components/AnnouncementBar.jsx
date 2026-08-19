import React, { useState } from 'react';
import './AnnouncementBar.css';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="announcement-bar">
      <div className="announcement-container">
        <p className="announcement-text">
          Sign up and get 20% off to your first order.{' '}
          <a href="#signup" className="announcement-link">
            Sign Up Now
          </a>
        </p>
        <button 
          className="announcement-close-btn" 
          onClick={() => setIsVisible(false)}
          aria-label="Close"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;