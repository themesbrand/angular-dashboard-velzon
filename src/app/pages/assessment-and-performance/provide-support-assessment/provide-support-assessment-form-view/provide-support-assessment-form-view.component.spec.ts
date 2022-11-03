import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideSupportAssessmentFormViewComponent } from './provide-support-assessment-form-view.component';

describe('ProvideSupportAssessmentFormViewComponent', () => {
  let component: ProvideSupportAssessmentFormViewComponent;
  let fixture: ComponentFixture<ProvideSupportAssessmentFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvideSupportAssessmentFormViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideSupportAssessmentFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
