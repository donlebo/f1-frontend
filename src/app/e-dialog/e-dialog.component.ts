import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-dialog',
  templateUrl: './e-dialog.component.html',
  styleUrls: ['./e-dialog.component.css']
})
export class EDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
