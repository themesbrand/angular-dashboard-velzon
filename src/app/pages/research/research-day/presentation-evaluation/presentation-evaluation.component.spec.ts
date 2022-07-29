import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationEvaluationComponent } from './presentation-evaluation.component';

describe('PresentationEvaluationComponent', () => {
  let component: PresentationEvaluationComponent;
  let fixture: ComponentFixture<PresentationEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
