using Microsoft.AspNetCore.Mvc;
using MyMovieListApi.Models;

namespace MyMovieListApi.Services.Interfaces
{
    public interface IMovieListService
    {
        Task<bool> InsertMovieAsync(Movie movie);
        Task<bool> UpdateMovieAsync(Movie movie);
        Task<bool> DeleteMovieAsync(int movieId);
        bool MovieExists(int movieId);
        Task<List<Movie>> SelectMoviesAsync();
        Task<Movie> SelectMovieAsync(int movieId);

    }
}