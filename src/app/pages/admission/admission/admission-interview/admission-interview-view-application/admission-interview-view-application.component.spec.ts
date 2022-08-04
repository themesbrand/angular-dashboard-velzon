import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionInterviewViewApplicationComponent } from './admission-interview-view-application.component';

describe('AdmissionInterviewViewApplicationComponent', () => {
  let component: AdmissionInterviewViewApplicationComponent;
  let fixture: ComponentFixture<AdmissionInterviewViewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionInterviewViewApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionInterviewViewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
