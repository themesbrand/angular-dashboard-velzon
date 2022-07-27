import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationWorkshopSchedulingComponent } from './simulation-workshop-scheduling.component';

describe('SimulationWorkshopSchedulingComponent', () => {
  let component: SimulationWorkshopSchedulingComponent;
  let fixture: ComponentFixture<SimulationWorkshopSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationWorkshopSchedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationWorkshopSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
