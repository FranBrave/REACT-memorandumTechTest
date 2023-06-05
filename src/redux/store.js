import { createStore, combineReducers } from "redux";
import peliculasReducer from "./reducers/peliculasReducer";
import seriesReducer from "./reducers/seriesReducer";

const rootReducer = combineReducers({
  peliculas: peliculasReducer,
  series: seriesReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
