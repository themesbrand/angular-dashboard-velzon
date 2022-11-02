import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAssessmentFormComponent } from './modify-assessment-form.component';

describe('ModifyAssessmentFormComponent', () => {
  let component: ModifyAssessmentFormComponent;
  let fixture: ComponentFixture<ModifyAssessmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAssessmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAssessmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
