import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAndConfirmRotationCurriculumComponent } from './review-and-confirm-rotation-curriculum.component';

describe('ReviewAndConfirmRotationCurriculumComponent', () => {
  let component: ReviewAndConfirmRotationCurriculumComponent;
  let fixture: ComponentFixture<ReviewAndConfirmRotationCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAndConfirmRotationCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAndConfirmRotationCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
