import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-exp-dialog',
  templateUrl: './exp-dialog.component.html',
  styleUrls: ['./exp-dialog.component.css']
})
export class ExpDialogComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router, private cookie:CookieService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.cookie.deleteAll();
    this.router.navigate(['/login']);
  }

}
