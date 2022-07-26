import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegistrationSelectorPageOneComponent } from './course-registration-selector-page-one.component';

describe('CourseRegistrationSelectorPageOneComponent', () => {
  let component: CourseRegistrationSelectorPageOneComponent;
  let fixture: ComponentFixture<CourseRegistrationSelectorPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRegistrationSelectorPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRegistrationSelectorPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
