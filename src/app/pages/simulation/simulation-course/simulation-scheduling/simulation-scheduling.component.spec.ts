import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationSchedulingComponent } from './simulation-scheduling.component';

describe('SimulationSchedulingComponent', () => {
  let component: SimulationSchedulingComponent;
  let fixture: ComponentFixture<SimulationSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationSchedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
