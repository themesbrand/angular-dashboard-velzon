import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramFormActionsComponent } from './new-program-form-actions.component';

describe('NewProgramFormActionsComponent', () => {
  let component: NewProgramFormActionsComponent;
  let fixture: ComponentFixture<NewProgramFormActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramFormActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramFormActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
