import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e37708b7fb6536a3c046b3464e4c85b5';

export const getMoviesApi = async () => {
  try {
    const response = await axios.get('/trending/all/day?language=en-US', {
      params: {
        api_key: API_KEY,
      },
    });

    const getMovies = response.data.results;
    return getMovies;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getMovieSearch = async query => {
  try {
    const response = await axios.get(
      `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    const getMovies = response.data.results;
    return getMovies;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(`/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    const getMovies = response.data;
    return getMovies;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getMovieCast = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits?language=en-US`, {
      params: {
        api_key: API_KEY,
      },
    });

    const getMovies = response.data;
    return getMovies;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(`/movie/${id}/reviews?language=en-US`, {
      params: {
        api_key: API_KEY,
      },
    });

    const getMovies = response.data;
    return getMovies;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
