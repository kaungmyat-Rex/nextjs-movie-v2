export const generes = [
  { id: 1, type: "popular" },
  { id: 2, type: "top rated" },
  { id: 3, type: "comedy" },
  { id: 4, type: "horror" },
  { id: 5, type: "action" },
  { id: 6, type: "romance" },
  { id: 7, type: "sci-fi" },
  { id: 8, type: "animation" },
];

export const movieCategoryList = [
  {
    title: "popular",
    url: `movie/popular?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US`,
  },
  {
    title: "top rated",
    url: `movie/top_rated?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US`,
  },
  {
    title: "action",
    url: `discover/movie?api_key=97daa3077452cbe6f793644c1afc0868&with_genres=28`,
  },
  {
    title: "comedy",
    url: `discover/movie?api_key=97daa3077452cbe6f793644c1afc0868&with_genres=35`,
  },
  {
    title: "horror",
    url: `discover/movie?api_key=97daa3077452cbe6f793644c1afc0868&with_genres=27`,
  },

  {
    title: "romance",
    url: `discover/movie?api_key=97daa3077452cbe6f793644c1afc0868&with_genres=10749`,
  },

  {
    title: "sci-fi",
    url: `discover/movie?api_key=97daa3077452cbe6f793644c1afc0868&with_genres=878`,
  },

  {
    title: "animation",
    url: `discover/movie?api_key=97daa3077452cbe6f793644c1afc0868&with_genres=16`,
  },
];
