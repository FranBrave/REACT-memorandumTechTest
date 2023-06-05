import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleLinkClick = () => {
    setClick(false);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-container ${click ? "active" : ""}`}>
        <Link to="/" className="navbar-logo">
          Franflix
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes size={24} style={{ color: "#fff", zIndex: 2 }} />
          ) : (
            <FaBars size={24} style={{ color: "#fff", zIndex: 2 }} />
          )}
        </div>
        <ul className={`nav-menu ${click ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/peliculas"
              className="nav-link"
              onClick={handleLinkClick}
            >
              Películas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/series" className="nav-link" onClick={handleLinkClick}>
              Series
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
