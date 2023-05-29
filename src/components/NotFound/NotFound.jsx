import { Link } from 'react-router-dom';

import { Message } from 'utils/message';

const NotFound = ({ error }) => {
  if (error) {
    Message.failure(error.message);
  }
  Message.failure('Щось пішло не так, спробуйте перезавантажити сторінку');
  return (
    <>
      <Link to="/">Go back</Link>
      <h2>Сторінку не знайдено</h2>
    </>
  );
};

export default NotFound;
