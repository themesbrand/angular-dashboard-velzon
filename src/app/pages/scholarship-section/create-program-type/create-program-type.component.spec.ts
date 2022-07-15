import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgramTypeComponent } from './create-program-type.component';

describe('CreateProgramTypeComponent', () => {
  let component: CreateProgramTypeComponent;
  let fixture: ComponentFixture<CreateProgramTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProgramTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProgramTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
