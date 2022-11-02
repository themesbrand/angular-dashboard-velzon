import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAssessmentReviewTeamComponent } from './modify-assessment-review-team.component';

describe('ModifyAssessmentReviewTeamComponent', () => {
  let component: ModifyAssessmentReviewTeamComponent;
  let fixture: ComponentFixture<ModifyAssessmentReviewTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAssessmentReviewTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAssessmentReviewTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
