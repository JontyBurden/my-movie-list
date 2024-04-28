namespace MyMovieListApi.Models
{
    public class Movie
    {
        public int Id { get; set;}
        public string Title { get; set;}

        public Status Status { get; set;}

        public enum Status {
            PlanToWatch,
            Watching,
            Wachted,
            Dropped
        }
    }
}