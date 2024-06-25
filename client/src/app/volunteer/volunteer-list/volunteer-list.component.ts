import { Component } from '@angular/core';
import { Volunteer } from '../Volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.scss']
})
export class VolunteerListComponent {
  constructor(private _VolunteerService: VolunteerService, private router:Router) {
    this.ngOnInit();
  }
  listVolunteer: Volunteer[] = [];
  weekDays:string[]=["Sunday","Monday","Tuesday","Wensday","Thursday","Friday","Shabbos"]
  put = (vol: Volunteer) => {
    this._VolunteerService.put(vol).subscribe(data => this.listVolunteer = data);
  }
  ngOnInit(): void {
    this._VolunteerService.get().subscribe(data => {
      this.listVolunteer = data;
    } );
  }

  selectVolunteer = (id: number) => {
    this.router.navigate(['/volunteer/VolunteerDetails', id]);
  }
}
