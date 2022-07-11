import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogProcedureComponent } from './log-procedure.component';

describe('LogProcedureComponent', () => {
  let component: LogProcedureComponent;
  let fixture: ComponentFixture<LogProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogProcedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
