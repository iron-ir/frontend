import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from 'src/app/shared/user/user.service';
import {Subscription} from 'rxjs';
import {Education} from '../../../shared/user/education.model';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html'
})
export class EducationFormComponent implements OnInit, OnDestroy {
  genders = ['male', 'female'];
  message: string = null;
  success: boolean;
  education: Education = new Education();
  tempSub:Subscription;

  constructor(private acRoute: ActivatedRoute, public userService: UserService) { }

  ngOnInit(): void {
    // this.userData = this.userService.userData;
    // this.tempSub = this.userService.userDataObservable.subscribe(res => {
    //   this.userData = res;
    // })
  }

  submitForm(f: NgForm) {
    // this.userService.updateUserProfile().subscribe(res => {
    //   console.log(res);
    //   this.message = res.message;
    //   this.success = res.success;
    //   this.userService.userData = this.userData;
    //   this.userService.userDataObservable.emit(this.userData);
    // })
  }


  ngOnDestroy() {
    this.tempSub.unsubscribe();
  }

}
