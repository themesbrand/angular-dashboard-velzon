import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionSetupEvaluationFormComponent } from './admission-setup-evaluation-form.component';

describe('AdmissionSetupEvaluationFormComponent', () => {
  let component: AdmissionSetupEvaluationFormComponent;
  let fixture: ComponentFixture<AdmissionSetupEvaluationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionSetupEvaluationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionSetupEvaluationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
