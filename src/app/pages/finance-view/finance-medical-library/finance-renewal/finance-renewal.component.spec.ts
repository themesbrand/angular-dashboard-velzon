import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceRenewalComponent } from './finance-renewal.component';

describe('FinanceRenewalComponent', () => {
  let component: FinanceRenewalComponent;
  let fixture: ComponentFixture<FinanceRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceRenewalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
