import React from 'react';
import './NewArrivals.css';

// Aap images ko yahan import kar sakte hain ya direct unsplash/public links de sakte hain
import product1 from '../assets/images/product1.png'; // Aap apni product images yahan laga sakte hain
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';
import product4 from '../assets/images/product4.png';

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      image: product1,
      rating: 4.5,
      reviews: "4.5/5",
      price: "$120",
      oldPrice: null,
      discount: null,
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      image: product2,
      rating: 3.5,
      reviews: "3.5/5",
      price: "$240",
      oldPrice: "$260",
      discount: "-20%",
    },
    {
      id: 3,
      name: "Checkered Shirt",
      image: product3,
      rating: 4.5,
      reviews: "4.5/5",
      price: "$180",
      oldPrice: null,
      discount: null,
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      image: product4,
      rating: 4.5,
      reviews: "4.5/5",
      price: "$130",
      oldPrice: "$160",
      discount: "-30%",
    },
  ];

  return (
    <section className="new-arrivals-section">
      <div className="new-arrivals-container">
        <h2 className="section-title">NEW ARRIVALS</h2>
        
        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-box">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              
              {/* Rating */}
              <div className="product-rating">
                <span className="stars">★★★★☆</span>
                <span className="rating-number">{product.reviews}</span>
              </div>

              {/* Price & Discount */}
              <div className="product-pricing">
                <span className="current-price">{product.price}</span>
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                {product.discount && <span className="discount-badge">{product.discount}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="view-all-container">
          <button className="view-all-btn">View All</button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;