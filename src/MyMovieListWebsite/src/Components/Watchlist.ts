import { WatchListDto } from 'Models/WatchlistDto.js'; 
import { MovieDto } from 'Models/MovieDto.js';

class WatchList {
    private movies: Array<MovieDto>;
    private watchListView: HTMLDivElement;

    constructor() {
        this.movies = [];
        this.watchListView = document.createElement("div");
        this.watchListView.classList.add("watchlist");
        this.createView();
    }

    addMovie(movie: MovieDto) {
        if (this.movies.find(movie.title)) {
            throw new Error("Movie already exists in watchlist");
        }
        this.movies.push(movie);
        this.populateView();
    }

    createView() {
        const watchListHeader = document.createElement("h2");
        watchListHeader.textContent = "Jonty's Movie List";
        this.watchListView.appendChild(watchListHeader);
        // Assuming you want to create a list of movies
        const watchListContent = document.createElement("ul");
        this.watchListView.appendChild(watchListContent);
    }

    populateView() {
        const watchListContent = this.watchListView.querySelector("ul");
        if (watchListContent === null) {
            throw new Error("watchListContent is null. use WatchList.createView first.")
        }

        watchListContent.innerHTML = "";

        this.movies.forEach(movie => {
            const movieItem = document.createElement("li");
            movieItem.textContent = movie.title;
            watchListContent.appendChild(movieItem);
        });
    }

    render(targetElement: HTMLElement) {
        targetElement.appendChild(this.watchListView);
    }
}
