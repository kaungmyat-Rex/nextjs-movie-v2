import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "Movie",
  initialState: {
    MovieData: [],
  },
  reducers: {
    setMovieData: (state, action) => {
      state.MovieData = action.payload;
    },
  },
});

export const { setMovieData } = MovieSlice.actions;
export const MovieListReducer = MovieSlice.reducer;
