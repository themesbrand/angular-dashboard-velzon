import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumReviewComponent } from './curriculum-review.component';

describe('CurriculumReviewComponent', () => {
  let component: CurriculumReviewComponent;
  let fixture: ComponentFixture<CurriculumReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
