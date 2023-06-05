import {
  SET_FILTER_YEAR_SERIES,
  SET_RESULTS_PER_PAGE_SERIES,
  SET_CURRENT_PAGE_SERIES,
} from "../actions/seriesActions";

const initialState = {
  filterYear: "",
  resultsPerPage: 5,
  currentPage: 1,
};

const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_YEAR_SERIES:
      return { ...state, filterYear: action.payload };

    case SET_RESULTS_PER_PAGE_SERIES:
      return { ...state, resultsPerPage: action.payload };

    case SET_CURRENT_PAGE_SERIES:
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
};

export default seriesReducer;
