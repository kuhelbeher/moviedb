/* eslint react/no-did-mount-set-state: 0 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovies } from './actions';

import Movie from './Movie';

class MoviesList extends PureComponent {
  componentDidMount() {
    const { getMovies, isLoaded, moviesLoadedAt } = this.props;
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || (new Date() - new Date(moviesLoadedAt)) > oneHour) {
      getMovies();
    }
  }

  render() {
    const { movies, isLoaded } = this.props;
    if (!isLoaded) return <h1>Loading...</h1>;
    return (
      <div className="movie-grid">
        {movies.map(movie => <Movie key={movie.id} movieItem={movie} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  moviesLoadedAt: state.movies.moviesLoadedAt,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

