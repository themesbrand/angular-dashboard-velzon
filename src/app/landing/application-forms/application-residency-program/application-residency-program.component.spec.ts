import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationResidencyProgramComponent } from './application-residency-program.component';

describe('ApplicationResidencyProgramComponent', () => {
  let component: ApplicationResidencyProgramComponent;
  let fixture: ComponentFixture<ApplicationResidencyProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationResidencyProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationResidencyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
