import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationFacilitiesForRentComponent } from './simulation-facilities-for-rent.component';

describe('SimulationFacilitiesForRentComponent', () => {
  let component: SimulationFacilitiesForRentComponent;
  let fixture: ComponentFixture<SimulationFacilitiesForRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationFacilitiesForRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationFacilitiesForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
