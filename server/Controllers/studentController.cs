using Microsoft.AspNetCore.Mvc;
using my_server.Model;
using my_server.Services;


namespace my_server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StudentController : ControllerBase
{
    [HttpGet]
    public ActionResult Get()
    {
        var StudentList = StudentService.Get();
        if (StudentList == null){
            return NotFound();
        }
        return Ok(StudentList);
    }
    [HttpGet("id")]
    public ActionResult GetId(int id)
    {
        var student = StudentService.GetById(id);
        if (student == null)
            return NotFound();
        return Ok(student);
    }
    [HttpPost("Post")]
    public ActionResult Post(Student student)
    {
        var StudentList = StudentService.Post(student);
        if (StudentList == null)
            return NotFound();
        return Ok(StudentList);
    }
    [HttpPut("Put")]
    public ActionResult Put(Student student){
        var StudentList = StudentService.Put(student);
        if (StudentList == null)
            return NotFound();
        return Ok(StudentList);
    }
    [HttpDelete("Delete")]
    public ActionResult Delete(int id){
        var StudentList = StudentService.Delete(id);
        if (StudentList == null)
            return NotFound();
        return Ok(StudentList);
    }

}