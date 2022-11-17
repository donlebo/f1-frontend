import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}

export interface Driver {
  id: number;
  driverName: string;
  driverSurname: string;
  raceCode: number;
}

export interface DriverDetails {
  driverName: string;
  name: string;
  surname: string;
  nationality: string;
  raceCode: string;
  finalPosition: number;
  wins: number;
  points: number;
  constructor: string;
  constructorNationality: string;
  learnMoreOnDriver: string;
  id: number;
  birthday: string;
  learnMoreOnConstructor: string;
}

export interface Constructor {
  constructor: string;
  constructorNationality: string;
}

export interface Race {
  raceName: string;
  round: number;
}

export interface RaceDetails {
  raceName: string;
  raceDate: string;
  raceCircuit: string;
  circuitCountry: string;
  raceLaps: number;
  fastestLaps: number;
  fastestLapsSpeed: number;
  averageLapsTime: number;
  round: number;
  season: number;
  status: string;
  learnMoreOnGranPrix?: any;
  learnMoreOnCircuit?: any;
}


@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }

  getDriver() {
    return this.http.get<Driver>('http://localhost:8080/drivers')
      .toPromise();
  }

  getDriverDetails(id: number) {
    return this.http.get<DriverDetails >(`http://localhost:8080/drivers/${id}`, {}).toPromise();
  }

  getDriverImge(id: number) {
    return (`http://localhost:8080/drivers/${id}/img`);
  }

  getCircuitImge(round: number) {
    return (`http://localhost:8080/race/${round}/img`);
  }

  getConstructor() {
    return this.http.get<Constructor>('http://localhost:8080/constructor')
      .toPromise();
  }

  getRaces() {
    return this.http.get<Race>('http://localhost:8080/race')
      .toPromise();
  }

  getRacesDetails(round: number) {
    return this.http.get<RaceDetails>(`http://localhost:8080/race/${round}`)
      .toPromise();
  }

  signUp(user: User) {
    return this.http.post('http://localhost:8080/signup', user, { headers: new HttpHeaders }).toPromise();
  }

  login(user: User) {
    return this.http.post('http://localhost:8080/login', user, {headers: new HttpHeaders}).toPromise();
  }
}
