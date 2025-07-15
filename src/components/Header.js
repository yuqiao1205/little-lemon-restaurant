import { Link } from "react-router-dom";
import restaurant from "../assets/restauranfood1.jpg"; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="hero">
          {/* Restaurant name and description */}
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/bookings">
            <button aria-label="Reserve a Table">Reserve a Table</button>
          </Link>
        </div>
        {/* hero image */}
        <div>
          <img src={restaurant} alt="Serving food" className="hero-img" />
        </div>
      </section>
    </header>
  );
};

export default Header;
