import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import logo from "../assets/logo.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      {/* logo */}
      <Link to="/" className="logo">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </Link>

      {/* mobile hamburger icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* nav items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>

        <li>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/bookings" onClick={() => setMenuOpen(false)}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order-online" onClick={() => setMenuOpen(false)}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
