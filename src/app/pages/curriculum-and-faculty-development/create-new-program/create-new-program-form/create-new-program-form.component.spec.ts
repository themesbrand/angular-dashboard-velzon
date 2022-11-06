import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewProgramFormComponent } from './create-new-program-form.component';

describe('CreateNewProgramFormComponent', () => {
  let component: CreateNewProgramFormComponent;
  let fixture: ComponentFixture<CreateNewProgramFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewProgramFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewProgramFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
