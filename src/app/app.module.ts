import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RacesComponent } from './races/races.component';
import { StandingComponent } from './standing/standing.component';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { ConstructorsComponent } from './constructors/constructors.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {CookieService} from 'ngx-cookie-service';
import {MatDialogModule} from '@angular/material/dialog';
import { CDialogComponent } from './c-dialog/c-dialog.component';
import { EDialogComponent } from './e-dialog/e-dialog.component';
import { FDialogComponent } from './f-dialog/f-dialog.component';
import { NewsComponent } from './news/news.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { ExpDialogComponent } from './exp-dialog/exp-dialog.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RacesComponent,
    StandingComponent,
    HomeComponent,
    DriverDetailsComponent,
    RaceDetailsComponent,
    ConstructorsComponent,
    SignupComponent,
    LoginComponent,
    CDialogComponent,
    EDialogComponent,
    FDialogComponent,
    NewsComponent,
    ExpDialogComponent
  ],
  entryComponents:[CDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatBadgeModule,
    MatTooltipModule,

  ],
  providers: [CookieService, BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
