import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorProgramDataComponent } from './monitor-program-data.component';

describe('MonitorProgramDataComponent', () => {
  let component: MonitorProgramDataComponent;
  let fixture: ComponentFixture<MonitorProgramDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorProgramDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorProgramDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
