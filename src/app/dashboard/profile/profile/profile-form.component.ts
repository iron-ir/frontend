import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profileForm : FormGroup;
  genders = ['male', 'female'];
  message: string = null;
  str = " Reza"

  constructor(private acRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'email': new FormControl(this.userService.userData.email, [Validators.required, Validators.email]),
      'phone': new FormControl(this.userService.userData.phone_number, Validators.required),
      'name': new FormControl(this.userService.userData.first_name, Validators.required),
      'lastName': new FormControl(this.userService.userData.last_name, Validators.required),
      'gender': new FormControl(this.userService.userData.gender, Validators.required),
      'age': new FormControl(this.userService.userData.birth_date, Validators.required)
    })
  }

  onSubmitProfileForm() {
    this.userService.userData.email = this.profileForm.value.email;
    this.userService.userData.phone_number = this.profileForm.value.phone;
    this.userService.userData.first_name = this.profileForm.value.name;
    this.userService.userData.last_name = this.profileForm.value.lastName;
    this.userService.userData.gender = this.profileForm.value.gender;
    this.userService.userData.birth_date = this.profileForm.value.age;
    console.log(this.userService.userData);

  }

}
