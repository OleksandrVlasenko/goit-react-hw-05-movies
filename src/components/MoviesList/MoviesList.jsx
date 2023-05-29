import PropTypes from 'prop-types';

import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ title, id }) => (
        <MoviesListItem key={id} title={title} id={id} />
      ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
}
