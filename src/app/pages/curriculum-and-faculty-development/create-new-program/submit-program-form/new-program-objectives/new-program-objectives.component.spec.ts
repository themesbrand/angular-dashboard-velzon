import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramObjectivesComponent } from './new-program-objectives.component';

describe('NewProgramObjectivesComponent', () => {
  let component: NewProgramObjectivesComponent;
  let fixture: ComponentFixture<NewProgramObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramObjectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
