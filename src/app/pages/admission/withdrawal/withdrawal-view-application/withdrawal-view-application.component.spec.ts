import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalViewApplicationComponent } from './withdrawal-view-application.component';

describe('WithdrawalViewApplicationComponent', () => {
  let component: WithdrawalViewApplicationComponent;
  let fixture: ComponentFixture<WithdrawalViewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawalViewApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalViewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
