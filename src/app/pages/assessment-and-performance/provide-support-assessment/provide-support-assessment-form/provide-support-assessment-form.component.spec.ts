import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideSupportAssessmentFormComponent } from './provide-support-assessment-form.component';

describe('ProvideSupportAssessmentFormComponent', () => {
  let component: ProvideSupportAssessmentFormComponent;
  let fixture: ComponentFixture<ProvideSupportAssessmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvideSupportAssessmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideSupportAssessmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
