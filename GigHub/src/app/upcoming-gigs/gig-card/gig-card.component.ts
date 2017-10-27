import { Component, OnInit, Input } from '@angular/core';
import { Gig } from '../../model/Gig'; // don't like this

@Component({
  selector: 'app-gig-card',
  templateUrl: './gig-card.component.html',
  styleUrls: ['./gig-card.component.css']
})
export class GigCardComponent implements OnInit {
  @Input() gig: Gig;
  collpseId: string;
  constructor() {
    this.collpseId = Math.random().toString(36).substring(7);
  }

  ngOnInit() {
  }

}
