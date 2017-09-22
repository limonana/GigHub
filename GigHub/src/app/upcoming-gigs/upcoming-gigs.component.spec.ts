import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingGigsComponent } from './upcoming-gigs.component';

describe('UpcomingGigsComponent', () => {
  let component: UpcomingGigsComponent;
  let fixture: ComponentFixture<UpcomingGigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingGigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
