import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  genders = ['male', 'female'];
  editeMode = false;
  user: User;

  constructor(private userService: UserService, private router: Router, private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.acRoute.snapshot.fragment === "edit"){
      this.editeMode = true;
      this.user = this.userService.getUser(+this.acRoute.snapshot.queryParams.id);
      console.log(this.user, +this.acRoute.snapshot.queryParams.id);
      
      this.userForm = new FormGroup({
        email: new FormControl(this.user.email, [Validators.required, Validators.email]),
        phone: new FormControl(this.user.phone, Validators.required),
        name: new FormControl(this.user.name, Validators.required),
        lastName: new FormControl(this.user.lastName, Validators.required),
        age: new FormControl(this.user.age, Validators.required),
        gender: new FormControl(this.user.gender, Validators.required),
      });
    } else {
      this.userForm = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, Validators.required),
        name: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        age: new FormControl(null, Validators.required),
        gender: new FormControl(null, Validators.required),
      });
    }
  }

  onAddUser() {
    let newUser = new User(Math.random()*100 ,this.userForm.value.name,this.userForm.value.lastName,this.userForm.value.email);
    newUser.age = this.userForm.value.age;
    newUser.gender = this.userForm.value.gender;
    newUser.phone = this.userForm.value.phone;
    if(this.editeMode){
      newUser.id = this.user.id;
      this.userService.editUser(this.user.id, this.user)
    } else {
      this.userService.addUser(newUser);
    }
    this.router.navigate(['../'], {relativeTo: this.acRoute});
  }

}
