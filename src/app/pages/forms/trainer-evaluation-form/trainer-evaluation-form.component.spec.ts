import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerEvaluationFormComponent } from './trainer-evaluation-form.component';

describe('TrainerEvaluationFormComponent', () => {
  let component: TrainerEvaluationFormComponent;
  let fixture: ComponentFixture<TrainerEvaluationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerEvaluationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerEvaluationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
