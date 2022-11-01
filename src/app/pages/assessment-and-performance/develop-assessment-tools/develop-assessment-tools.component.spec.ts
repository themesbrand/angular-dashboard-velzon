import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopAssessmentToolsComponent } from './develop-assessment-tools.component';

describe('DevelopAssessmentToolsComponent', () => {
  let component: DevelopAssessmentToolsComponent;
  let fixture: ComponentFixture<DevelopAssessmentToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopAssessmentToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopAssessmentToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
