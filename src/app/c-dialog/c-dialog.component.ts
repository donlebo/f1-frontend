import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-c-dialog',
  templateUrl: './c-dialog.component.html',
  styleUrls: ['./c-dialog.component.css']
})
export class CDialogComponent implements OnInit {

  constructor(private cookie:CookieService) { }

  refuses(){
    this.cookie.deleteAll();
  }

  ngOnInit(): void {
  }

}
