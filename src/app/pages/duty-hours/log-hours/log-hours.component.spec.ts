import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogHoursComponent } from './log-hours.component';

describe('LogHoursComponent', () => {
  let component: LogHoursComponent;
  let fixture: ComponentFixture<LogHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
