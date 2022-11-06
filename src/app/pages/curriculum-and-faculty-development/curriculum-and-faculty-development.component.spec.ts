import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumAndFacultyDevelopmentComponent } from './curriculum-and-faculty-development.component';

describe('CurriculumAndFacultyDevelopmentComponent', () => {
  let component: CurriculumAndFacultyDevelopmentComponent;
  let fixture: ComponentFixture<CurriculumAndFacultyDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumAndFacultyDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumAndFacultyDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
