import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";


const MovieDetails = () => {
    const { id } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4cc1b68a07fe5ba265950e85ac96cb2c&language=en-US`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setMovies(data)
        })
      }, [])

    return (
        <div className="movie-details">
            <h2>Movie Details - { id } { movies.title }</h2>
        </div>
    );
}
 
export default MovieDetails;