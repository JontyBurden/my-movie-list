import { MovieDto } from './Models/MovieDto.js';
import  { MovieCard } from './Components/MovieCard.js'

const body = document.body;

let movie: MovieDto = new MovieDto("gladiator", 1999);
let movieCard: MovieCard = new MovieCard(movie);


body.appendChild(movieCard.createMovieCard());