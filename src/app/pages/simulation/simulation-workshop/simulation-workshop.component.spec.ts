import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationWorkshopComponent } from './simulation-workshop.component';

describe('SimulationWorkshopComponent', () => {
  let component: SimulationWorkshopComponent;
  let fixture: ComponentFixture<SimulationWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
