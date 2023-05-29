export const RenderReviews = ({ review }) => {
  return (
    <>
      {review.length === 0 ? (
        <p>Нічого не знайдено</p>
      ) : (
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
