import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchImgsInstance } from 'utils/themoviedbApi';
import { Message } from 'utils/message';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import NotFound from 'components/NotFound/NotFound';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchData() {
      try {
        const {
          data: { results },
        } = await fetchImgsInstance.getSearchMovie(query);

        if (results.length === 0) {
          Message.failure('По вашому запиту нічого не знайдено');
          setSearchMovies([]);
          return;
        }

        const movies = results.map(({ title, id }) => ({ title, id }));

        setSearchMovies(movies);
      } catch (error) {
        <NotFound error={error} />;
      }
    }

    fetchData();
  }, [query]);

  const updateQueryString = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchForm onSubmit={updateQueryString} />
      <MoviesList movies={searchMovies} />
    </>
  );
};

export default Movies;
