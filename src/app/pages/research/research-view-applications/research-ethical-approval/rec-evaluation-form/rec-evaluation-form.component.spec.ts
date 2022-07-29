import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecEvaluationFormComponent } from './rec-evaluation-form.component';

describe('RecEvaluationFormComponent', () => {
  let component: RecEvaluationFormComponent;
  let fixture: ComponentFixture<RecEvaluationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecEvaluationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecEvaluationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
