import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAssessmentToolsComponent } from './modify-assessment-tools.component';

describe('ModifyAssessmentToolsComponent', () => {
  let component: ModifyAssessmentToolsComponent;
  let fixture: ComponentFixture<ModifyAssessmentToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAssessmentToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAssessmentToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
