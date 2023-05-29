import { useSearchParams } from "react-router-dom";

import { Message } from 'utils/message';


const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = e => {
    const query = e.target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
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
        onChange={updateQueryString}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
