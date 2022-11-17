import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructorsComponent } from './constructors/constructors.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesComponent } from './races/races.component';
import { SignupComponent } from './signup/signup.component';
import { StandingComponent } from './standing/standing.component';

const routes: Routes = [
  {path:'', component : LoginComponent},
  {path:'home', component : HomeComponent},
  {path:'home/races', component : RacesComponent},
  {path:'home/races/races/:round/details', component : RaceDetailsComponent},
  {path:'home/standing', component : StandingComponent},
  {path:'home/standing/driver/:position/details', component : DriverDetailsComponent},
  {path:'home/constructors', component : ConstructorsComponent},
  {path:'home/news', component : NewsComponent},
  {path:'signup', component : SignupComponent},
  {path:'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
