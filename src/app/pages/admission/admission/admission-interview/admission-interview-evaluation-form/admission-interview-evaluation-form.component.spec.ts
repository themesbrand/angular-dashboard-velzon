import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionInterviewEvaluationFormComponent } from './admission-interview-evaluation-form.component';

describe('AdmissionInterviewEvaluationFormComponent', () => {
  let component: AdmissionInterviewEvaluationFormComponent;
  let fixture: ComponentFixture<AdmissionInterviewEvaluationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionInterviewEvaluationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionInterviewEvaluationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
