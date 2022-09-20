import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationFacilitiesAgreementSubmissionComponent } from './simulation-facilities-agreement-submission.component';

describe('SimulationFacilitiesAgreementSubmissionComponent', () => {
  let component: SimulationFacilitiesAgreementSubmissionComponent;
  let fixture: ComponentFixture<SimulationFacilitiesAgreementSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationFacilitiesAgreementSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationFacilitiesAgreementSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
