import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Message } from 'utils/message';
import { fetchImgsInstance } from 'utils/themoviedbApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await fetchImgsInstance.getMovieReviews(movieId);
        console.log('fetchData  data:', data.results);

        setReview(data.results);
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
      {(review &&
      //   review.length === 0) ? (
      //   <p>Нічого не знайдено</p>
      // ) : (
        <ul>
          {review.map(({ id, author, content }) => (
            <div key={id}>
              <h5>Author: {author}</h5>
              <p>{content}</p>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
