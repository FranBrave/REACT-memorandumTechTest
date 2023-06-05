import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Sumérgete en una de nuestras aventuras</h1>
      <div className="sections">
        <div className="section">
          <Link to="/series" className="link">
            <div className="section-content">
              <h2>Series</h2>
              <p>Descubre nuestras emocionantes series</p>
            </div>
          </Link>
        </div>
        <div className="section">
          <Link to="/peliculas" className="link">
            <div className="section-content">
              <h2>Películas</h2>
              <p>Explora nuestra amplia selección de películas</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
