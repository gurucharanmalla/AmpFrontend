import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTicketsComponent } from './ad-tickets.component';

describe('AdTicketsComponent', () => {
  let component: AdTicketsComponent;
  let fixture: ComponentFixture<AdTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
