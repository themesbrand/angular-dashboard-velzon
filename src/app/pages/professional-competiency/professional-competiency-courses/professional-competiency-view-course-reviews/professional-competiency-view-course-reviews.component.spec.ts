import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCompetiencyViewCourseReviewsComponent } from './professional-competiency-view-course-reviews.component';

describe('ProfessionalCompetiencyViewCourseReviewsComponent', () => {
  let component: ProfessionalCompetiencyViewCourseReviewsComponent;
  let fixture: ComponentFixture<ProfessionalCompetiencyViewCourseReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCompetiencyViewCourseReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCompetiencyViewCourseReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
