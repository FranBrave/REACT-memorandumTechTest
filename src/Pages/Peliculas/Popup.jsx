import React from "react";
import "./Popup.scss";

const Popup = ({ pelicula, onClose }) => (
  <div className="modal-container">
    <div className="modal-background" onClick={onClose}></div>
    <div className="modal-content">
      <h2>{pelicula.title}</h2>
      <img src={pelicula.images["Poster Art"].url} alt={pelicula.title} />
      <p>{pelicula.description}</p>
      <p>{pelicula.releaseYear}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default Popup;
