import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationRefundManagementComponent } from './simulation-refund-management.component';

describe('SimulationRefundManagementComponent', () => {
  let component: SimulationRefundManagementComponent;
  let fixture: ComponentFixture<SimulationRefundManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationRefundManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationRefundManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
