import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCompetiencyViewCourseComponent } from './professional-competiency-view-course.component';

describe('ProfessionalCompetiencyViewCourseComponent', () => {
  let component: ProfessionalCompetiencyViewCourseComponent;
  let fixture: ComponentFixture<ProfessionalCompetiencyViewCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCompetiencyViewCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCompetiencyViewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
