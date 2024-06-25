import { Component } from '@angular/core';
import { SchedulingService } from '../scheduling.service';
import { Volunteer } from 'src/app/volunteer/Volunteer.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduling-comp',
  templateUrl: './scheduling-comp.component.html',
  styleUrls: ['./scheduling-comp.component.scss']
})
export class SchedulingCompComponent {
  constructor(private _scheduleService: SchedulingService, private router: Router) {
    _scheduleService.getListVolunteer().subscribe(data => {
      this.volunteers = data;
    })
    this._scheduleService.get().subscribe(data => {
      this.scheduling = data;
      console.log("list of embedded", data);
      this.scheduleForm = new FormGroup({
        days: new FormArray([
          new FormControl(this.scheduling[0]),
          new FormControl(this.scheduling[1]),
          new FormControl(this.scheduling[2]),
          new FormControl(this.scheduling[3]),
          new FormControl(this.scheduling[4]),
          new FormControl(this.scheduling[5]),
          new FormControl(this.scheduling[6]),
        ]),
      })
      this.flagScheduling = true;
    });
  }

  scheduleForm: FormGroup = new FormGroup({});
  flagScheduling: boolean = false;
  flagWeek: boolean = false;
  volunteers: Volunteer[] = [];
  scheduling: Volunteer[] = [];

  byDay = (day: number) => {
    return this.volunteers.filter(vol => vol.days[day]);
  }

  get days(): FormArray {
    return this.scheduleForm.get('days') as FormArray;
  }

  onSubmit = () => {
    console.log(this.days.value);
    console.log("scheduleFormאיך הוא מציג את ה", this.days.value, this.volunteers);
    this._scheduleService.update(this.days.value).subscribe(data => {
      console.log("the put pass in sucssed ", data);
      window.location.reload();
    });

  }
}
