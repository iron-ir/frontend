import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from './shared/user.service';

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot ) : Observable<boolean> | Promise<boolean> | boolean {
    let isLogin = this.userService.checkLogin();
    if(isLogin) {
      return true;
    } else {
      console.log('navigator');
      this.router.navigate(['/auth'], {fragment: 'login'});
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, router: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    let isLogin = this.userService.checkLogin();
    if(isLogin) {
      return true;
    } else {
      console.log('navigator');

      this.router.navigate(['/auth'], {fragment: 'login'});
    }
    // this.userService.checkLogin();
    // return this.userService.isLogin;
  }
}
