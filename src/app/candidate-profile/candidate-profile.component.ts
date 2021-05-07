import {Component, OnInit} from '@angular/core';
// @ts-ignore
import * as data from '../mock-data.json';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: 'candidate-profile.component.html',
  styleUrls: ['candidate-profile.component.scss']
})
export class CandidateProfileComponent implements OnInit {

  candidate: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot);
    console.log('its: ',this.route.snapshot.url[0].path);
    if(this.route.snapshot.params.id != undefined){
      this.candidate = data.presidents.filter(cand => cand.id == this.route.snapshot.params['id'])[0];
      console.log(this.candidate);
    }
    if(this.route.snapshot.params.id == undefined || this.candidate == undefined) {
      console.log(this.candidate,'navigationg');
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    const element = document.querySelector('#overview');
    if (element) element.scrollIntoView();
  }

  navigateTo(fragment: string) {
    const element = document.querySelector('#' + fragment);
    if (element) element.scrollIntoView();
    // this.router.navigate([], {fragment: fragment, relativeTo: this.route});
  }

}
