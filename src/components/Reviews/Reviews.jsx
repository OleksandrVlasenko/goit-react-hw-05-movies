import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RenderReviews } from 'components/Reviews/RenderReviews';
import { fetchImgsInstance } from 'utils/themoviedbApi';
import NotFound from 'components/NotFound/NotFound';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await fetchImgsInstance.getMovieReviews(movieId);
        console.log('Review:', data.results);

        setReview(data.results);
      } catch (error) {
        <NotFound error={error} />;
      }
    }

    fetchData();
  }, [movieId]);
  return <>{review && <RenderReviews review={review} />}</>;
};

export default Reviews;
