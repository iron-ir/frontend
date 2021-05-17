import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidebarClosed: boolean = false;
  dashboard: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((data: NavigationEnd) => {
      if(data.url.includes("/dashboard")){
        this.dashboard = true;
      } else {
        this.dashboard = false;
      }
    })
  }

  onToggle() {
    this.sidebarClosed = !this.sidebarClosed;
  }

}
