import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationMatchingComponent } from './evaluation-matching.component';

describe('EvaluationMatchingComponent', () => {
  let component: EvaluationMatchingComponent;
  let fixture: ComponentFixture<EvaluationMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationMatchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
