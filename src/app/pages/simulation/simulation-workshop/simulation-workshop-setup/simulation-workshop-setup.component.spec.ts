import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationWorkshopSetupComponent } from './simulation-workshop-setup.component';

describe('SimulationWorkshopSetupComponent', () => {
  let component: SimulationWorkshopSetupComponent;
  let fixture: ComponentFixture<SimulationWorkshopSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationWorkshopSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationWorkshopSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
