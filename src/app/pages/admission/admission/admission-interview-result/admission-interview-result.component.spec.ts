import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionInterviewResultComponent } from './admission-interview-result.component';

describe('AdmissionInterviewResultComponent', () => {
  let component: AdmissionInterviewResultComponent;
  let fixture: ComponentFixture<AdmissionInterviewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionInterviewResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionInterviewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
