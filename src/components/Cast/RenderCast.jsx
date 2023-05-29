import placeholder from 'images/images.png';
import { fetchImgsInstance } from 'utils/themoviedbApi';

export const RenderCast = ({ cast }) => {
  return (
    <>
      {cast.length === 0 ? (
        <p>Нічого не знайдено</p>
      ) : (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? fetchImgsInstance.getImg('w45', profile_path)
                    : placeholder
                }
                alt={name}
                width="45"
              />
              <h5>{name}</h5>
              {character !== '' && <p>Character: {character}</p>}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
