import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateProcedureComponent } from './allocate-procedure.component';

describe('AllocateProcedureComponent', () => {
  let component: AllocateProcedureComponent;
  let fixture: ComponentFixture<AllocateProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocateProcedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
