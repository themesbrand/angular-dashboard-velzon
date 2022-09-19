import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDayIncentivesForJudgesComponent } from './research-day-incentives-for-judges.component';

describe('ResearchDayIncentivesForJudgesComponent', () => {
  let component: ResearchDayIncentivesForJudgesComponent;
  let fixture: ComponentFixture<ResearchDayIncentivesForJudgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchDayIncentivesForJudgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchDayIncentivesForJudgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
