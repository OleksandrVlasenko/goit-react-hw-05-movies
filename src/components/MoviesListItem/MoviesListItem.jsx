import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LinkStyled } from './MoviesListItem.styled';

const MoviesListItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
      {title}
    </LinkStyled>
  );
};

export default MoviesListItem;

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
