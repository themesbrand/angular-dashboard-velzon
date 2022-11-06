import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewProgramFormComponent } from './view-new-program-form.component';

describe('ViewNewProgramFormComponent', () => {
  let component: ViewNewProgramFormComponent;
  let fixture: ComponentFixture<ViewNewProgramFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewProgramFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewProgramFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
