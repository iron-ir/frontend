import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// @ts-ignore
import * as data from '../mock-data.json';

@Component({
  selector: 'app-candidate',
  templateUrl: 'city-council-candidate.component.html',
  styleUrls: ['city-council-candidate.component.scss']
})
export class CityCouncilCandidateComponent implements OnInit {

  stateId: number;
  state: any = {};
  allStates: any[] = data.states;
  cityCouncil: any[] = data.presidents;
  stateCities: any[]= [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.stateId = this.route.snapshot.params.stateId;
    if(this.stateId != undefined) {
      this.state = data.states.find( state => state.id == this.stateId);
      this.stateCities = data.allCities.filter( city => city.parentId == this.stateId);
    }
    console.log(this.stateId, this.state);
  }

  setStateAndCities(event: Event) {
    this.stateId = +(event.target as HTMLInputElement).value;
    this.state = data.states.find( state => state.id == this.stateId);
    console.log(this.state);
    if (this.stateId != null) {
      this.stateCities = data.allCities.filter(city => city.stateId == this.stateId);
    } else {
      this.stateCities = [];
    }
  }

  ngOnInit() {
  }
}
