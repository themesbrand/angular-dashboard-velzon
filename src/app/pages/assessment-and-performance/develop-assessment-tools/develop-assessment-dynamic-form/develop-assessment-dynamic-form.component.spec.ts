import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopAssessmentDynamicFormComponent } from './develop-assessment-dynamic-form.component';

describe('DevelopAssessmentDynamicFormComponent', () => {
  let component: DevelopAssessmentDynamicFormComponent;
  let fixture: ComponentFixture<DevelopAssessmentDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopAssessmentDynamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopAssessmentDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
