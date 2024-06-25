import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: "", component:VolunteerListComponent, pathMatch: "full"},
  { path: "List", component:VolunteerListComponent},
  { path: "VolunteerDetails", component: VolunteerDetailsComponent },
  { path: "VolunteerDetails/:id", component: VolunteerDetailsComponent }
];


@NgModule({
  declarations: [VolunteerListComponent,VolunteerDetailsComponent],
  imports: [ReactiveFormsModule,CommonModule, FormsModule, RouterModule.forChild(ROUTES)],
  // providers: [VolunteerService],
  exports:[VolunteerListComponent],
})
export class VolunteerModuleModule { }
