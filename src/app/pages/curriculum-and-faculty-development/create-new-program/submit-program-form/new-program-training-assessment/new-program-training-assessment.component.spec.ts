import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramTrainingAssessmentComponent } from './new-program-training-assessment.component';

describe('NewProgramTrainingAssessmentComponent', () => {
  let component: NewProgramTrainingAssessmentComponent;
  let fixture: ComponentFixture<NewProgramTrainingAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramTrainingAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramTrainingAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
