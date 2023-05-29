import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchImgsInstance } from 'utils/themoviedbApi';
import NotFound from '../NotFound/NotFound';
import { RenderCast } from './RenderCast';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await fetchImgsInstance.getMovieCredits(movieId);

        const cast = data.cast.map(({ id, name, character, profile_path }) => ({
          id,
          name,
          character,
          profile_path,
        }));

        setCast(cast);
      } catch (error) {
        <NotFound error={error} />;
      }
    }

    fetchData();
  }, [movieId]);

  return <>{cast && <RenderCast cast={cast} />}</>;
};

export default Cast;
