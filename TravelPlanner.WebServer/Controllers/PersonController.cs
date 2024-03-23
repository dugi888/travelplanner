using Microsoft.AspNetCore.Mvc;
using TravelPlanner.WEB.Models;

namespace TravelPlanner.WEB.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PersonController : ControllerBase
{
    [HttpGet]
    public IActionResult GetName()
    {
        var person = new Person { Id = 1, Name = "Mirko Dugi" };
        return Ok(person);
        
    }
}