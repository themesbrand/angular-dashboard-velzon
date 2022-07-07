import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsForEvaluationComponent } from './tools-for-evaluation.component';

describe('ToolsForEvaluationComponent', () => {
  let component: ToolsForEvaluationComponent;
  let fixture: ComponentFixture<ToolsForEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsForEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsForEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
