export const SET_FILTER_YEAR = "SET_FILTER_YEAR";
export const SET_RESULTS_PER_PAGE = "SET_RESULTS_PER_PAGE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const setFilterYear = (year) => ({
  type: SET_FILTER_YEAR,
  payload: year,
});

export const setResultsPerPage = (results) => ({
  type: SET_RESULTS_PER_PAGE,
  payload: results,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
