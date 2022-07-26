import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCourseComponent } from './finance-course.component';

describe('FinanceCourseComponent', () => {
  let component: FinanceCourseComponent;
  let fixture: ComponentFixture<FinanceCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
