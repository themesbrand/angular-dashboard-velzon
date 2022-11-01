import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopAssessmentActionFormComponent } from './develop-assessment-action-form.component';

describe('DevelopAssessmentActionFormComponent', () => {
  let component: DevelopAssessmentActionFormComponent;
  let fixture: ComponentFixture<DevelopAssessmentActionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopAssessmentActionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopAssessmentActionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
