import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from './Volunteer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private _http: HttpClient) { }
  
  get = (): Observable<Volunteer[]> => {
    let d = new Date();
    console.log("[", d.getHours(),":",d.getMinutes(), "] get Volunteer from API");
    return this._http.get<Volunteer[]>("/api/volunteer");
  }  
  getbyid = (id:number): Observable<Volunteer> => {
    let d = new Date();
    console.log("[", d.getHours(),":",d.getMinutes(), "] getById Volunteer from API");
    return this._http.get<Volunteer>("/api/volunteer/id?id="+ id);
  }
  put = (volanteer: Volunteer | undefined): Observable<Volunteer[]> => {
    let d = new Date();
    console.log("[", d.getHours(),":",d.getMinutes(), "] put Volunteer from API");
    return this._http.put<Volunteer[]>("/api/volunteer/Put", volanteer);
  }

  getSchdelule = (): Observable<Volunteer[]> => {
    let d = new Date();
    console.log("[", d.getHours(), ":", d.getMinutes(), "] 'get' Schedule from VolunteerService");
    return this._http.get<Volunteer[]>("/api/Scheduling");
  }


  vol?: Volunteer;
}
