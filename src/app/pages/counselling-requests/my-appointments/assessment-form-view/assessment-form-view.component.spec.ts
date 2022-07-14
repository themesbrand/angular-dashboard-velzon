import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentFormViewComponent } from './assessment-form-view.component';

describe('AssessmentFormViewComponent', () => {
  let component: AssessmentFormViewComponent;
  let fixture: ComponentFixture<AssessmentFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentFormViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
