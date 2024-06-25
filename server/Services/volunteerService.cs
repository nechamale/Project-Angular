using my_server.Model;

namespace my_server.Services
{
    public class volunteerService
    {
        static List<Volunteer> VolunteerList { get; set; }
        static volunteerService()
        {
            VolunteerList = new List<Volunteer>(){
            new Volunteer(){ Id = 1, First_name = "sara", Last_name= "levi", Addres = "rashbi 19", Phon="0556487965", Days=new bool[7]{true,false,false,true,false,false,false}},
            new Volunteer(){ Id = 2, First_name = "rachel", Last_name= "frid", Addres="hritba 25", Phon="0556498741", Days=new bool[7]{false,false,false,true,false,true,true}},
            new Volunteer(){ Id = 3, First_name = "rivka", Last_name="ber", Addres = "jafo 2",     Phon="0547887965", Days=new bool[7]{true,false,true,false,false,false,true}},
            new Volunteer(){ Id = 4, First_name = "lea", Last_name = "narod", Addres = "najara 10",Phon="0556123659", Days=new bool[7]{true,true,false,false,false,true,false}},
            new Volunteer(){ Id = 5, First_name = "gila", Last_name = "ertz", Addres = "trompeldor 10",Phon="0583697451", Days=new bool[7]{true,true,false,true,false,false,false}}
            };
        }

        public static List<Volunteer> Get()
        {
            return VolunteerList;
        }
        public static Volunteer? GetById(int id)
        {
            if (VolunteerList==null)
                return null;
            Volunteer? volunteer = VolunteerList.FirstOrDefault(v=> v.Id ==id);
            if (volunteer==null)
                return null;
            return volunteer;
        }
        public static List<Volunteer> Post(Volunteer volunteer)
        {
            if(volunteer == null)
                return VolunteerList;
            volunteer.Id = VolunteerList.Last().Id+1;
            VolunteerList.Add(volunteer);
            return VolunteerList;
        }

        public static List<Volunteer> Put(Volunteer volunteer)
        {
            if (volunteer == null)
                return VolunteerList;
            Volunteer? volunteer1 = VolunteerList.FirstOrDefault(v => volunteer.Id == v.Id);
            if (volunteer1 != null)
            {
                volunteer1.Addres = volunteer.Addres;
                volunteer1.First_name = volunteer.First_name;
                volunteer1.Last_name = volunteer.Last_name;
                volunteer1.Phon = volunteer.Phon;
                volunteer1.Days = new bool[7];
                for (int i = 0; i < volunteer.Days.Length; i++)
                {
                    if (volunteer.Days[i] != null)
                        volunteer1.Days[i] = volunteer.Days[i];
                    else
                        volunteer1.Days[i] = false;
                }
            }
            return VolunteerList;
        }
        public static List<Volunteer>? Delete(int id)
        {
            var volunteer = VolunteerList.FirstOrDefault(v => v.Id == id);
            if (volunteer == null)
                return null;
            VolunteerList.Remove(volunteer);
            return VolunteerList;
        }
    }
}