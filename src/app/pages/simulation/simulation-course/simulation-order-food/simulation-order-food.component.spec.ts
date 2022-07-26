import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationOrderFoodComponent } from './simulation-order-food.component';

describe('SimulationOrderFoodComponent', () => {
  let component: SimulationOrderFoodComponent;
  let fixture: ComponentFixture<SimulationOrderFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationOrderFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationOrderFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
