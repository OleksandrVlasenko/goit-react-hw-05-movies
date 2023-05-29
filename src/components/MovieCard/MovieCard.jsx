const MovieCard = ({ movie }) => {
  const { title, release_date, vote_average, overview, genres } = movie;
  return (
    <div>
      <h2>
        {title}
        {release_date !== '' ? (
          <span> ({release_date.slice(0, 4)})</span>
        ) : (
          ''
        )}
      </h2>
      <p>User Score: {Math.round(vote_average) * 10}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <div>
        {Object.values(genres).map(({ name }) => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
