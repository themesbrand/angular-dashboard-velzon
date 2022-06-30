import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationEvaluationFormComponent } from './rotation-evaluation-form.component';

describe('RotationEvaluationFormComponent', () => {
  let component: RotationEvaluationFormComponent;
  let fixture: ComponentFixture<RotationEvaluationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotationEvaluationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotationEvaluationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
