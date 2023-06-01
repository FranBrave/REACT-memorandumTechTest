import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "./Popup";
import data from "../../data/sample.json";
import "./Peliculas.scss";

const Peliculas = () => {
  const [peliculasData, setPeliculasData] = useState([]);
  const [selectedPelicula, setSelectedPelicula] = useState(null);
  const [filterYear, setFilterYear] = useState("");
  const [resultsPerPage, setResultsPerPage] = useState(5);

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const currentPageParam = queryParams.get("page");
  const currentPage = currentPageParam ? parseInt(currentPageParam) : 1;

  const setCurrentPage = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page);
    navigate({ search: searchParams.toString() });
  };

  useEffect(() => {
    let filteredAndSortedData = data.entries
      .filter(
        (item) => item.programType === "movie" && item.releaseYear >= 2010
      )
      .sort((a, b) => a.title.localeCompare(b.title));

    if (filterYear) {
      filteredAndSortedData = filteredAndSortedData.filter(
        (item) => item.releaseYear === parseInt(filterYear)
      );
    }

    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const paginatedData = filteredAndSortedData.slice(startIndex, endIndex);

    setPeliculasData(paginatedData);
  }, [filterYear, currentPage, resultsPerPage]);

  const handleClick = (pelicula) => {
    setSelectedPelicula(pelicula);
  };

  const handleClose = () => {
    setSelectedPelicula(null);
  };

  return (
    <div className="container">
      <div className="filter">
        <input
          type="text"
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
          placeholder="Filter by year"
        />
        <select
          value={resultsPerPage}
          onChange={(e) => setResultsPerPage(parseInt(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <h1>Peliculas</h1>
      <div className="card-list">
        {peliculasData.map((pelicula) => (
          <div
            key={pelicula.title}
            onClick={() => handleClick(pelicula)}
            className="card"
          >
            <img src={pelicula.images["Poster Art"].url} alt={pelicula.title} />
            <h2>{pelicula.title}</h2>
          </div>
        ))}
      </div>
      {selectedPelicula && (
        <Popup pelicula={selectedPelicula} onClose={handleClose} />
      )}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous page
        </button>
        <button
          disabled={currentPage * resultsPerPage >= peliculasData.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default Peliculas;
