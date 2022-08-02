import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipSectionInterviewResultComponent } from './scholarship-section-interview-result.component';

describe('ScholarshipSectionInterviewResultComponent', () => {
  let component: ScholarshipSectionInterviewResultComponent;
  let fixture: ComponentFixture<ScholarshipSectionInterviewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipSectionInterviewResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipSectionInterviewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
