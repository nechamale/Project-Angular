import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SchedulingCompComponent } from './scheduling/scheduling-comp/scheduling-comp.component';
import { SchedulingModuleModule } from './scheduling/scheduling-module.module';

const ROUTES: Routes = [
  { path: "volunteer", loadChildren: () => import("./volunteer/volunteer.module").then(m => m.VolunteerModuleModule)},
  { path: "scheduling", component: SchedulingCompComponent }
];

@NgModule({
  imports: [BrowserModule ,SchedulingModuleModule, CommonModule, AppRoutingModule, RouterModule.forRoot(ROUTES), HttpClientModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
