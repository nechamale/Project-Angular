import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Volunteer } from '../Volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, scheduled } from 'rxjs';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.scss']
})

export class VolunteerDetailsComponent {

  constructor(private _volunteerService: VolunteerService, private _acr: ActivatedRoute, private router: Router) {
    this.idSearch = +(this._acr.snapshot.paramMap.get('id') ?? '');
    this.getById(this.idSearch).subscribe(vol => {

      this.volunteer = vol;
      this.oldDay = vol.days;
      console.log("into initialization FormGroup", this.volunteer.first_name);
      this.volunteerForm = new FormGroup({
        id: new FormControl(this.volunteer?.id),
        first_name: new FormControl(this.volunteer?.first_name),
        last_name: new FormControl(this.volunteer?.last_name),
        addres: new FormControl(this.volunteer?.addres),
        phon: new FormControl(this.volunteer?.phon),
        days: new FormArray([new FormControl(this.volunteer?.days[0]),
        new FormControl(this.volunteer?.days[1]),
        new FormControl(this.volunteer?.days[2]),
        new FormControl(this.volunteer?.days[3]),
        new FormControl(this.volunteer?.days[4]),
        new FormControl(this.volunteer?.days[5]),
        new FormControl(this.volunteer?.days[6]),
        ]),
      });
      this.flag = true;
    });

  }
  weekDays: String[] = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sha"]
  oldDay: boolean[] = [];
  flag1: boolean = false;
  volunteerForm: FormGroup = new FormGroup({});
  private _volunteer?: Volunteer;
  idSearch: number;
  flag: boolean = false;

  public get volunteer(): Volunteer | undefined {
    return this._volunteer;
  }

  public set volunteer(value: Volunteer) {
    this._volunteer = value;
  }

  get days(): FormArray {
    return this.volunteerForm.get('days') as FormArray;
  }

  getById = (id: number): Observable<Volunteer> => {
    return this._volunteerService.getbyid(id);
  }

  onSubmit() {
    console.log(this.days.value[0]);
    this._volunteerService.getSchdelule().subscribe(schedule => {
      for (let i = 0; i < 7 && !this.flag1; i++) {
        if (schedule[i]!=null && schedule[i].id == this.volunteer?.id && !this.days.value[i]) {
          alert("It is necessary to first remove the placement and only then change the marked days");
          this.flag1 = true;
        }
      }
      if (!this.flag1) {
        this.volunteer = this.volunteerForm.value;
        this._volunteerService.put(this.volunteerForm.value).subscribe(data => console.log("the put pass in sucssed ", data));
        this.router.navigate(['/volunteer/List']);
      }
      else
        this.flag1 = false;
    }
    )
  }
}