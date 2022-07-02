import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationEvaluationFormComponent } from './presentation-evaluation-form.component';

describe('PresentationEvaluationFormComponent', () => {
  let component: PresentationEvaluationFormComponent;
  let fixture: ComponentFixture<PresentationEvaluationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationEvaluationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationEvaluationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
