import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsEmployerComponent } from './dashboards-employer.component';

describe('DashboardsEmployerComponent', () => {
  let component: DashboardsEmployerComponent;
  let fixture: ComponentFixture<DashboardsEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardsEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
