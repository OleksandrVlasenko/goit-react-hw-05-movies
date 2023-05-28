import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import MovieDatails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDatails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
