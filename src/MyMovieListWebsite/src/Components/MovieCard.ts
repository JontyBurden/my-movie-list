import { MovieDto } from "Models/MovieDto";

export class MovieCard {
    movie: MovieDto;

    constructor(movie: MovieDto) {
        this.movie = movie;
    }

    createMovieCard(): HTMLDivElement {
    // Create elements
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const director = document.createElement('p');
    const genre = document.createElement('p');
    const releaseYear = document.createElement('p');
    const poster = document.createElement('img');

    // Set content and attributes
    card.classList.add('movie-card');
    title.textContent = this.movie.title;
    director.textContent = `Director: ${this.movie.title}`;
    genre.textContent = `Genre: ${this.movie.title}`;
    releaseYear.textContent = `Release Year: ${this.movie.releaseDate}`;
    poster.src = this.movie.title;
    poster.alt = `${this.movie.title} poster`;

    // Append elements
    card.appendChild(title);
    card.appendChild(director);
    card.appendChild(genre);
    card.appendChild(releaseYear);
    card.appendChild(poster);

    return card;
    }
}

// document.body.appendChild(movieCard); // Append the generated card to the document body
