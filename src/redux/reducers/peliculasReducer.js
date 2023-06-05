import {
  SET_FILTER_YEAR,
  SET_RESULTS_PER_PAGE,
  SET_CURRENT_PAGE,
} from "../actions/peliculasActions";

const initialState = {
  filterYear: "",
  resultsPerPage: 5,
  currentPage: 1,
};

const peliculasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_YEAR:
      return { ...state, filterYear: action.payload };

    case SET_RESULTS_PER_PAGE:
      return { ...state, resultsPerPage: action.payload };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
};

export default peliculasReducer;
