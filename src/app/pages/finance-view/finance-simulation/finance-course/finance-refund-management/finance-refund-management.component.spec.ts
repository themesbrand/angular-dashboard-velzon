import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceRefundManagementComponent } from './finance-refund-management.component';

describe('FinanceRefundManagementComponent', () => {
  let component: FinanceRefundManagementComponent;
  let fixture: ComponentFixture<FinanceRefundManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceRefundManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceRefundManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
