import {Component} from '@angular/core';
// @ts-ignore
import * as data from '../mock-data.json';

@Component({
  selector: 'app-candidate',
  templateUrl: 'president-candidates.component.html',
  styleUrls: ['president-candidates.component.scss']
})
export class PresidentCandidatesComponent {
  presidents: any[] = data.presidents;

}
