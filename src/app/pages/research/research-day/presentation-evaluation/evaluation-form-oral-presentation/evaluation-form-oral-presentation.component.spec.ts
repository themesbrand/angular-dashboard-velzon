import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationFormOralPresentationComponent } from './evaluation-form-oral-presentation.component';

describe('EvaluationFormOralPresentationComponent', () => {
  let component: EvaluationFormOralPresentationComponent;
  let fixture: ComponentFixture<EvaluationFormOralPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationFormOralPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationFormOralPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
