import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTrainningEvaluationReportComponent } from './in-trainning-evaluation-report.component';

describe('InTrainningEvaluationReportComponent', () => {
  let component: InTrainningEvaluationReportComponent;
  let fixture: ComponentFixture<InTrainningEvaluationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTrainningEvaluationReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InTrainningEvaluationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
