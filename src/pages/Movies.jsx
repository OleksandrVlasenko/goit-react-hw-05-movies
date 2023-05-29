import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchImgsInstance } from 'utils/themoviedbApi';
import { Message } from 'utils/message';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import NotFound from 'components/NotFound/NotFound';

const Movies = () => {
  const [incomingValue, setIncomingValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const queryRef = useRef(searchParams.get('query') ?? '');

  useEffect(() => {
    setIncomingValue(queryRef.current);
  }, []);

  useEffect(() => {
    if (incomingValue === '') {
      return;
    }
    async function fetchData() {
      try {
        const {
          data: { results },
        } = await fetchImgsInstance.getSearchMovie(incomingValue);

        if (results.length === 0) {
          Message.failure('По вашому запиту нічого не знайдено');
          setSearchMovies([]);
          return;
        }

        setSearchMovies(results);
      } catch (error) {
        <NotFound error={error} />
      }
    }

    fetchData();
  }, [incomingValue]);

  return (
    <>
      <SearchForm onSubmit={setIncomingValue} />
      <MoviesList movies={searchMovies} />
    </>
  );
};

export default Movies;
