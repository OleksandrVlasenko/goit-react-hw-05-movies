import { useEffect, useState } from 'react';

import { fetchImgsInstance } from 'utils/themoviedbApi';
import MoviesList from 'components/MoviesList/MoviesList';
import NotFound from 'components/NotFound/NotFound';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: { results },
        } = await fetchImgsInstance.getTrendingMovie();
        setTrendingMovies(results);
      } catch (error) {
        <NotFound error={error} />;
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;
