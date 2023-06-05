import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "./Popup";
import {
  setFilterYearSeries,
  setResultsPerPageSeries,
  setCurrentPageSeries,
} from "../../redux/actions/seriesActions";
import "./Series.scss";
import data from "../../data/sample.json";

const Series = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);

  const filterYear = useSelector((state) => state.series.filterYear);
  const resultsPerPage = useSelector((state) => state.series.resultsPerPage);
  const currentPage = useSelector((state) => state.series.currentPage);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const currentPageParam = queryParams.get("page");
  const currentPageFromUrl = currentPageParam ? parseInt(currentPageParam) : 1;

  useEffect(() => {
    dispatch(setCurrentPageSeries(currentPageFromUrl));
  }, [dispatch, currentPageFromUrl]);

  const setCurrentPageWithUrlUpdate = (page) => {
    dispatch(setCurrentPageSeries(page));

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page.toString());
    navigate({ search: searchParams.toString() });
  };

  const filteredAndSortedData = data.entries
    .filter((item) => item.programType === "series" && item.releaseYear >= 2010)
    .sort((a, b) => a.title.localeCompare(b.title));

  const handleFilterYearChange = (e) => {
    dispatch(setFilterYearSeries(e.target.value));
    setCurrentPageWithUrlUpdate(1);
  };

  const handleResultsPerPageChange = (e) => {
    dispatch(setResultsPerPageSeries(parseInt(e.target.value)));
    setCurrentPageWithUrlUpdate(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPageWithUrlUpdate(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(filteredAndSortedData.length / resultsPerPage);
    if (currentPage < maxPage) {
      setCurrentPageWithUrlUpdate(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedData = filteredAndSortedData.slice(startIndex, endIndex);

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
          onChange={handleFilterYearChange}
          placeholder="Filtro por año"
        />
        <select value={resultsPerPage} onChange={handleResultsPerPageChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <h1>Series</h1>
      <div className="card-list">
        {paginatedData.map((series) => (
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
        <button disabled={currentPage === 1} onClick={handlePreviousPage}>
          Prev
        </button>
        <button
          disabled={
            currentPage * resultsPerPage >= filteredAndSortedData.length
          }
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Series;
