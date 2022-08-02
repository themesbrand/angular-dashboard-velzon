import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionViewInterviewResultComponent } from './admission-view-interview-result.component';

describe('AdmissionViewInterviewResultComponent', () => {
  let component: AdmissionViewInterviewResultComponent;
  let fixture: ComponentFixture<AdmissionViewInterviewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionViewInterviewResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionViewInterviewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
