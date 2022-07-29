import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationEvaluationResultComponent } from './presentation-evaluation-result.component';

describe('PresentationEvaluationResultComponent', () => {
  let component: PresentationEvaluationResultComponent;
  let fixture: ComponentFixture<PresentationEvaluationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationEvaluationResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationEvaluationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
