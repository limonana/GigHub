import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpcomingGigsComponent } from './upcoming-gigs/upcoming-gigs.component';
import { RouterModule, Routes } from '@angular/router';
import { GigCardComponent } from './upcoming-gigs/gig-card/gig-card.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingGigsComponent,
    GigCardComponent,
    NavigationBarComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'upcoming-gigs', component: UpcomingGigsComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
