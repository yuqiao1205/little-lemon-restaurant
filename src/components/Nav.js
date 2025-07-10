import React from "react";
import logo from "../assets/logo.svg"; // Adjust the path as necessary

const Nav = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      {/* logo */}
      <a href="/" className="logo">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </a>

      {/* mobile hamburger bar */}
      {/* display: none on desktop in css setting*/}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* desktop nav items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/about">Services</a>
        </li>
        <li>
          <a href="/about">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/order-online">Order Online</a>
        </li>
        <li>
          <a href="/order-online">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
