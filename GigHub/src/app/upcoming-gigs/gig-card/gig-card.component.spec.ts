/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GigCardComponent } from './gig-card.component';

describe('GigCardComponent', () => {
  let component: GigCardComponent;
  let fixture: ComponentFixture<GigCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
