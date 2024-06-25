using my_server.Model;

namespace my_server.Services
{
    public class SchedulingService
    {
        static int[] ScheduleArray { get; set; }
        static SchedulingService()
        {
            ScheduleArray = new int[] { 1, -1, 3, -1, -1, 4, -1 };
        }
        public static Volunteer[] Get()
        {
            Volunteer[] volArray = new Volunteer[ScheduleArray.Length];
            for (int i = 0; i < ScheduleArray.Length; i++)
            {
                volArray[i] = volunteerService.GetById(ScheduleArray[i]);
            }
            return volArray;
        }
        public static List<int> GetByDay(int day)
        {
            List<int> dayArr = new List<int>();
            volunteerService.Get().ForEach(vol =>
            {
                if (vol != null && day < 7 && vol.Days[day])
                {
                    dayArr.Add(vol.Id);
                }
            });
            return dayArr;
        }
        public static int[] Put(Volunteer[] listvol)
        {
             for (int i = 0; i < listvol.Length; i++)
            {
                if (listvol[i] == null)
                    ScheduleArray[i] = -1;
                else
                if( listvol[i]!=null)
                    ScheduleArray[i] = listvol[i].Id;
            }
            return ScheduleArray;
        }
        public static int[] Delete(int day)
        {
            ScheduleArray[day] = -1;
            return ScheduleArray;
        }
    }
}