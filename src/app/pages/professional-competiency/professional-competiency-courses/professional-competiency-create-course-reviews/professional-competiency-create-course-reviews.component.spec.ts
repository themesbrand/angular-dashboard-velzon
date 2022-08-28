import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCompetiencyCreateCourseReviewsComponent } from './professional-competiency-create-course-reviews.component';

describe('ProfessionalCompetiencyCreateCourseReviewsComponent', () => {
  let component: ProfessionalCompetiencyCreateCourseReviewsComponent;
  let fixture: ComponentFixture<ProfessionalCompetiencyCreateCourseReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCompetiencyCreateCourseReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCompetiencyCreateCourseReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
