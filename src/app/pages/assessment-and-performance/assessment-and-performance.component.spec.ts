import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAndPerformanceComponent } from './assessment-and-performance.component';

describe('AssessmentAndPerformanceComponent', () => {
  let component: AssessmentAndPerformanceComponent;
  let fixture: ComponentFixture<AssessmentAndPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentAndPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentAndPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
