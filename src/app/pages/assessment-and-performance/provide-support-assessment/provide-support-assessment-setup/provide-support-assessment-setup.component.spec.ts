import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideSupportAssessmentSetupComponent } from './provide-support-assessment-setup.component';

describe('ProvideSupportAssessmentSetupComponent', () => {
  let component: ProvideSupportAssessmentSetupComponent;
  let fixture: ComponentFixture<ProvideSupportAssessmentSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvideSupportAssessmentSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideSupportAssessmentSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
