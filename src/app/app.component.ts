import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { ExpDialogComponent } from './exp-dialog/exp-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'f1';

  constructor(private bnIdle: BnNgIdleService, private router: Router, private dialog: MatDialog){}

  ngOnInit(): void {
    //60 = 1 minuto
    this.bnIdle.startWatching(300).subscribe((res) => {
      if (res) {
        this.expiredDialog();
      }
    });
  }

  expiredDialog(){
    this.dialog.open(ExpDialogComponent);
    this.router.navigate(['/login']);
  }
}
