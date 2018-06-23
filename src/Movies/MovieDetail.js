/* eslint react/no-did-mount-set-state: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovie, resetMovie } from './actions';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  componentDidMount() {
    const { getMovie, match } = this.props;
    getMovie(match.params.id);
  }

  componentWillUnmount() {
    this.props.resetMovie();
  }


  render() {
    const { movie, isLoaded } = this.props;
    let output = <h1>Loading...</h1>;
    if (isLoaded) {
      output = (
        <div className="movie-wrapper" style={{ backgroundImage: `url("${BACKDROP_PATH}${movie.backdrop_path}")` }}>
          <div className="movie-info">
            <img className="poster" src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
            <div>
              <h1>{movie.title}</h1>
              <h3>{movie.release_date}</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      );
    }
    return output;
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie,
  isLoaded: state.movies.movieLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovie,
  resetMovie,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
