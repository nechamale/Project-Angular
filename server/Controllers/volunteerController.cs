using Microsoft.AspNetCore.Mvc;
using my_server.Model;
using my_server.Services;


namespace my_server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class volunteerController : ControllerBase
{
    [HttpGet]
    public ActionResult Get()
    {
        var VolunteerList = volunteerService.Get();
        if (VolunteerList == null){
            return NotFound();
        }
        return Ok(VolunteerList);
    }
    [HttpGet("id")]
    public ActionResult GetId(int id)
    {
        var volunteer = volunteerService.GetById(id);
        if (volunteer == null)
            return NotFound();
        return Ok(volunteer);
    }
    [HttpPost("Post")]
    public ActionResult Post(Volunteer volunteer)
    {
        var VolunteerList = volunteerService.Post(volunteer);
        if (VolunteerList == null)
            return NotFound();
        return Ok(VolunteerList);
    }
    [HttpPut("Put")]
    public ActionResult Put(Volunteer volunteer){
        var VolunteerList = volunteerService.Put(volunteer);
        if (VolunteerList == null)
            return NotFound();
        return Ok(VolunteerList);
    }
    [HttpDelete("Delete")]
    public ActionResult Delete(int id){
        var VolunteerList = volunteerService.Delete(id);
        if (VolunteerList == null)
            return NotFound();
        return Ok(VolunteerList);
    }

}