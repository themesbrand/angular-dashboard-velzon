import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumReviewRequestViewComponent } from './curriculum-review-request-view.component';

describe('CurriculumReviewRequestViewComponent', () => {
  let component: CurriculumReviewRequestViewComponent;
  let fixture: ComponentFixture<CurriculumReviewRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumReviewRequestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumReviewRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
