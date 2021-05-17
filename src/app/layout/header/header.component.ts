import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  userData: User;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    if(this.userService.checkLogin()){
      this.userService.userDataObservable.subscribe(user => {
        console.log(user);
        this.userData = user;
        this.isLogin = true;
      })
    }
  }

}
