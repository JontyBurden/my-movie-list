import {AiOutlineStar} from 'react-icons/ai'
import {BiAddToQueue} from 'react-icons/bi'
import { useState } from 'react'
import Modal from './Modal';
import { Link } from 'react-router-dom';


const IMG_API = 'https://image.tmdb.org/t/p/w300';

const Movie = ({ title, poster_path, backdrop_path, overview, vote_average, genre_ids, id , vote_count}) => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="movie-card">
            <div className="title">
            
            <Link to={`movie/${id}`}>{title}</Link> 
                <div className="add">
                    <a><BiAddToQueue onClick={() => setIsOpen(true)} /></a>
                    <Modal open={isOpen} onClose={() => setIsOpen(false)} />
                </div>
            </div>
            <div className="rating"><AiOutlineStar />{vote_average}</div>
            <div className="vote-count">Vote Count: {vote_count}</div>
            <div className="genre">{genre_ids}</div>

            <div className="poster">
            <img src={IMG_API+poster_path} alt={title} className="poster-path" />
            </div>
            
            <div className="overview">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero atque ipsum alias odio, sed aspernatur nulla ullam provident, laudantium quos mollitia, consectetur impedit illum dolores cupiditate in esse nisi voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas nemo minima, nostrum numquam excepturi? Iste veniam, delectus vitae quasi quae officia sequi perspiciatis esse! Blanditiis voluptatum delectus velit harum.</div>
        </div>
    );
}
 
export default Movie;