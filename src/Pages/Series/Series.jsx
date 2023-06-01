import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "./Popup";
import data from "../../data/sample.json";
import "./Series.scss";

const Series = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);
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
        (item) => item.programType === "series" && item.releaseYear >= 2010
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

    setSeriesData(paginatedData);
  }, [filterYear, currentPage, resultsPerPage]);

  const handleClick = (series) => {
    setSelectedSeries(series);
  };

  const handleClose = () => {
    setSelectedSeries(null);
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
      <h1>Series</h1>
      <div className="card-list">
        {seriesData.map((series) => (
          <div
            key={series.title}
            onClick={() => handleClick(series)}
            className="card"
          >
            <img src={series.images["Poster Art"].url} alt={series.title} />
            <h2>{series.title}</h2>
          </div>
        ))}
      </div>
      {selectedSeries && (
        <Popup series={selectedSeries} onClose={handleClose} />
      )}
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          Previous page
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          Next page
        </button>
      </div>
    </div>
  );
};

export default Series;
