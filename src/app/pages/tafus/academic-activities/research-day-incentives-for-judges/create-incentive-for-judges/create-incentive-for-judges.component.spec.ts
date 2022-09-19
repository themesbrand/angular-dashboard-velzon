import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIncentiveForJudgesComponent } from './create-incentive-for-judges.component';

describe('CreateIncentiveForJudgesComponent', () => {
  let component: CreateIncentiveForJudgesComponent;
  let fixture: ComponentFixture<CreateIncentiveForJudgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIncentiveForJudgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIncentiveForJudgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
