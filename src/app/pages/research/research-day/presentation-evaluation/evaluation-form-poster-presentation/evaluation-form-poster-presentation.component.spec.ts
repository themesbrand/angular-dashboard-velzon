import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationFormPosterPresentationComponent } from './evaluation-form-poster-presentation.component';

describe('EvaluationFormPosterPresentationComponent', () => {
  let component: EvaluationFormPosterPresentationComponent;
  let fixture: ComponentFixture<EvaluationFormPosterPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationFormPosterPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationFormPosterPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
