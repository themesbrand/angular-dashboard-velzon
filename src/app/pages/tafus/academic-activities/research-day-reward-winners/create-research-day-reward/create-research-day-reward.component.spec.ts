import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResearchDayRewardComponent } from './create-research-day-reward.component';

describe('CreateResearchDayRewardComponent', () => {
  let component: CreateResearchDayRewardComponent;
  let fixture: ComponentFixture<CreateResearchDayRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateResearchDayRewardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResearchDayRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
