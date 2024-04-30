using Microsoft.EntityFrameworkCore;
using MyMovieListApi.Context;
using MyMovieListApi.Services;
using MyMovieListApi.Services.Interfaces;
using System.IO;
using Microsoft.Extensions.FileProviders;

namespace MyMovieListApi;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddDbContext<MyMovieListDbContext>(options =>
        {
            options.UseInMemoryDatabase("MyMovieList");
        });
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddScoped<IMovieListService, MovieListService>();
        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        string wwwrootPath = Path.Combine(Directory.GetCurrentDirectory(), "../MyMovieListWebsite/wwwroot");
        var fileProvider = new PhysicalFileProvider(wwwrootPath);

        app.UseDefaultFiles(new DefaultFilesOptions()
        {
            FileProvider = fileProvider
        });

        app.UseStaticFiles(new StaticFileOptions()
        {
            FileProvider = fileProvider
        });

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}
