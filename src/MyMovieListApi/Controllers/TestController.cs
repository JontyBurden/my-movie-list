using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace MyMovieList.Controllers;

[Route("api/[Controller]")]
public class TestController
{
    [HttpGet]
    public ActionResult<string> Get()
    {
        return "Hello, world!";
    }
}