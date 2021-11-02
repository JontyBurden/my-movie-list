import './App.css';
import { useState, useEffect } from 'react';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import useFetch from './components/useFetch';

const API_KEY = "4cc1b68a07fe5ba265950e85ac96cb2c"
const BASE_URL = `https://api.themoviedb.org/3`
const FEATURED_API = 'https://api.themoviedb.org/3/movie/popular?api_key=4cc1b68a07fe5ba265950e85ac96cb2c&language=en-US&page=1'


function App() {

  const { movies } = useFetch(FEATURED_API)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Movies movies={movies} /> 
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </div>
    </Router> 
  )
}

export default App;
