import React from "react";
import "./Popup.scss";

const Popup = ({ series, onClose }) => (
  <div className="modal-container">
    <div className="modal-background" onClick={onClose}></div>
    <div className="modal-content">
      <h2>{series.title}</h2>
      <img src={series.images["Poster Art"].url} alt={series.title} />
      <p>{series.description}</p>
      <p>{series.releaseYear}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default Popup;
