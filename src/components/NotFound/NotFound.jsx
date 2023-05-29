import PropTypes from 'prop-types';

import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { Message } from 'utils/message';

const NotFound = ({ error }) => {
  if (error) {
    Message.failure(error.message);
  }
  Message.failure('Щось пішло не так, спробуйте перезавантажити сторінку');
  return (
    <>
      <GoBackBtn link="/" />
      <h2>Сторінку не знайдено</h2>
    </>
  );
};

export default NotFound;

NotFound.propTypes = {
  error: PropTypes.object,
}
