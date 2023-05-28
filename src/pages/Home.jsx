import { useEffect, useState } from 'react';

import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { fetchImgsInstance } from 'utils/themoviedbApi';
import { Message } from 'utils/message';

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
        Message.failure(error.message);
        Message.failure(
          'Щось пішло не так, спробуйте перезавантажити сторінку'
        );
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ title, id }) => (
          <TrendingMovies key={id} title={title} id={id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
