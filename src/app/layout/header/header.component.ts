import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../shared/user/user.service';
import {User} from '../../shared/user/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLogin: boolean = false;
  userData: User;
  tempSub:Subscription;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.checkLogin();
    this.tempSub = this.userService.userDataObservable.subscribe(user => {
      if(user.username){
          this.userData = user;
          this.isLogin = true;
      }
    })
  }

  ngOnDestroy() {
    this.tempSub.unsubscribe();
  }

}
