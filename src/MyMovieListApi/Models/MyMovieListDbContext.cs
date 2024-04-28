namespace MyMovieListApi.Models
{
    public class MyMovieListDbContext : DbContext
    {
        public MyMovieListDbContext(DbContextOptions<MyMovieListDbContext> options) : base(options)
        {

        }

        public DbSet<Movie> Movies { get; set; } = null;
    }
}