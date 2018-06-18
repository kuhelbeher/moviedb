/* eslint react/no-did-mount-set-state: 0 */

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

const API_KEY = 'cad25d09e7670f002bbe0190f2192baa';
const LANG = 'ru-RU';

class App extends Component {
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
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path="/test" component={test} />
          {this.state.movies.map(movie => <Movie key={movie.id} movieItem={movie} />)}
        </div>
      </Router>
    );
  }
}

export default App;

const test = () => (
  <h1>YEKSJFG</h1>
);
