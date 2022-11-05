import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixMonthAndAnnualEvaluationFormNewComponent } from './six-month-and-annual-evaluation-form-new.component';

describe('SixMonthAndAnnualEvaluationFormNewComponent', () => {
  let component: SixMonthAndAnnualEvaluationFormNewComponent;
  let fixture: ComponentFixture<SixMonthAndAnnualEvaluationFormNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixMonthAndAnnualEvaluationFormNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixMonthAndAnnualEvaluationFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
