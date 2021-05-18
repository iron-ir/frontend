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
    this.userService.checkLogin();
    this.userService.isLogin.subscribe(islogin => {
      if(islogin){
          this.userData = this.userService.userData;
          this.isLogin = true;
      }
    })

  }

}
