import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResearchEvaluationComponent } from './form-research-evaluation.component';

describe('FormResearchEvaluationComponent', () => {
  let component: FormResearchEvaluationComponent;
  let fixture: ComponentFixture<FormResearchEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResearchEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResearchEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
