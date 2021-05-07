import {Component, OnInit} from '@angular/core';
// @ts-ignore
import * as data from '../mock-data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newses:  any[] = data.newses;
  presidents: any[] = data.presidents;
  states: any[] = data.states;
  allCities: any[] = data.allCities;

  selectedState: number;
  cities = [];

  setStateAndCities(event: Event) {
    this.selectedState = +(event.target as HTMLInputElement).value;
    console.log(this.selectedState);
    if (this.selectedState != null) {
      this.cities = this.allCities.filter(city => city.stateId == this.selectedState);
    } else {
      this.cities = [];
    }
  }

  ngOnInit(): void {
  }

}
