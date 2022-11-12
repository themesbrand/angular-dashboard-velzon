import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramAssessmentComponent } from './new-program-assessment.component';

describe('NewProgramAssessmentComponent', () => {
  let component: NewProgramAssessmentComponent;
  let fixture: ComponentFixture<NewProgramAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
