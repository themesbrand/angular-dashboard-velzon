import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAcademicActivitiesComponent } from './schedule-academic-activities.component';

describe('ScheduleAcademicActivitiesComponent', () => {
  let component: ScheduleAcademicActivitiesComponent;
  let fixture: ComponentFixture<ScheduleAcademicActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleAcademicActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAcademicActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
