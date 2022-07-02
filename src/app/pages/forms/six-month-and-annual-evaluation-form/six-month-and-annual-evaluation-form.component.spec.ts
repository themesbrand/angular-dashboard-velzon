import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixMonthAndAnnualEvaluationFormComponent } from './six-month-and-annual-evaluation-form.component';

describe('SixMonthAndAnnualEvaluationFormComponent', () => {
  let component: SixMonthAndAnnualEvaluationFormComponent;
  let fixture: ComponentFixture<SixMonthAndAnnualEvaluationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixMonthAndAnnualEvaluationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixMonthAndAnnualEvaluationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
