import './App.css';

const IMG_API = 'https://image.tmdb.org/t/p/w300';

const Movie = ({ title, poster_path, backdrop_path, overview, vote_average }) => {
    return (
        <div className="movie-card">
            <img src={IMG_API + poster_path} alt={title} />
            <div className="bottom-left-title"></div>
        </div>
    );
}
 
export default Movie;