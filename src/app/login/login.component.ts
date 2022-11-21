import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ResultsService, User } from '../providers/results.service';
import { MatDialog } from '@angular/material/dialog';
import { CDialogComponent } from '../c-dialog/c-dialog.component';
import { EDialogComponent } from '../e-dialog/e-dialog.component';
import { FDialogComponent } from '../f-dialog/f-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  show : boolean = false;

  constructor(private dialog: MatDialog, public fb: FormBuilder, private router: Router, private resultsService: ResultsService, private cookie:CookieService) {

    this.form = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  cookyesDialog(){
    this.dialog.open(CDialogComponent);
  }

  errorDialog(){
    this.dialog.open(EDialogComponent);
  }

  formDialog(){
    this.dialog.open(FDialogComponent);
  }

  users : User | any;

  ngOnInit() {};

  async send(){
    this.show=true
    if(!this.form.valid){
      setTimeout(()=>{
        this.show=false
        this.formDialog();
      },2000);
      return;
    }

    await this.resultsService.login(this.form.value).then(
      async res => {
        setTimeout(async ()=>{
          this.show=false
          this.setStorage(res);
          this.cookyesDialog();
          this.setCookie(res);
          await this.router.navigate(['/home']);
          console.log(res);
        },2000)
      }
    ).catch(e => {
      setTimeout(()=>{
        this.show=false
        this.errorDialog();
        console.log(e);
      },2000);
      }
    );
  }

  hide : boolean = true;

myFunction() {
  this.hide = !this.hide;
}

  setStorage(res : any){
    localStorage.setItem("token", res.token);
  }

  setCookie(res : any){
    var expire = new Date();
    var time = Date.now() + ((3600 * 1000) * 26); // *26 = + 24 hours  ///
    expire.setTime(time);
    this.cookie.set("userToken", JSON.stringify(res), expire);
    this.cookie.set("username", this.form.value['username'], expire);
  }
}
