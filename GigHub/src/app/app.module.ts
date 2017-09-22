import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpcomingGigsComponent } from './upcoming-gigs/upcoming-gigs.component';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingGigsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
