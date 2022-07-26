import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationStandardizedPatientsComponent } from './simulation-standardized-patients.component';

describe('SimulationStandardizedPatientsComponent', () => {
  let component: SimulationStandardizedPatientsComponent;
  let fixture: ComponentFixture<SimulationStandardizedPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationStandardizedPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationStandardizedPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
