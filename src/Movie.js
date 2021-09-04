import './App.css';

const IMG_API = 'https://image.tmdb.org/t/p/w300';

const Movie = ({ title, poster_path, backdrop_path, overview, vote_average }) => {
    return (
        <div className="movie-card">
            <div className="title">{title}</div>
            <div className="genre">Genre</div>
            <img src={IMG_API+poster_path} alt={title} className="poster-path" />
            <div className="overview">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero atque ipsum alias odio, sed aspernatur nulla ullam provident, laudantium quos mollitia, consectetur impedit illum dolores cupiditate in esse nisi voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas nemo minima, nostrum numquam excepturi? Iste veniam, delectus vitae quasi quae officia sequi perspiciatis esse! Blanditiis voluptatum delectus velit harum.</div>
        </div>
    );
}
 
export default Movie;