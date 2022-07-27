import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationWorkshopOrderFoodComponent } from './simulation-workshop-order-food.component';

describe('SimulationWorkshopOrderFoodComponent', () => {
  let component: SimulationWorkshopOrderFoodComponent;
  let fixture: ComponentFixture<SimulationWorkshopOrderFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationWorkshopOrderFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationWorkshopOrderFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
