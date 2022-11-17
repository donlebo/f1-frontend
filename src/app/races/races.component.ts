import { Component, OnInit } from '@angular/core';
import { Race, ResultsService } from '../providers/results.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})

export class RacesComponent implements OnInit {

  races: Race | any;
  columnsToDisplay = ['RaceName', 'Round', 'LearnMore']

  constructor(private resultService: ResultsService) { }

  selected: Date | null | undefined;

  async ngOnInit() {
    this.races = (await this.resultService.getRaces());
    console.log(this.races);
  }


}
