import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Container } from './App.styled';

import Layout from '../Layout/Layout';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MoviesDetails = lazy(() => import('../../pages/MoviesDetails'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/Cast'));
const NotFound = lazy(() => import('../../pages/NotFound'));

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
