import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramProceduresComponent } from './new-program-procedures.component';

describe('NewProgramProceduresComponent', () => {
  let component: NewProgramProceduresComponent;
  let fixture: ComponentFixture<NewProgramProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramProceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
