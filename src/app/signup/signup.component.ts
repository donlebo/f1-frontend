import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EDialogComponent } from '../e-dialog/e-dialog.component';
import { FDialogComponent } from '../f-dialog/f-dialog.component';
import { ResultsService, User } from '../providers/results.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private dialog: MatDialog, public fb: FormBuilder, private router: Router, private resultsService: ResultsService, private cookie:CookieService) {

    this.form = fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  errorDialog(){
    this.dialog.open(EDialogComponent);
  }

  formDialog(){
    this.dialog.open(FDialogComponent);
  }

  async send(){
    if(!this.form.valid){
      this.formDialog();
      return;
    }

    await this.resultsService.signUp(this.form.value).catch(e => {
      console.log(e);
    });

    await this.router.navigate(['/login']);
    this.cookie.set("name", this.form.value['name']);
    this.cookie.set("email", this.form.value['email']);
    this.cookie.set("username", this.form.value['username']);
    console.log(this.form.value);
  }
}
