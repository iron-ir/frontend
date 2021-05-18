import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PasswordComponent} from './profile/password/password.component';
import {ProfileComponent} from './profile/profile.component';
import {PanelComponent} from './panel/panel.component';
import {ProfileFormComponent} from './profile/profile/profile-form.component';


const routes: Routes = [
    {path: 'profile', component: ProfileComponent, children: [
      {path: 'change-pass', component: PasswordComponent},
      {path: '', component: ProfileFormComponent},
    ]},
    {path: '', component: PanelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
