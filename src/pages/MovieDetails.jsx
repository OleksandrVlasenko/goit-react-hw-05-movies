import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { Message } from 'utils/message';
import { fetchImgsInstance } from 'utils/themoviedbApi';

const MovieDatails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await fetchImgsInstance.getMovieDetails(movieId);

        setMovie(data);
      } catch (error) {
        Message.failure(error.message);
        Message.failure(
          'Щось пішло не так, спробуйте перезавантажити сторінку'
        );
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {Math.round(movie.vote_average) * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <div>
              {Object.values(movie.genres).map(({ name }) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
          <h4>Aditional information</h4>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Review</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDatails;
