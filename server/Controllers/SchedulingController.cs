using Microsoft.AspNetCore.Mvc;
using my_server.Model;
using my_server.Services;


namespace my_server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SchedulingController : ControllerBase
{
    [HttpGet]
    public ActionResult Get()
    {
        var ScheduleArray = SchedulingService.Get();
        return Ok(ScheduleArray);
    }
    [HttpGet("day")]
    public ActionResult GetId(int day)
    {
        var dayArr = SchedulingService.GetByDay(day);
        if (dayArr == null)
            return NotFound();
        return Ok(dayArr);
    }
//     [HttpPost("Post")]
//     public ActionResult Post(Student student)
//     {
//         var StudentList = StudentService.Post(student);
//         if (StudentList == null)
//             return NotFound();
//         return Ok(StudentList);
//     }
    [HttpPut("Put")]
    public ActionResult Put(Volunteer[] listvol){
        var volId = SchedulingService.Put(listvol);
        return Ok(volId);
    }

}