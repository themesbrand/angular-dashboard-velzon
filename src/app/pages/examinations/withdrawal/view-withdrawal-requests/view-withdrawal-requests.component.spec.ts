import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWithdrawalRequestsComponent } from './view-withdrawal-requests.component';

describe('ViewWithdrawalRequestsComponent', () => {
  let component: ViewWithdrawalRequestsComponent;
  let fixture: ComponentFixture<ViewWithdrawalRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWithdrawalRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWithdrawalRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
