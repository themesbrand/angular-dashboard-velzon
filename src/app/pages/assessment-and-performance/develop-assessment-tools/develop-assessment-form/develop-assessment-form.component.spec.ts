import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopAssessmentFormComponent } from './develop-assessment-form.component';

describe('DevelopAssessmentFormComponent', () => {
  let component: DevelopAssessmentFormComponent;
  let fixture: ComponentFixture<DevelopAssessmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopAssessmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopAssessmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
