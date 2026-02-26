import React, { useState } from "react";
import logo from "../../img/logo.PNG";
import { NavLink } from "react-router-dom";
import "../../staticfiles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "link active" : "link";

  return (
    <header className="header">
      <nav className="navbar">

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" end onClick={closeMenu} className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
            About Us
          </NavLink>

          <NavLink to="/service" onClick={closeMenu} className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/why_us" onClick={closeMenu} className={navLinkClass}>
            Why Choose Us
          </NavLink>

          <NavLink to="/client" onClick={closeMenu} className={navLinkClass}>
            Clients
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
            Contact Us
          </NavLink>

          <NavLink to="/career" onClick={closeMenu} className={navLinkClass}>
            Career Section
          </NavLink>
        </div>

      </nav>
    </header>
  );
};

export default Header;