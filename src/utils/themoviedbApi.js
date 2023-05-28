import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 1000;

class fetchImgs {
  #AUTH_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmE2OTViZjhjZDk3YzJlZjFjMmE4YTIwN2E1MDc5MSIsInN1YiI6IjY0NzI1YzdiYmUyZDQ5MDBhN2Q1ZDBmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lPU0wQ1y9n834eQ_fI0wPgzW-vuaEfLFb91z2AfAWd0';

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: this.#AUTH_KEY,
    },
    params: {
      language: 'en-US',
    },
  };

  async getTrendingMovie() {
    return await axios.get(`/trending/movie/day`, this.options);
  }

  async getSearchMovie(query) {
    return await axios.get(
      `/search/movie?query=${query}&include_adult=false&page=1`,
      this.options
    );
  }

  async getMovieDetails(id) {
    return await axios.get(`/movie/${id}}`, this.options);
  }

  async getMovieCredits(id) {
    return await axios.get(`/movie/${id}/credits`, this.options);
  }

  async getMovieReviews(id) {
    return await axios.get(`/movie/${id}/reviews?page=1`, this.options);
  }
}

export const fetchImgsInstance = new fetchImgs();
