import './App.css';
import { useState, useEffect } from 'react';
import Movies from './Movies';
import Navbar from './Navbar';

const API_KEY = "4cc1b68a07fe5ba265950e85ac96cb2c"
  const BASE_URL = `https://api.themoviedb.org/3`
  const FEATURED_API = 'https://api.themoviedb.org/3/movie/popular?api_key=4cc1b68a07fe5ba265950e85ac96cb2c&language=en-US&page=1'


function App() {

  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setMovies(data.results)
    })
  }, [])
  console.log(movies)
  return (
    <div className="App">
      <Navbar />
      <Movies movies={movies} />
    </div>
  )
}

export default App;
