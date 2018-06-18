import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

const movie = ({ movieItem }) => (
  <Link to={`/${movieItem.id}`}>
    <Overdrive id={movieItem.id}>
      <img className="poster" src={`${POSTER_PATH}${movieItem.poster_path}`} alt={movieItem.title} />
    </Overdrive>
  </Link>
);

movie.propTypes = {
  movieItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default movie;
