import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionViewCvApplicationComponent } from './admission-view-cv-application.component';

describe('AdmissionViewCvApplicationComponent', () => {
  let component: AdmissionViewCvApplicationComponent;
  let fixture: ComponentFixture<AdmissionViewCvApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionViewCvApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionViewCvApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
