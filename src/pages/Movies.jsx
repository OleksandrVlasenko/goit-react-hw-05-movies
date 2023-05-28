import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { fetchImgsInstance } from 'utils/themoviedbApi';
import { Message } from 'utils/message';

const Movies = () => {
  const [incomingValue, setIncomingValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const queryRef = useRef(query);

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
          return;
        }

        setSearchMovies(results);
      } catch (error) {
        Message.failure(error.message);
        Message.failure(
          'Щось пішло не так, спробуйте перезавантажити сторінку'
        );
      }
    }

    fetchData();
  }, [incomingValue]);

  const updateQueryString = e => {
    const query = e.target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  function handleSubmit(e) {
    e.preventDefault();
    let { value } = e.currentTarget.elements.movie;
    if (value.trim() === '') {
      Message.warning('Введіть назву фільму');
      return;
    }
    setIncomingValue(value.toLowerCase());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movie"
          autoFocus
          placeholder="Search movies"
          autoComplete="on"
          value={query}
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchMovies.map(({ title, id }) => (
          <TrendingMovies key={id} title={title} id={id} />
        ))}
      </ul>
    </>
  );
};

export default Movies;
