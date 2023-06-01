import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a nuestra aplicación de películas y series</h1>
      <Link to="/series" className="link">
        <div>
          <h2>Series</h2>
          <p>Click aquí para ver nuestras series</p>
        </div>
      </Link>
      <Link to="/peliculas" className="link">
        <div>
          <h2>Películas</h2>
          <p>Click aquí para ver nuestras películas</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
