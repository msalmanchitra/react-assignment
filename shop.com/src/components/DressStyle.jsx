import React from 'react';
import './DressStyle.css';

// Filhal hum hero.png use kar rahe hain, aap baad mein apni images laga lena
import casualImg from '../assets/images/image1.png';
import formalImg from '../assets/images/image2.png';
import partyImg from '../assets/images/image3.png';
import gymImg from '../assets/images/image4.png';

const DressStyle = () => {
  return (
    <section className="dress-style-section">
      <div className="dress-style-wrapper">
        <h2 className="dress-style-title">BROWSE BY DRESS STYLE</h2>
        
        <div className="dress-grid">
          {/* Casual Card (Chota Card) */}
          <div className="dress-card casual-card">
            <h3>Casual</h3>
            <img src={casualImg} alt="Casual Style" />
          </div>

          {/* Formal Card (Bara Card) */}
          <div className="dress-card formal-card">
            <h3>Formal</h3>
            <img src={formalImg} alt="Formal Style" />
          </div>

          {/* Party Card (Bara Card) */}
          <div className="dress-card party-card">
            <h3>Party</h3>
            <img src={partyImg} alt="Party Style" />
          </div>

          {/* Gym Card (Chota Card) */}
          <div className="dress-card gym-card">
            <h3>Gym</h3>
            <img src={gymImg} alt="Gym Style" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyle;