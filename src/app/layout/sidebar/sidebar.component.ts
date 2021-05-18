import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';

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
    {
      title: 'پروفایل',
      icon: 'fa-user',
      link: '/dashboard/profile',
      submenu: [
        {
          title: 'سوابق کاری',
          link: '/dashboard/profile/education'
        },
        {
          title: 'سوابق تحصیلی',
          link: '/dashboard/profile/education'
        },
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
