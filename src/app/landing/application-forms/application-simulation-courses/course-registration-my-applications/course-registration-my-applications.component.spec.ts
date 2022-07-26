import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegistrationMyApplicationsComponent } from './course-registration-my-applications.component';

describe('CourseRegistrationMyApplicationsComponent', () => {
  let component: CourseRegistrationMyApplicationsComponent;
  let fixture: ComponentFixture<CourseRegistrationMyApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRegistrationMyApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRegistrationMyApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
