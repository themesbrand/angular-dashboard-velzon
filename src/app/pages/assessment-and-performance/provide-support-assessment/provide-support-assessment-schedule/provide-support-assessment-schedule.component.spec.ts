import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideSupportAssessmentScheduleComponent } from './provide-support-assessment-schedule.component';

describe('ProvideSupportAssessmentScheduleComponent', () => {
  let component: ProvideSupportAssessmentScheduleComponent;
  let fixture: ComponentFixture<ProvideSupportAssessmentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvideSupportAssessmentScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideSupportAssessmentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
