import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

const movie = ({ movieItem }) => (
  <Link to={`/${movieItem.id}`}>
    <img className="poster" src={`${POSTER_PATH}${movieItem.poster_path}`} alt={movieItem.title} />
  </Link>
);

movie.propTypes = {
  movieItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default movie;
