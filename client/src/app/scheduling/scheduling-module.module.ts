import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SchedulingCompComponent } from './scheduling-comp/scheduling-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';




@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule,RouterModule],
  declarations: [SchedulingCompComponent],
  exports:[SchedulingCompComponent]
})
export class SchedulingModuleModule { }
