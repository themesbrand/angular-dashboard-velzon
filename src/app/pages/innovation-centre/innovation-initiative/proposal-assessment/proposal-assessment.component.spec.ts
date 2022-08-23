import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalAssessmentComponent } from './proposal-assessment.component';

describe('ProposalAssessmentComponent', () => {
  let component: ProposalAssessmentComponent;
  let fixture: ComponentFixture<ProposalAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
