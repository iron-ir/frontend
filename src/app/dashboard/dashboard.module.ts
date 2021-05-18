import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordComponent} from './profile/password/password.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {ProfileFormComponent} from './profile/profile/profile-form.component';
import {PanelComponent} from './panel/panel.component';
import {CommonModule} from '@angular/common';
import {GenderPipe} from '../shared/pipes/gender.pipe';
import {FilterPipe} from '../shared/pipes/filter.pipe';
import {EducationFormComponent} from './profile/educarion/education-form.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PasswordComponent,
    ProfileFormComponent,
    EducationFormComponent,
    PanelComponent,
    FilterPipe,
    GenderPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
