using Microsoft.EntityFrameworkCore;
using MyMovieListApi.Models;

namespace MyMovieListApi.Context
{
    public class  MyMovieListDbContext : DbContext  
    {
        public MyMovieListDbContext(DbContextOptions options) : base(options)
        {}

        public DbSet<Movie> Movies { get; set; }
    } 
}