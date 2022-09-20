import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSimulationFacilitiesForRentComponent } from './create-simulation-facilities-for-rent.component';

describe('CreateSimulationFacilitiesForRentComponent', () => {
  let component: CreateSimulationFacilitiesForRentComponent;
  let fixture: ComponentFixture<CreateSimulationFacilitiesForRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSimulationFacilitiesForRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSimulationFacilitiesForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
