import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalAddCommentsComponent } from './withdrawal-add-comments.component';

describe('WithdrawalAddCommentsComponent', () => {
  let component: WithdrawalAddCommentsComponent;
  let fixture: ComponentFixture<WithdrawalAddCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawalAddCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalAddCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
