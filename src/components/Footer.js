import React from "react";
import logo from "../images/logo.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-menu">
        <div className="above">
          <ul>
            <li>Information</li>
            <li>Shop Now</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="below">
          <div>
            <ul>
              <li>About Us</li>
              <li>Shop All</li>
              <li>FAQ</li>
              <li>Return and Exchange</li>
              <li>Terms of Service</li>
              <li>Refund</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>All Products</li>
              <li>Hemp Nutrtion</li>
              <li>CannaBliss</li>
              <li>Skin Health</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>+91 91081 54394</li>
              <li>info@indiahemoorganics.com</li>
              <li>#41/2 Castle Street, Ashok<br></br> Nagar, Bangalore - 560025</li>
              <li>Social media</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
