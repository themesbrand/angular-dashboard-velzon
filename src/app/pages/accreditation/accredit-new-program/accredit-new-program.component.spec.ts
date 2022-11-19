import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditNewProgramComponent } from './accredit-new-program.component';

describe('AccreditNewProgramComponent', () => {
  let component: AccreditNewProgramComponent;
  let fixture: ComponentFixture<AccreditNewProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditNewProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditNewProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
