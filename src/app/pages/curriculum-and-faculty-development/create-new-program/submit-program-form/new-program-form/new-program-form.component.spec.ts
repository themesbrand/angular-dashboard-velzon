import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramFormComponent } from './new-program-form.component';

describe('NewProgramFormComponent', () => {
  let component: NewProgramFormComponent;
  let fixture: ComponentFixture<NewProgramFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
