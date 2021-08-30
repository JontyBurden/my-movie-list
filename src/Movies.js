import Movie from './Movie'
import './App.css';

const Movies = ({ movies }) => {
    return (
        <div className="movie-container">
            {movies.length > 0 && movies.map((movie) => (
                <Movie id={movie.id} {...movie} />
            ))}
        </div>
    );
}
 
export default Movies;