import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {AddUserComponent} from './users/add-user/add-user.component';
import {PasswordComponent} from './profile/password/password.component';
import {ProfileComponent} from './profile/profile.component';
import {PanelComponent} from './panel/panel.component';
// import {UsersComponent} from './users/users.component';
// import {UserListComponent} from './users/user-list/user-list.component';
import {ProfileFormComponent} from './profile/profile/profile-form.component';


const routes: Routes = [
    {path: 'profile', component: ProfileComponent, children: [
      {path: 'change-pass', component: PasswordComponent},
      {path: '', component: ProfileFormComponent},
    ]},
    // {path: 'users', component: UsersComponent, children: [
    //   // {path: 'add-user', component: AddUserComponent},
    //   // {path: 'user-list', component: UserListComponent},
    //   // {path: '', component: UserListComponent}
    // ]},
    {path: '', component: PanelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
