import axios from 'axios';

const API_KEY = 'dd208677c341fec119543dd378b0d37a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getDayTrendingMovies = async () =>
  await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);

export const getMovieByQuery = query =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);