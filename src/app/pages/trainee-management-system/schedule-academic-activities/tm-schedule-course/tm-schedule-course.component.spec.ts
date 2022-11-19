import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmScheduleCourseComponent } from './tm-schedule-course.component';

describe('TmScheduleCourseComponent', () => {
  let component: TmScheduleCourseComponent;
  let fixture: ComponentFixture<TmScheduleCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmScheduleCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmScheduleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
