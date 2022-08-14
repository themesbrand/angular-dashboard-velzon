import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamDatesComponent } from './create-exam-dates.component';

describe('CreateExamDatesComponent', () => {
  let component: CreateExamDatesComponent;
  let fixture: ComponentFixture<CreateExamDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
