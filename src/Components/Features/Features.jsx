import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="feats">
        <div className="feat">
          <div className="feat-icon">
            <i class="fa-solid fa-truck"></i>
          </div>
          <div className="feat-description">
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="feat">
          <div className="feat-icon">
            <i class="fa-solid fa-headphones-simple"></i>
          </div>
          <div className="feat-description">
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="feat">
          <div className="feat-icon">
            <i class="fa-solid fa-shield"></i>
          </div>
          <div className="feat-description">
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Features;
