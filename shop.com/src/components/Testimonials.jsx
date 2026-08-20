import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      verified: true,
      rating: "★★★★★",
      text: "\"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.\"",
    },
    {
      id: 2,
      name: "Alex K.",
      verified: true,
      rating: "★★★★★",
      text: "\"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.\"",
    },
    {
      id: 3,
      name: "James L.",
      verified: true,
      rating: "★★★★★",
      text: "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.\"",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header with Title and Arrow Buttons */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">OUR HAPPY CUSTOMERS</h2>
          <div className="testimonial-arrows">
            <button className="arrow-btn" aria-label="Previous">←</button>
            <button className="arrow-btn" aria-label="Next">→</button>
          </div>
        </div>

        {/* Reviews Cards Grid / Slider */}
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div className="testimonial-card" key={review.id}>
              <div className="testimonial-stars">{review.rating}</div>
              <div className="testimonial-user">
                <h3>{review.name}</h3>
                {review.verified && (
                  <span className="verified-badge" title="Verified Customer">
                    ✓
                  </span>
                )}
              </div>
              <p className="testimonial-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;