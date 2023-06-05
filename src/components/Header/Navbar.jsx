import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/peliculas" className="navbar-link">
            Películas
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/series" className="navbar-link">
            Series
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
