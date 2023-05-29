import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <MoviesListItem key={id} title={title} id={id} />
      ))}
    </ul>
  );
};

export default MoviesList;
