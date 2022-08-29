import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcWithdrawalRequestComponent } from './oc-withdrawal-request.component';

describe('OcWithdrawalRequestComponent', () => {
  let component: OcWithdrawalRequestComponent;
  let fixture: ComponentFixture<OcWithdrawalRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcWithdrawalRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcWithdrawalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
