import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantRecidencyProgramApplicationsComponent } from './applicant-recidency-program-applications.component';

describe('ApplicantRecidencyProgramApplicationsComponent', () => {
  let component: ApplicantRecidencyProgramApplicationsComponent;
  let fixture: ComponentFixture<ApplicantRecidencyProgramApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantRecidencyProgramApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantRecidencyProgramApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
