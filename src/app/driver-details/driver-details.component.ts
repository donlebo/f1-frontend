import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverDetails, ResultsService } from "src/app/providers/results.service";

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})

export class DriverDetailsComponent implements OnInit {
  currentId: number | any;
  results!: DriverDetails | any;
  results1: any;

  constructor(private resultService: ResultsService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const position = this.route.snapshot.params['position'];
    this.currentId = (await this.resultService.getDriverDetails(position));
    this.results = this.currentId;
    console.log(this.results);

    this.results1 = ( this.resultService.getDriverImge(this.results?.id));
    console.log(this.results1);
  }
}
