import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationCourseSetupComponent } from './simulation-course-setup.component';

describe('SimulationCourseSetupComponent', () => {
  let component: SimulationCourseSetupComponent;
  let fixture: ComponentFixture<SimulationCourseSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationCourseSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationCourseSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
