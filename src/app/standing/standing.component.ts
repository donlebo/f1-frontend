import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultsService } from "../providers/results.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})


export class StandingComponent implements OnInit {

  drivers: any;
  columnsToDisplay = ['Position', 'DriverName', 'LearnMore']

  constructor(private resultService: ResultsService, private _location: Location) {}

  async ngOnInit() {
    this.drivers = (await this.resultService.getDriver());
    console.log(this.drivers);
  }
}
