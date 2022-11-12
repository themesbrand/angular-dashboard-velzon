import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramToolsProgramEvaluationComponent } from './new-program-tools-program-evaluation.component';

describe('NewProgramToolsProgramEvaluationComponent', () => {
  let component: NewProgramToolsProgramEvaluationComponent;
  let fixture: ComponentFixture<NewProgramToolsProgramEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramToolsProgramEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramToolsProgramEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
