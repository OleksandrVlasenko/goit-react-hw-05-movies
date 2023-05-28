import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Message } from 'utils/message';
import { fetchImgsInstance } from 'utils/themoviedbApi';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await fetchImgsInstance.getMovieCredits(movieId);
        console.log('fetchData  data:', data.cast);

        setCast(data.cast);
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
