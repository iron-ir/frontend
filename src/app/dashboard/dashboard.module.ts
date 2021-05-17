import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordComponent} from './profile/password/password.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {ProfileFormComponent} from './profile/profile/profile-form.component';
// import {AddUserComponent} from './users/add-user/add-user.component';
import {PanelComponent} from './panel/panel.component';
// import {UsersComponent} from './users/users.component';
// import {UserListComponent} from './users/user-list/user-list.component';
import {CommonModule} from '@angular/common';
import {GenderPipe} from '../shared/pipes/gender.pipe';
import {FilterPipe} from '../shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    ProfileComponent,
    PasswordComponent,
    ProfileFormComponent,
    PanelComponent,
    // UsersComponent,
    // AddUserComponent,
    // UserListComponent,
    FilterPipe,
    GenderPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // InlineSVGModule
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
