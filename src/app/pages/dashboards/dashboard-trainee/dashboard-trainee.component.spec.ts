import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTraineeComponent } from './dashboard-trainee.component';

describe('DashboardTraineeComponent', () => {
  let component: DashboardTraineeComponent;
  let fixture: ComponentFixture<DashboardTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
