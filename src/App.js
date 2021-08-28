import './App.css';
import axios from "axios"
import { useState } from 'react'
import Movies from './components/Movies'

function App() {

  const API_KEY = "4cc1b68a07fe5ba265950e85ac96cb2c"
  const BASE_URL = `https://api.themoviedb.org/3`
  
  //const data = axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=4cc1b68a07fe5ba265950e85ac96cb2c&language=en-US&page=1")
    //.then(res => console.log(res.data.results))

  const [movies, setMovies] = useState([{
    0: {
      movie: 'test 0'
    },
    1: {
      movie: 'test 1'
    },
    2: {
      movie: 'test 2'
    },
    3: {
      movie: 'test 3'
    },
    4: {
      movie: 'test 4'
    },

  }])

  console.log(movies)
  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
