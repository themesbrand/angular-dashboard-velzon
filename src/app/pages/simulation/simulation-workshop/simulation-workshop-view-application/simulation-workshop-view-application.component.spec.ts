import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationWorkshopViewApplicationComponent } from './simulation-workshop-view-application.component';

describe('SimulationWorkshopViewApplicationComponent', () => {
  let component: SimulationWorkshopViewApplicationComponent;
  let fixture: ComponentFixture<SimulationWorkshopViewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationWorkshopViewApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationWorkshopViewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
