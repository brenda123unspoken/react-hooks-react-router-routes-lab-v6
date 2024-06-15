// Import React and necessary components
import React from 'react';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/Error.Page';

// Define your routes
const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/directors',
    element: <Directors />,
  },
  {
    path: '/actors',
    element: <Actors />,
  },
  {
    path: '/movie/:id',
    element: <Movie />,
  },
];

export default routes;
