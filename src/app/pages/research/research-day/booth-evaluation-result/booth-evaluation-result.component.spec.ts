import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothEvaluationResultComponent } from './booth-evaluation-result.component';

describe('BoothEvaluationResultComponent', () => {
  let component: BoothEvaluationResultComponent;
  let fixture: ComponentFixture<BoothEvaluationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoothEvaluationResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoothEvaluationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
