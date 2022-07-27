import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationCourseCreateFormComponent } from './simulation-course-create-form.component';

describe('SimulationCourseCreateFormComponent', () => {
  let component: SimulationCourseCreateFormComponent;
  let fixture: ComponentFixture<SimulationCourseCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationCourseCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationCourseCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
