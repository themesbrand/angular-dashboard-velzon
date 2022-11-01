import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopAssessmentFormViewComponent } from './develop-assessment-form-view.component';

describe('DevelopAssessmentFormViewComponent', () => {
  let component: DevelopAssessmentFormViewComponent;
  let fixture: ComponentFixture<DevelopAssessmentFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopAssessmentFormViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopAssessmentFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
