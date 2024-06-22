import { MovieDto } from './Models/MovieDto.js';

async function FetchTest(title: string) {
    try {
        let response: Response = await fetch("http://localhost:5229/api/test", {method: "GET"});
        if (!response.ok) {
            throw new Error("response not ok");
        }
        let responseData: string = await response.text();
        console.log(responseData);
    } catch (error) {
        console.log(error);
    };
}

FetchTest("hello");

async function PostMovie(movie: MovieDto) {
    const POST_MOVIE: string = '[PostMovie]'
    try {
        let response: Response = await fetch("http://localhost:5229/api/MyMovieList/PostMovie" , {
            method: "POST",
            headers: {
                "Context-Type": "application/json"
            },
            body: JSON.stringify(movie)
        });

        if (!response.ok) {
            throw new Error("PostMovie response was not ok");
        }
            
    }
    catch (error) {
        console.log(POST_MOVIE, error);
    }
}

let movie: MovieDto = new MovieDto("gladiator", 1999);
PostMovie(movie);