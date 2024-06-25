using System;
using System.Collections.Generic;

namespace my_server.Model;
public class Student
{
    public int id { get; set; }
    public string? first_name { get; set; }
    public string? last_name { get; set; }
    public string? addres { get; set; }
    public double avg { get; set; }
    public bool active { get; set; }
    public Level? level { get; set; }
    public int courseId { get; set; }
    public string? mail { get; set; }

}
public enum Level
{
    A = 1,
    B,
    C
}
