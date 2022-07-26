import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationCourseComponent } from './simulation-course.component';

describe('SimulationCourseComponent', () => {
  let component: SimulationCourseComponent;
  let fixture: ComponentFixture<SimulationCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
