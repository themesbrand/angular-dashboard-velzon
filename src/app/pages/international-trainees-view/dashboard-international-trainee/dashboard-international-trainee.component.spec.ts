import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInternationalTraineeComponent } from './dashboard-international-trainee.component';

describe('DashboardInternationalTraineeComponent', () => {
  let component: DashboardInternationalTraineeComponent;
  let fixture: ComponentFixture<DashboardInternationalTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInternationalTraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInternationalTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
