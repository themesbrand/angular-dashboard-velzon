import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegistrationPageTwoComponent } from './course-registration-page-two.component';

describe('CourseRegistrationPageTwoComponent', () => {
  let component: CourseRegistrationPageTwoComponent;
  let fixture: ComponentFixture<CourseRegistrationPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRegistrationPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRegistrationPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
