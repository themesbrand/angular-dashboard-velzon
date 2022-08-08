import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmrDashboardMiniMedicalRecordComponent } from './mmr-dashboard-mini-medical-record.component';

describe('MmrDashboardMiniMedicalRecordComponent', () => {
  let component: MmrDashboardMiniMedicalRecordComponent;
  let fixture: ComponentFixture<MmrDashboardMiniMedicalRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmrDashboardMiniMedicalRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmrDashboardMiniMedicalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
