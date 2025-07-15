import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Assuming you have a logo image in assets folder

const Footer = () => (
  <footer>
    <section>
      <div className="restaurant-info">
        <img src={logo} alt="Little Lemon" />

        <p>We serve delicious food with a touch of love.</p>

        <p>
          &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
        </p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#terms-of-service">Terms of Service</Link>
          </li>
          <li>
            <Link to="#contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div id="contact">
        <h3>Contact Us</h3>
        <ul>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Main Street, Chicago, IL 60601</li>
          <li>Email: info@littlelemon.com</li>
        </ul>
      </div>
    </section>
  </footer>
);

export default Footer;
