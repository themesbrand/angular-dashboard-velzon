import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothEvaluationComponent } from './booth-evaluation.component';

describe('BoothEvaluationComponent', () => {
  let component: BoothEvaluationComponent;
  let fixture: ComponentFixture<BoothEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoothEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoothEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
