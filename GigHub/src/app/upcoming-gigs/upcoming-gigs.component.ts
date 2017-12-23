import { Component, OnInit } from '@angular/core';
import { Gig } from '../model/Gig';
const MockGigs: Gig[] = [
  { Artist: 'developer', Location: 'BGU LAB', Time: 'TODAY 6:00 PM', Genre: '', Description: 'dasasdas',
  ImageURL: '' },
  { Artist: 'taylor swift', Location: 'US Califronia bla bla Hall', Time: 'TODAY 6:00 PM', Genre: '', 
  Description: 'fdsfdsfds', ImageURL: 'https://i.scdn.co/image/54969dd8c24693d05c8445c0de4ad74a719f1d65' },
  { Artist: 'taylor swift', Location: 'US Califronia bla bla Hall', Time: 'TODAY 6:00 PM', Genre: '', 
  Description: 'fddsfdfff ddddddddd', ImageURL: 'https://i.scdn.co/image/54969dd8c24693d05c8445c0de4ad74a719f1d65' },
  { Artist: 'taylor swift', Location: 'US Califronia bla bla Hall', Time: 'TODAY 6:00 PM', Genre: '', 
  Description: 'fdsfd fdsfds sfdsf', ImageURL: 'https://i.scdn.co/image/54969dd8c24693d05c8445c0de4ad74a719f1d65' },
  { Artist: 'taylor swift', Location: 'US Califronia bla bla Hall', Time: 'TODAY 6:00 PM', Genre: '', 
  Description: ' dfsdfds sdfsdg fsd', ImageURL: 'https://i.scdn.co/image/54969dd8c24693d05c8445c0de4ad74a719f1d65' },
  { Artist: 'taylor swift', Location: 'US Califronia bla bla Hall', Time: 'TODAY 6:00 PM', Genre: '', 
  Description: 'fsdfds fdsds fe sd ', ImageURL: 'https://i.scdn.co/image/54969dd8c24693d05c8445c0de4ad74a719f1d65' },
  { Artist: 'taylor swift', Location: 'US Califronia bla bla Hall', Time: 'TODAY 6:00 PM', Genre: '', 
  Description: `some multiline long description
  ngfdkjngkjfd lgknlkfdnmglkdf
  ngkdnflkgndf lkdnglkdfn`, 
  ImageURL: 'https://i.scdn.co/image/54969dd8c24693d05c8445c0de4ad74a719f1d65' },
];

@Component({
  selector: 'app-upcoming-gigs',
  templateUrl: './upcoming-gigs.component.html',
  styleUrls: ['./upcoming-gigs.component.scss']
})


export class UpcomingGigsComponent {
  gigs: Gig[];
  constructor() {
    this.gigs = MockGigs;
  }
}
