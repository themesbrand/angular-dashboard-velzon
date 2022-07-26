import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationViewApplicationsComponent } from './simulation-view-applications.component';

describe('SimulationViewApplicationsComponent', () => {
  let component: SimulationViewApplicationsComponent;
  let fixture: ComponentFixture<SimulationViewApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationViewApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationViewApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
