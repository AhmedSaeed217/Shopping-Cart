import React, { useContext } from "react";
import "./Navbar.css";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
function Navbar() {
  const { cartItems } = useContext(CartContext);
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
                <Link className="active" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/team"}>Team</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="cart">
            <Link to={"/cart"}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <span>{cartItems.length}</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
