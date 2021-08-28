import Movie from './Movie'
const Movies = ({ movies }) => {
    return (
        <div>
            {movies.map((movie) => (
                <Movie movie={movie} />
            ))}
        </div>
    );
}
 
export default Movies;