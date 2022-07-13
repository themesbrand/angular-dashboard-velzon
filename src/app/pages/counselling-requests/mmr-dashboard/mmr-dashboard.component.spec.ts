import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmrDashboardComponent } from './mmr-dashboard.component';

describe('MmrDashboardComponent', () => {
  let component: MmrDashboardComponent;
  let fixture: ComponentFixture<MmrDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmrDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
