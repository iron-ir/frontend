import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() sidebarClosed: boolean;
  menuItems = [
    {
      title: 'داشبورد',
      icon: 'fa-list',
      link: '/dashboard'
    },
    // {
    //   title: 'کاربران',
    //   icon: 'fa-users',
    //   link: '/dashboard/users',
    //   submenu: [
    //     {
    //       title: 'افزودن کاربر',
    //       link: '/dashboard/users/add-user'
    //     },
    //     {
    //       title: 'لیست کاربران',
    //       link: '/dashboard/users/user-list'
    //     }
    //   ]
    // },
    {
      title: 'پروفایل',
      icon: 'fa-user',
      link: '/dashboard/profile',
      submenu: [
        {
          title: 'تغییر پسورد',
          link: '/dashboard/profile/change-pass'
        }
      ]
    },
  ];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
