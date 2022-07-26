import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegistrationPageOneComponent } from './course-registration-page-one.component';

describe('CourseRegistrationPageOneComponent', () => {
  let component: CourseRegistrationPageOneComponent;
  let fixture: ComponentFixture<CourseRegistrationPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRegistrationPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRegistrationPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
