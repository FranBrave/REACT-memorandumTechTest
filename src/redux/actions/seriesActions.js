export const SET_FILTER_YEAR_SERIES = "SET_FILTER_YEAR_SERIES";
export const SET_RESULTS_PER_PAGE_SERIES = "SET_RESULTS_PER_PAGE_SERIES";
export const SET_CURRENT_PAGE_SERIES = "SET_CURRENT_PAGE_SERIES";

export const setFilterYearSeries = (year) => ({
  type: SET_FILTER_YEAR_SERIES,
  payload: year,
});

export const setResultsPerPageSeries = (results) => ({
  type: SET_RESULTS_PER_PAGE_SERIES,
  payload: results,
});

export const setCurrentPageSeries = (page) => ({
  type: SET_CURRENT_PAGE_SERIES,
  payload: page,
});
