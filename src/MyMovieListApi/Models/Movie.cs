namespace MyMovieListApi.Models
{
    public class Movie
    {
        public int Id { get; set;}
        public string? Title { get; set;}
        public WatchStatus Status { get; set;}
        public enum WatchStatus {
            Unknown,
            PlanToWatch,
            Watching,
            Finished,
            Dropped
        };
    }
}