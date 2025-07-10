import React from "react";
import { Link } from "react-router-dom";
import food1 from "../assets/food1.jpg"; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations">
            <button>Reserve a Table</button>
          </Link>
        </div>
        {/* hero image */}
        <div>
          <img src={food1} alt="Serving food" className="banner-img" />
        </div>
      </section>
    </header>
  );
};

export default Header;
