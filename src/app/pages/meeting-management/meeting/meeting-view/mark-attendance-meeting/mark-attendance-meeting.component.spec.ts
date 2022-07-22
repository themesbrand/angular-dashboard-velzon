import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAttendanceMeetingComponent } from './mark-attendance-meeting.component';

describe('MarkAttendanceMeetingComponent', () => {
  let component: MarkAttendanceMeetingComponent;
  let fixture: ComponentFixture<MarkAttendanceMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkAttendanceMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkAttendanceMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
