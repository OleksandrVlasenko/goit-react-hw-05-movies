import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import MovieCard from 'components/MovieCard/MovieCard';
import AditionalInformation from 'components/AditionalInformation/AditionalInformation';
import { fetchImgsInstance } from 'utils/themoviedbApi';
import NotFound from 'components/NotFound/NotFound';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: {
            title,
            release_date,
            vote_average,
            overview,
            genres,
            poster_path,
          },
        } = await fetchImgsInstance.getMovieDetails(movieId);

        setMovie({
          title,
          release_date,
          vote_average,
          overview,
          genres,
          poster_path,
        });
      } catch (error) {
        <NotFound error={error} />;
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <>
      <GoBackBtn link={backLinkHref.current} />
      {movie && (
        <>
          <MovieCard movie={movie} />
          <AditionalInformation />
        </>
      )}
    </>
  );
};

export default MovieDetails;
