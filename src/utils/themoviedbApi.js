import axios from 'axios';

const BASE_URL =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 1000;

class fetchImgs {
  #AUTH_KEY = 'fba695bf8cd97c2ef1c2a8a207a50791';

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmE2OTViZjhjZDk3YzJlZjFjMmE4YTIwN2E1MDc5MSIsInN1YiI6IjY0NzI1YzdiYmUyZDQ5MDBhN2Q1ZDBmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lPU0wQ1y9n834eQ_fI0wPgzW-vuaEfLFb91z2AfAWd0',
    },
  };

  get searchName() {
    return this.options.params.q;
  }

  set searchName(newName) {
    this.options.params.q = newName;
  }

  get page() {
    return this.options.params.page;
  }

  set page(newPage) {
    this.options.params.page = newPage;
  }

  get perPage() {
    return this.options.params.per_page;
  }

  set perPage(newPerPage) {
    this.options.params.per_page = newPerPage;
  }

  async getImgs() {
    return await axios.request(this.options);
  }
}

export const fetchImgsInstance = new fetchImgs();
