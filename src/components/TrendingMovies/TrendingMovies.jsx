import { LinkStyled } from "./TrendingMovies.styled";

const TrendingMovies = ({ title, id }) => {
  return <LinkStyled to={`/movies/${id}`}>{title}</LinkStyled>;
};

export default TrendingMovies;
