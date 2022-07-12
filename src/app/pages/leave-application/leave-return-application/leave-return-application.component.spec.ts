import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveReturnApplicationComponent } from './leave-return-application.component';

describe('LeaveReturnApplicationComponent', () => {
  let component: LeaveReturnApplicationComponent;
  let fixture: ComponentFixture<LeaveReturnApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveReturnApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveReturnApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
