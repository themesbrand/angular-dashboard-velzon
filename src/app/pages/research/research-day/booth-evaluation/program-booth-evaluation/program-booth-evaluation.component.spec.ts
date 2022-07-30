import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramBoothEvaluationComponent } from './program-booth-evaluation.component';

describe('ProgramBoothEvaluationComponent', () => {
  let component: ProgramBoothEvaluationComponent;
  let fixture: ComponentFixture<ProgramBoothEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramBoothEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramBoothEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
