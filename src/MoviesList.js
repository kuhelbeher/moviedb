/* eslint react/no-did-mount-set-state: 0 */

import React, { PureComponent } from 'react';

import Movie from './Movie';

const API_KEY = 'cad25d09e7670f002bbe0190f2192baa';
const LANG = 'ru-RU';

class MoviesList extends PureComponent {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      // cad25d09e7670f002bbe0190f2192baa
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${LANG}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
      const movies = await res.json();

      this.setState({
        movies: movies.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="movie-grid">
        {this.state.movies.map(movie => <Movie key={movie.id} movieItem={movie} />)}
      </div>
    );
  }
}

export default MoviesList;

