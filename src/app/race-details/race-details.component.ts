import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceDetails, ResultsService } from '../providers/results.service';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {

  round : number | any;
  results : RaceDetails | any;
  results1 : any;


  constructor(private resultService: ResultsService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const round = this.route.snapshot.params['round'];
    this.round = (await this.resultService.getRacesDetails(round));
    this.results = this.round;
    console.log(this.results);

    this.results1 = ( this.resultService.getCircuitImge(this.results?.round));
  }

}
