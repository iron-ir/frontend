import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passwordForm : FormGroup;
  passwordErr: string = null;
  message: string = null;
  newPass: string = null;

  constructor(private acRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.passwordForm = new FormGroup({
      'oldPassword': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'repeatPassword': new FormControl(null, [Validators.required, this.passValidator.bind(this)]),
    })

    console.log(this.userService.userData);
  }

  onSubmitPasswordForm() {
    let res = this.userService.checkPassword(this.userService.userData.id, this.passwordForm.value.oldPassword);
    // if( res.status === 200 ){
    //   this.message = res.message;
    // } else {
    //   this.message = null;
    //   this.passwordErr = res.message;
    // }
  }

  passValidator(control: FormControl) : {[s: string]: boolean} {
    if(this.newPass !== control.value) {
      return {'passNotMatch': true};
    } else {
      return null;
    }
  }

}
