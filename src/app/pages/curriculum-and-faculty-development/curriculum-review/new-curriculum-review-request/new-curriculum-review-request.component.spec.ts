import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCurriculumReviewRequestComponent } from './new-curriculum-review-request.component';

describe('NewCurriculumReviewRequestComponent', () => {
  let component: NewCurriculumReviewRequestComponent;
  let fixture: ComponentFixture<NewCurriculumReviewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCurriculumReviewRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCurriculumReviewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
