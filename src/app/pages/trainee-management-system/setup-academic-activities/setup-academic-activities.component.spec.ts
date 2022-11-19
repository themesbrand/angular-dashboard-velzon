import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAcademicActivitiesComponent } from './setup-academic-activities.component';

describe('SetupAcademicActivitiesComponent', () => {
  let component: SetupAcademicActivitiesComponent;
  let fixture: ComponentFixture<SetupAcademicActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupAcademicActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupAcademicActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
