import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProgramListComponent } from './submit-program-list.component';

describe('SubmitProgramListComponent', () => {
  let component: SubmitProgramListComponent;
  let fixture: ComponentFixture<SubmitProgramListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitProgramListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitProgramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
