import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramRotationsComponent } from './new-program-rotations.component';

describe('NewProgramRotationsComponent', () => {
  let component: NewProgramRotationsComponent;
  let fixture: ComponentFixture<NewProgramRotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramRotationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramRotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
