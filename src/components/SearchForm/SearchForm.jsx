import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Message } from 'utils/message';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();
  const queryRef = useRef(searchParams.get('query') ?? '');

  useEffect(() => {
    setQuery(queryRef.current);
  }, []);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim() === '') {
      Message.warning('Введіть назву фільму');
      return;
    }
    onSubmit(query.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="movie"
        autoFocus
        placeholder="Search movies"
        autoComplete="on"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
