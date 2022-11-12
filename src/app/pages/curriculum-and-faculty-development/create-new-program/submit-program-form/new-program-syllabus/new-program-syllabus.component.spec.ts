import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramSyllabusComponent } from './new-program-syllabus.component';

describe('NewProgramSyllabusComponent', () => {
  let component: NewProgramSyllabusComponent;
  let fixture: ComponentFixture<NewProgramSyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramSyllabusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
