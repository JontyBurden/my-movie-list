using MyMovieListApi.Models;

namespace MyMovieListApi.Services.Interfaces
{
    public interface IMovieListService
    {
        void Add(Movie movie);
        void Update(Movie movie);
    }
}