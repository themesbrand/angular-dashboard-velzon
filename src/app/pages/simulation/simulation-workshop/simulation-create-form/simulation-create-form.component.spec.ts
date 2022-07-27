import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationCreateFormComponent } from './simulation-create-form.component';

describe('SimulationCreateFormComponent', () => {
  let component: SimulationCreateFormComponent;
  let fixture: ComponentFixture<SimulationCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
