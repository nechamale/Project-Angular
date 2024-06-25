import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VolunteerService } from '../volunteer/volunteer.service';
import { Observable } from 'rxjs';
import { Volunteer } from '../volunteer/Volunteer.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {
  constructor(private _http: HttpClient, private _srviceVolunteer: VolunteerService) { }
  t:Date = new Date();

  get=():Observable<Volunteer[]> => {
    console.log("[", this.t.getHours(), ":", this.t.getMinutes(), "] 'get' Schedule from API");
    return this._http.get<Volunteer[]>("/api/Scheduling");
  }

  getListVolunteer = () => {
    console.log("[", this.t.getHours(),":",this.t.getMinutes(), "] get Volunteer in SCHEDULING");
    return this._http.get<Volunteer[]>("/api/volunteer");
  }

  update = (schedule:Volunteer[]):Observable<number[]> => {
    console.log("[", this.t.getHours(), ":", this.t.getMinutes(), "] 'PUT' Schedule in SCHEDULING");
    return this._http.put<number[]>("/api/Scheduling/Put", schedule);
  }

}
