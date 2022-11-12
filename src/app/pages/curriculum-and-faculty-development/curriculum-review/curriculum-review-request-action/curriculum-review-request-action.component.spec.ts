import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumReviewRequestActionComponent } from './curriculum-review-request-action.component';

describe('CurriculumReviewRequestActionComponent', () => {
  let component: CurriculumReviewRequestActionComponent;
  let fixture: ComponentFixture<CurriculumReviewRequestActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumReviewRequestActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumReviewRequestActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
