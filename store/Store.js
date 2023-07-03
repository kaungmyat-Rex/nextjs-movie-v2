import { configureStore } from "@reduxjs/toolkit";

import { MovieListReducer } from "./MovieListSlice";

export default configureStore({
  reducer: {
    Movie: MovieListReducer,
  },
});
