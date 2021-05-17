import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // profileForm : FormGroup;
  // bodyForm : FormGroup;
  // passwordForm : FormGroup;
  // genders = ['male', 'female'];
  // targets = ['افزایش وزن','تثبیت وزن' , 'کاهش وزن'];
  // jobs = ['کارمند', 'خانه دار', 'ورزشکار', 'ورزشکار حرفه ای'];
  // passwordErr: string = null;
  // message: string = null;
  // newPass: string = null;

  constructor(private acRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    // this.profileForm = new FormGroup({
    //   'email': new FormControl(this.userService.userData.email, [Validators.required, Validators.email]),
    //   'phone': new FormControl(this.userService.userData.phone, Validators.required),
    //   'name': new FormControl(this.userService.userData.name, Validators.required),
    //   'lastName': new FormControl(this.userService.userData.lastName, Validators.required),
    //   'gender': new FormControl(this.userService.userData.gender, Validators.required),
    //   'age': new FormControl(this.userService.userData.age, Validators.required)
    // })
    // this.bodyForm = new FormGroup({
    //   'height': new FormControl(null, Validators.required),
    //   'weight': new FormControl(null, Validators.required),
    //   'target': new FormControl(this.targets[0], Validators.required),
    //   'job': new FormControl(this.jobs[0], Validators.required)
    // })
    // this.passwordForm = new FormGroup({
    //   'oldPassword': new FormControl(null, Validators.required),
    //   'password': new FormControl(null, Validators.required),
    //   'repeatPassword': new FormControl(null, [Validators.required, this.passValidator.bind(this)]),
    // })
    
    // console.log(this.userService.userData);
  }

  // onSubmitProfileForm() {
  //   this.userService.userData.email = this.profileForm.value.email;
  //   this.userService.userData.phone = this.profileForm.value.phone;
  //   this.userService.userData.name = this.profileForm.value.name;
  //   this.userService.userData.lastName = this.profileForm.value.lastName;
  //   this.userService.userData.gender = this.profileForm.value.gender;
  //   this.userService.userData.age = this.profileForm.value.age;
  //   console.log(this.userService.userData);
    
  // }

  // onSubmitBodyForm() {
  //   this.userService.userData.weight = this.bodyForm.value.weight;
  //   this.userService.userData.height = this.bodyForm.value.height;
  //   this.userService.userData.target = this.bodyForm.value.target;
  //   this.userService.userData.job = this.bodyForm.value.job;
  // }

  // onSubmitPasswordForm() {
  //   let res = this.userService.checkPassword(this.userService.userData.id, this.passwordForm.value.oldPassword); 
  //   if( res.status === 200 ){
  //     this.message = res.message;
  //   } else {
  //     this.message = null;
  //     this.passwordErr = res.message;
  //   }
  // }

  // passValidator(control: FormControl) : {[s: string]: boolean} {
  //   if(this.newPass !== control.value) {
  //     return {'passNotMatch': true};
  //   } else {
  //     return null;
  //   }
  // }

}
