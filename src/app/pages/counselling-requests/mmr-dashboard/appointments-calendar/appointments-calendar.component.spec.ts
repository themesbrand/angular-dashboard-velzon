import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentsCalendarComponent } from './appointments-calendar.component';

describe('AppoinmentsCalendarComponent', () => {
  let component: AppoinmentsCalendarComponent;
  let fixture: ComponentFixture<AppoinmentsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentsCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
