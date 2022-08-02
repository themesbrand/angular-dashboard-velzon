import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionScheduleInterviewComponent } from './admission-schedule-interview.component';

describe('AdmissionScheduleInterviewComponent', () => {
  let component: AdmissionScheduleInterviewComponent;
  let fixture: ComponentFixture<AdmissionScheduleInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionScheduleInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionScheduleInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
