import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  searchQuary = '';

  constructor(private userService: UserService, private router: Router, private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onDeleteUser(id: number){
    this.userService.deleteUser(id);
    this.users = this.userService.users;
  }

  onEditUser(id: string){
    this.router.navigate(['../add-user'], {relativeTo: this.acRoute, fragment: 'edit' ,queryParams: {id: id}});
  }
  
}
