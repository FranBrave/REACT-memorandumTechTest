import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as seriesReducer } from "./reducers/series";
import { reducer as peliculasReducer } from "./reducers/peliculas";

const rootReducer = combineReducers({
  series: seriesReducer,
  peliculas: peliculasReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
