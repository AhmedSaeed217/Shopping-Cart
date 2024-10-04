import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <header>
        <div className="container">
          <div className="logo">
            <h2>Logo</h2>
          </div>

          <nav>
            <ul>
              <li>
                <a className="active" href="">
                  Home
                </a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>5</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
