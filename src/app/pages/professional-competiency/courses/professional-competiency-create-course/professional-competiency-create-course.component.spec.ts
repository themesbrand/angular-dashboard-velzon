import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCompetiencyCreateCourseComponent } from './professional-competiency-create-course.component';

describe('ProfessionalCompetiencyCreateCourseComponent', () => {
  let component: ProfessionalCompetiencyCreateCourseComponent;
  let fixture: ComponentFixture<ProfessionalCompetiencyCreateCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCompetiencyCreateCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCompetiencyCreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
