import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditFacultySurveyComponent } from './accredit-faculty-survey.component';

describe('AccreditFacultySurveyComponent', () => {
  let component: AccreditFacultySurveyComponent;
  let fixture: ComponentFixture<AccreditFacultySurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditFacultySurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditFacultySurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
