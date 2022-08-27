import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCompetiencyCoursesComponent } from './professional-competiency-courses.component';

describe('ProfessionalCompetiencyCoursesComponent', () => {
  let component: ProfessionalCompetiencyCoursesComponent;
  let fixture: ComponentFixture<ProfessionalCompetiencyCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCompetiencyCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCompetiencyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
