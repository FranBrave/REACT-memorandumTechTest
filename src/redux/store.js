import { configureStore } from "@reduxjs/toolkit";
import peliculasReducer from "./reducers/peliculasReducer";
import seriesReducer from "./reducers/seriesReducer";

const store = configureStore({
  reducer: {
    peliculas: peliculasReducer,
    series: seriesReducer,
  },
});

export default store;
