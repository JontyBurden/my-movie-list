import { useState } from 'react'
import Modal from './Modal';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap';

const IMG_API = 'https://image.tmdb.org/t/p/w300';

const Movie = ({ title, poster_path, backdrop_path, overview, vote_average, genre_ids, id , vote_count, release_date }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const movie_id = { id, title, poster_path, vote_average, release_date, overview }
        console.log(movie_id)

        fetch('http://localhost:8000/MyList', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(movie_id)
        }).then(() => {
            console.log("added")
        })
    }
    return (
        <div className="movie-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={IMG_API+poster_path} alt={title} />
                <Card.Body>
                    <Card.Title>
                        <Link to={`movie/${id}`} className="title">{title}</Link>
                    </Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <Button variant="outline-primary" size='sm' onClick={handleSubmit}>
                        Add
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default Movie;
