import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramDailyAssignmentsComponent } from './new-program-daily-assignments.component';

describe('NewProgramDailyAssignmentsComponent', () => {
  let component: NewProgramDailyAssignmentsComponent;
  let fixture: ComponentFixture<NewProgramDailyAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramDailyAssignmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramDailyAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
