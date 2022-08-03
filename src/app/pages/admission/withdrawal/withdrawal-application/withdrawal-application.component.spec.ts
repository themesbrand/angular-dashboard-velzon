import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalApplicationComponent } from './withdrawal-application.component';

describe('WithdrawalApplicationComponent', () => {
  let component: WithdrawalApplicationComponent;
  let fixture: ComponentFixture<WithdrawalApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawalApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
