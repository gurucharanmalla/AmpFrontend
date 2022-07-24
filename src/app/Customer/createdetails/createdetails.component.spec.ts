import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedetailsComponent } from './createdetails.component';

describe('CreatedetailsComponent', () => {
  let component: CreatedetailsComponent;
  let fixture: ComponentFixture<CreatedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
