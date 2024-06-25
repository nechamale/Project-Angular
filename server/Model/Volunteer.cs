namespace my_server.Model;
public class Volunteer
{
    public int Id { get; set; }
    public string? First_name { get; set; }
    public string? Last_name { get; set; }
    public string? Addres { get; set; }
    public string? Phon { get; set; }
    public bool[]? Days { get; set; }

    // public Volunteer(int id, string first_name, string last_name, string addres, string phon, bool[] days)
    // {
    //     this.Id = id;
    //     this.First_name = first_name;
    //     this.Last_name = last_name;
    //     this.Addres = addres;
    //     this.Phon = phon;
    //     this.Days = new bool[7];
    //     for (int i = 0; i < 7; i++)
    //     {
    //         this.Days[i] = days[i];
    //     }
    // }

    // public Volunteer()
    // {
    // }
}