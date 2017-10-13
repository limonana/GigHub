import { Component, OnInit } from '@angular/core';
import { Gig } from '../model/Gig';
const MockGigs: Gig[] = [
  { Artist: 'developer', Location: 'LAB', Time: 'TODAY 6:00 PM', Genre: '', Description: '' },
  { Artist: 'taylor swift', Location: 'US', Time: 'TODAY 6:00 PM', Genre: '', Description: '' }
];

@Component({
  selector: 'app-upcoming-gigs',
  templateUrl: './upcoming-gigs.component.html',
  styleUrls: ['./upcoming-gigs.component.css']
})


export class UpcomingGigsComponent {
  gigs: Gig[];
  constructor() {
    this.gigs = MockGigs;
  }
}
