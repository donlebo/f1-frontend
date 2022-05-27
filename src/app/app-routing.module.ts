import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraComponent } from './extra/extra.component';
import { HomeComponent } from './home/home.component';
import { RacesComponent } from './races/races.component';
import { StandingComponent } from './standing/standing.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'races', component : RacesComponent},
  {path:'standing', component : StandingComponent},
  {path:'extra', component : ExtraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
