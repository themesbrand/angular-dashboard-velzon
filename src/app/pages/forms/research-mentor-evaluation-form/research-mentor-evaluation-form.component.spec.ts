import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchMentorEvaluationFormComponent } from './research-mentor-evaluation-form.component';

describe('ResearchMentorEvaluationFormComponent', () => {
  let component: ResearchMentorEvaluationFormComponent;
  let fixture: ComponentFixture<ResearchMentorEvaluationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchMentorEvaluationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchMentorEvaluationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
