import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicActivitiesComponent } from './academic-activities.component';

describe('AcademicActivitiesComponent', () => {
  let component: AcademicActivitiesComponent;
  let fixture: ComponentFixture<AcademicActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
