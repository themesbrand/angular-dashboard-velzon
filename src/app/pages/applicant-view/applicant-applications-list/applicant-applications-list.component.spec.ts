import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantApplicationsListComponent } from './applicant-applications-list.component';

describe('ApplicantApplicationsListComponent', () => {
  let component: ApplicantApplicationsListComponent;
  let fixture: ComponentFixture<ApplicantApplicationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantApplicationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantApplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
