import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantRecidencyProgramApplicationsViewComponent } from './applicant-recidency-program-applications-view.component';

describe('ApplicantRecidencyProgramApplicationsViewComponent', () => {
  let component: ApplicantRecidencyProgramApplicationsViewComponent;
  let fixture: ComponentFixture<ApplicantRecidencyProgramApplicationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantRecidencyProgramApplicationsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantRecidencyProgramApplicationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
