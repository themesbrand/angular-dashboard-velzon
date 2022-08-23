import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalAssessmentResultsComponent } from './proposal-assessment-results.component';

describe('ProposalAssessmentResultsComponent', () => {
  let component: ProposalAssessmentResultsComponent;
  let fixture: ComponentFixture<ProposalAssessmentResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalAssessmentResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalAssessmentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
