using MyMovieListApi.Services.Interfaces;
using MyMovieListApi.Models;
using Microsoft.Extensions.Logging;

namespace MyMovieListApi.Services
{
    public class MovieListService : IMovieListService
    {
        private readonly ILogger _logger;
        public MovieListService(ILogger<MovieListService> logger)
        {
            _logger = logger;
        }
        public void Add()
        {
            _logger.LogInformation("testing123");
        }
    
        public void Update() 
        {

        }
    }
}