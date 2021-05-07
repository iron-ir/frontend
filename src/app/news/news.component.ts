import {Component} from '@angular/core';
// @ts-ignore
import * as data from '../mock-data.json';

@Component({
  selector: 'app-news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.scss']
})
export class NewsComponent {
  newses: any[] = data.newses;

}
