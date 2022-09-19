import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDayRewardWinnersComponent } from './research-day-reward-winners.component';

describe('ResearchDayRewardWinnersComponent', () => {
  let component: ResearchDayRewardWinnersComponent;
  let fixture: ComponentFixture<ResearchDayRewardWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchDayRewardWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchDayRewardWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
