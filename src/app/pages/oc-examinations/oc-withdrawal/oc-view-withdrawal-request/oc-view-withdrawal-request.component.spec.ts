import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcViewWithdrawalRequestComponent } from './oc-view-withdrawal-request.component';

describe('OcViewWithdrawalRequestComponent', () => {
  let component: OcViewWithdrawalRequestComponent;
  let fixture: ComponentFixture<OcViewWithdrawalRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcViewWithdrawalRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcViewWithdrawalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
