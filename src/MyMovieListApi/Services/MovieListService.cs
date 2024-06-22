using MyMovieListApi.Services.Interfaces;
using MyMovieListApi.Models;
using Microsoft.Extensions.Logging;
using MyMovieListApi.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Data.Common;

namespace MyMovieListApi.Services;

public class MovieListService : IMovieListService
{
    private readonly ILogger _logger;
    private readonly MyMovieListDbContext _myMovieListDbContext;
    public MovieListService(
        ILogger<MovieListService> logger,
        MyMovieListDbContext myMovieListDbContext
        )
    {
        _logger = logger;
        _myMovieListDbContext = myMovieListDbContext;
    }

    public async Task<bool> UpdateMovieAsync(Movie movie)
    {
        bool result = false;
        _myMovieListDbContext.Entry(movie).State = EntityState.Modified;

        try
        {
            await _myMovieListDbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            throw;
        }

        return result;
    }

    public async Task<bool> InsertMovieAsync(Movie movie)
    {
        bool result = false;
        try
        {
            _myMovieListDbContext.Movies.Add(movie);
            await _myMovieListDbContext.SaveChangesAsync();
        }
        catch (DbUpdateException ex)
        {
            _logger.LogError($"Failed to InsertMovieAsync: {ex}");
            return result;
        }
        catch(Exception ex)
        {
            _logger.LogError($"Exception caught during InsertMovieAsync: {ex}");
            return result;
        }

        return true;
    }

    public bool MovieExists(int movieId)
    {
        return _myMovieListDbContext.Movies.Any(e => e.Id == movieId);
    }

    public async Task<bool> DeleteMovieAsync(int movieId)
    {
        try
        {
            _myMovieListDbContext.Remove(movieId);
            await _myMovieListDbContext.SaveChangesAsync();
        }
        catch (DbException)
        {
            throw;
        }

        return true;
    }

    public async Task<List<Movie>> SelectMoviesAsync()
    {
        return await _myMovieListDbContext.Movies.ToListAsync();
    }

    public async Task<Movie> SelectMovieAsync(int movieId)
    {
        return await _myMovieListDbContext.Movies.FindAsync(movieId);

    }
}