import React from 'react';

import PropTypes from 'prop-types';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

const movie = ({ movieItem }) => (
  <div>
    <img src={`${POSTER_PATH}${movieItem.poster_path}`} alt={movieItem.title} />
  </div>
);

movie.propTypes = {
  movieItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default movie;
