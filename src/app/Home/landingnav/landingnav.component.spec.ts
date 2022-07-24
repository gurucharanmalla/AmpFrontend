import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingnavComponent } from './landingnav.component';

describe('LandingnavComponent', () => {
  let component: LandingnavComponent;
  let fixture: ComponentFixture<LandingnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
