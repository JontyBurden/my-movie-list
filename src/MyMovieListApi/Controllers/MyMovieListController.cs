using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyMovieListApi.Context;
using MyMovieListApi.Models;
using MyMovieListApi.Services.Interfaces;

namespace MyMovieListApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyMovieListController : ControllerBase
    {
        private readonly IMovieListService _movieListService;

        public MyMovieListController(MyMovieListDbContext context , IMovieListService movieListService)
        {
            _movieListService = movieListService;
        }

        [HttpGet("GetMovies")]
        public async Task<ActionResult<IEnumerable<Movie>>> GetMovies()
        {
            return await _movieListService.SelectMoviesAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> GetMovie(int id)
        {
            var movie = await _movieListService.SelectMovieAsync(id);

            if (movie == null)
            {
                return NotFound();
            }

            return movie;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie(int id, Movie movie)
        {
            if (id != movie.Id)
            {
                return BadRequest();
            }

            bool canPutMovie = await _movieListService.UpdateMovieAsync(movie);
            if (!canPutMovie)
            {
                return Conflict("Conflict occured while updating movie.");
            }
            return NoContent();
        }

        [HttpPost("PostMovie")]
        public async Task<ActionResult<Movie>> PostMovie(Movie movie)
        {

            if (MovieExists(movie.Id))
            {
                return Conflict(new { Message = $"Duplicate entry. A movie already exists under Id: {movie.Id}."});
            }
            await _movieListService.InsertMovieAsync(movie);
            return CreatedAtAction(nameof(PostMovie), new { id = movie.Id }, movie);
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> DeleteMovie(int movieId)
        {
            if (!MovieExists(movieId))
            {
                return NotFound();
            }
            await _movieListService.DeleteMovieAsync(movieId);
            return NoContent();
        }

        private bool MovieExists(int id)
        {
            return _movieListService.MovieExists(id);
        }
    }
}
