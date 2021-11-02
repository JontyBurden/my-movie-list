import {AiOutlineStar} from 'react-icons/ai'
import {BiAddToQueue} from 'react-icons/bi'
import {TiUserAddOutline} from 'react-icons/ti'
import { useState } from 'react'
import Modal from './Modal';
import { Link } from 'react-router-dom';


const IMG_API = 'https://image.tmdb.org/t/p/w300';

const Movie = ({ title, poster_path, backdrop_path, overview, vote_average, genre_ids, id , vote_count, release_date }) => {

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
            <div className="genre">{genre_ids}</div>

            <div className="art">
                <img src={IMG_API+poster_path} alt={title} className="art" />
            </div>
            
            <div className="description">{overview}</div>

            <div className="stats">
                <div className="release-date">{release_date}</div>
                <div className="rating"><AiOutlineStar />{vote_average}</div>
                <div className="votes-count"><TiUserAddOutline />{vote_count}</div>
            </div>
        </div>
    );
}
 
export default Movie;