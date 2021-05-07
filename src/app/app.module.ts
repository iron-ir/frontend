import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HeaderComponent} from './layout/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './layout/footer/footer.component';
import {LayoutComponent} from './layout/layout.component';
import {HomeComponent} from './home/home.component';
import {CityCouncilCandidateComponent} from './city-council-candidate/city-council-candidate.component';
import {PresidentCandidatesComponent} from './president-candidates/president-candidates.component';
import {FormsModule} from '@angular/forms';
import {CandidateProfileComponent} from './candidate-profile/candidate-profile.component';
import {NewsComponent} from './news/news.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    ContactUsComponent,
    AboutUsComponent,
    CityCouncilCandidateComponent,
    PresidentCandidatesComponent,
    CandidateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
