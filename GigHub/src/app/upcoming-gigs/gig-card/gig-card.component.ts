import { Component, Input } from '@angular/core';
import { Gig } from 'app/model/Gig';

@Component({
  selector: 'app-gig-card',
  templateUrl: './gig-card.component.html',
  styleUrls: ['./gig-card.component.scss']
})
export class GigCardComponent {
  @Input() gig: Gig;
  collpseId: string;
  constructor() {
    this.collpseId = Math.random().toString(36).substring(7);
  }
}
