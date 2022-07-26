import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSimulationCoursesComponent } from './application-simulation-courses.component';

describe('ApplicationSimulationCoursesComponent', () => {
  let component: ApplicationSimulationCoursesComponent;
  let fixture: ComponentFixture<ApplicationSimulationCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationSimulationCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationSimulationCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
