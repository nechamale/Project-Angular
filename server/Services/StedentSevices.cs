using my_server.Model;

namespace my_server.Services
{
    public class StudentService
    {
        static List<Student> StudentList { get; set; }
        static StudentService()
        {
            StudentList = new List<Student>(){
            new Student(){ id = 1, first_name = "sara", last_name= "levi", addres = "rashbi 19", avg = 80, active = false, level = Level.A, courseId =  2, mail = "saraMail@a.com"},
            new Student(){ id = 2, first_name = "rachel", last_name= "glik", addres="hritba 25", avg = 95, active = true, level =  Level.B, courseId = 3, mail= "rachelMail@a.com" },
            new Student(){ id = 3, first_name = "rivka", last_name="zer", addres = "jafo 2", avg = 70, active = true, level = Level.A, courseId = 2, mail = "rivkaMail@a.com"},
            new Student(){ id = 4, first_name = "lea", last_name = "narod", addres = "najara 10", avg = 92, active = false, level= Level.C, courseId = 1, mail =  "leaMail@a.com" }
            };
        }

        public static List<Student> Get()
        {
            return StudentList;
        }
        public static Student? GetById(int id)
        {
            if (StudentList==null)
                return null;
            Student? student = StudentList.FirstOrDefault(s=> s.id ==id);
            if (student == null)
                return null;
            return student;
        }
        public static List<Student> Post(Student student)
        {
            if(student == null)
                return StudentList;
            student.id = StudentList.Last().id+1;
            StudentList.Add(student);
            return StudentList;
        }
        public static List<Student> Put(Student student)
        {
            if (student == null)
                return StudentList;
            var student1 = StudentList.FirstOrDefault(s => student.id ==s.id);
            student1.mail = student.mail;
            student1.courseId = student.courseId;
            student1.addres = student.addres;
            student1.avg = student.avg;
            student1.first_name = student.first_name;
            student1.last_name = student.last_name;
            student1.active = student.active;
            student1.level = student.level;
            return StudentList;
        }
        public static List<Student> Delete(int id)
        {
            var student = StudentList.FirstOrDefault(s => s.id == id);
            StudentList.Remove(student);
            return StudentList;
        }
    }
}