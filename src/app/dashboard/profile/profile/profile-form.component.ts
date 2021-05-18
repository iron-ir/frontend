import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from 'src/app/shared/user/user.service';
import {User} from '../../../shared/user/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit, OnDestroy {
  genders = ['male', 'female'];
  message: string = null;
  success: boolean;
  userData: User= new User();
  tempSub:Subscription;

  constructor(private acRoute: ActivatedRoute, public userService: UserService) { }

  ngOnInit(): void {
    this.userData = this.userService.userData;
    this.tempSub = this.userService.userDataObservable.subscribe(res => {
      this.userData = res;
    })
  }

  submitForm(f: NgForm) {
    this.userService.updateUserProfile().subscribe(res => {
      console.log(res);
      this.message = res.message;
      this.success = res.success;
      this.userService.userData = this.userData;
      this.userService.userDataObservable.emit(this.userData);
    })
  }


  ngOnDestroy() {
    this.tempSub.unsubscribe();
  }

}
