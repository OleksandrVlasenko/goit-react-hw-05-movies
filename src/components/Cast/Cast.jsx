import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchImgsInstance } from 'utils/themoviedbApi';
import NotFound from '../NotFound/NotFound';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await fetchImgsInstance.getMovieCredits(movieId);
        console.log('Cast:', data.cast);

        setCast(data.cast);
      } catch (error) {
        <NotFound error={error} />;
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, name, character }) => (
            <div key={id}>
              <h5>{name}</h5>
              <p>Character: {character}</p>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
