/* eslint react/no-did-mount-set-state: 0 */

import React, { Component } from 'react';

import Overdrive from 'react-overdrive';

const API_KEY = 'cad25d09e7670f002bbe0190f2192baa';
const LANG = 'ru-RU';
const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: null,
  }

  async componentDidMount() {
    try {
      // cad25d09e7670f002bbe0190f2192baa
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&language=${LANG}`);
      const movie = await res.json();

      this.setState({
        movie,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movie } = this.state;
    let output = <p>Loading...</p>;
    if (movie) {
      output = (
        <div className="movie-wrapper" style={{ backgroundImage: `url("${BACKDROP_PATH}${movie.backdrop_path}")` }}>
          <div className="movie-info">
            <Overdrive id={movie.id}>
              <img className="poster" src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
            </Overdrive>
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

export default MovieDetail;
