import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProgramFormComponent } from './submit-program-form.component';

describe('SubmitProgramFormComponent', () => {
  let component: SubmitProgramFormComponent;
  let fixture: ComponentFixture<SubmitProgramFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitProgramFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitProgramFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
