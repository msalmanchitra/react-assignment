import "./HeroSection.css";
import heroModels from "../assets/images/hero-models.png";

const stats = [
  {
    number: "200+",
    label: "International Brands",
  },
  {
    number: "2,000+",
    label: "High-Quality Products",
  },
  {
    number: "30,000+",
    label: "Happy Customers",
  },
];

function StarIcon({ className = "" }) {
  return <span className={`star-icon ${className}`} aria-hidden="true" />;
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1>
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>

          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed
            <br className="desktop-break" />
            to bring out your individuality and cater to your sense of style.
          </p>

          <button className="hero-button">
            Shop Now
          </button>

          {/* STATS */}
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div
                className={`stat-item ${
                  index !== stats.length - 1 ? "stat-border" : ""
                }`}
                key={stat.number}
              >
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-visual">

          {/* Small decorative icon */}
          <StarIcon className="star-small" />

          {/* Large decorative icon */}
          <StarIcon className="star-large" />

          <img
            src={heroModels}
            alt="Fashion models"
            className="hero-models"
          />
        </div>

      </div>
    </section>
  );
}