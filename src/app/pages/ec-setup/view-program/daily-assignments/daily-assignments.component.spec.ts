import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAssignmentsComponent } from './daily-assignments.component';

describe('DailyAssignmentsComponent', () => {
  let component: DailyAssignmentsComponent;
  let fixture: ComponentFixture<DailyAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyAssignmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
