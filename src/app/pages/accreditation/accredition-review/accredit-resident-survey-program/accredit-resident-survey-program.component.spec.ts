import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditResidentSurveyProgramComponent } from './accredit-resident-survey-program.component';

describe('AccreditResidentSurveyProgramComponent', () => {
  let component: AccreditResidentSurveyProgramComponent;
  let fixture: ComponentFixture<AccreditResidentSurveyProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditResidentSurveyProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditResidentSurveyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
