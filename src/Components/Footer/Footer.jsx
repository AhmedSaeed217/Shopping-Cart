import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="footer-links">
              <ul>
                <li>Home</li>
                <li>News</li>
                <li>About</li>
                <li>Our Team</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyrights &copy;2024. Developed By{" "}
          <a target="_blank" href="https://a-saeed.netlify.app/">
            SAEED
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
