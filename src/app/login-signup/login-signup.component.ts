import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

import {UserService} from '../shared/user.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent implements OnInit {
  // @ViewChild('fs') signupForm : NgForm;
  @ViewChild('fl') loginForm: NgForm;

  signupForm: FormGroup = new FormGroup({});


  login: boolean = true;
  message: string = undefined;
  success: boolean;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.login = fragment === 'login';
      this.message = null;
    });
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      phone: new FormControl(),
      passGroup: new FormGroup({
        password: new FormControl(null, Validators.required),
        passwordRepeat: new FormControl(null, Validators.required),
      }, this.passValidator)
    });
    // if(this.userService.checkLogin()){
    //   this.router.navigate(['/dashboard'])
    // }
    this.userService.checkLogin();
    this.userService.isLogin.subscribe( isLogin => {
      this.router.navigate(['/dashboard'])
    });
  }

  passValidator = (group: FormGroup): { [s: string]: string } | null => {
    if (group.get('passwordRepeat').value != group.get('password').value) {
      return {'password': 'پسورد و تکرار آن باید یکسان باشند'};
    } else {
      return null;
    }
  };

  submitLogin() {
    this.userService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((res) => {
      this.message = res.message;
      this.success = res.success;
      console.log(res.success);
      this.userService.checkLogin()
    }, error => {
      this.message = error.message;
      this.success = false;
    });
  }

  logger(entity: any) {
    console.log(entity);
  }

  submitSignup() {
    this.userService.signup(this.signupForm.get('username').value,
                            this.signupForm.get('passGroup.password').value,
                            this.signupForm.get('email').value,
                            this.signupForm.get('phone').value).subscribe(res => {
      this.message = res.message;
      this.success = res.success;
    });
  }
}
