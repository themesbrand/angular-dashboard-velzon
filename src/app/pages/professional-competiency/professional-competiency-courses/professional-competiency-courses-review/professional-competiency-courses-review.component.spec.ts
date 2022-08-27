import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCompetiencyCoursesReviewComponent } from './professional-competiency-courses-review.component';

describe('ProfessionalCompetiencyCoursesReviewComponent', () => {
  let component: ProfessionalCompetiencyCoursesReviewComponent;
  let fixture: ComponentFixture<ProfessionalCompetiencyCoursesReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCompetiencyCoursesReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCompetiencyCoursesReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
