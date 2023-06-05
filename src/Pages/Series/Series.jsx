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

const Series = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("data/sample.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.entries);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const setCurrentPageWithUrlUpdate = (page) => {
    dispatch(setCurrentPageSeries(page));

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page.toString());
    navigate({ search: searchParams.toString() });
  };

  const filteredAndSortedData = data
    .filter(
      (item) =>
        item.programType === "series" &&
        (filterYear ? item.releaseYear === Number(filterYear) : true)
    )
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

  const totalPages = Math.ceil(filteredAndSortedData.length / resultsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops! Something went wrong...</p>;
  }

  return (
    <div className="container">
      <div className="header-bar">
        <h1>Series</h1>
      </div>
      <div className="filter">
        <div>
          <input
            type="text"
            value={filterYear}
            onChange={handleFilterYearChange}
            placeholder="Filtro por año"
          />
        </div>
        <div className="results-per-page">
          <label htmlFor="resultsPerPage">Resultados por página:</label>
          <select
            id="resultsPerPage"
            value={resultsPerPage}
            onChange={handleResultsPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="card-list">
        {paginatedData.length > 0 ? (
          paginatedData.map((series) => (
            <div
              key={series.title}
              onClick={() => handleClick(series)}
              className="card"
            >
              <div className="card-image">
                <img src={series.images["Poster Art"].url} alt={series.title} />
              </div>
              <h2>{series.title}</h2>
            </div>
          ))
        ) : (
          <p>
            No se han encontrado series con el año introducido en nuestra base
            de datos
          </p>
        )}
      </div>
      {selectedSeries && (
        <Popup series={selectedSeries} onClose={handleClose} />
      )}
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={handlePreviousPage}>
          {"<"} Prev
        </button>
        <div className="page-numbers">
          {pageNumbers.map((page) => (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPageWithUrlUpdate(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button disabled={currentPage === totalPages} onClick={handleNextPage}>
          Next {">"}
        </button>
      </div>
    </div>
  );
};

export default Series;
