import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideSupportAssessmentComponent } from './provide-support-assessment.component';

describe('ProvideSupportAssessmentComponent', () => {
  let component: ProvideSupportAssessmentComponent;
  let fixture: ComponentFixture<ProvideSupportAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvideSupportAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideSupportAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
