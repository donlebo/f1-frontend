import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username : string | undefined;
  message : string | undefined;
  date = new Date();
  now = this.date.getHours();

  constructor(private cookie:CookieService) { }


  ngOnInit() {
    this.username = this.cookie.get("username");

    if (this.now < 12) {
      this.message = "Good morning " + this.username
    } else if ((this.now == 12) || ((this.now > 12) && (this.now < 18))) {
      this.message = "Good afternoon " + this.username
    } else if ((this.now == 18) || (this.now > 18)){
      this.message = "Good night " + this.username
    }

  }


  clearSession(){
    localStorage.clear();
    this.cookie.deleteAll();
  }
}
