import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionInterviewComponent } from './admission-interview.component';

describe('AdmissionInterviewComponent', () => {
  let component: AdmissionInterviewComponent;
  let fixture: ComponentFixture<AdmissionInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
