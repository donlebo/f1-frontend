import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Constructor, ResultsService } from '../providers/results.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.css']
})

export class ConstructorsComponent implements OnInit {

  constructors: Constructor | any;

  columnsToDisplay = ['Constructor', 'ConstructorNationality']

  constructor(private resultsService: ResultsService, private http: HttpClient) { }

  async ngOnInit() {
    this.constructors = (await (await this.resultsService.getConstructor()));
    console.log(this.constructors);
  }

}
