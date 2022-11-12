import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramRequirementsComponent } from './new-program-requirements.component';

describe('NewProgramRequirementsComponent', () => {
  let component: NewProgramRequirementsComponent;
  let fixture: ComponentFixture<NewProgramRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
