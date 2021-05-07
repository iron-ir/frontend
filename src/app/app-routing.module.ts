import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CityCouncilCandidateComponent} from './city-council-candidate/city-council-candidate.component';
import {CandidateProfileComponent} from './candidate-profile/candidate-profile.component';
import {PresidentCandidatesComponent} from './president-candidates/president-candidates.component';
import {NewsComponent} from './news/news.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'president', component: PresidentCandidatesComponent},
  {path: 'president/:id', component: CandidateProfileComponent},
  {path: 'city-council', component: CityCouncilCandidateComponent},
  {path: 'city-council/:stateId', component: CityCouncilCandidateComponent},
  {path: 'city-council/detail/:id', component: CandidateProfileComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
