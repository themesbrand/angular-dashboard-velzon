import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramRotationsAddRotationComponent } from './new-program-rotations-add-rotation.component';

describe('NewProgramRotationsAddRotationComponent', () => {
  let component: NewProgramRotationsAddRotationComponent;
  let fixture: ComponentFixture<NewProgramRotationsAddRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramRotationsAddRotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramRotationsAddRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
