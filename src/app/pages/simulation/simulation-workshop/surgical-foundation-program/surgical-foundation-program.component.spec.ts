import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalFoundationProgramComponent } from './surgical-foundation-program.component';

describe('SurgicalFoundationProgramComponent', () => {
  let component: SurgicalFoundationProgramComponent;
  let fixture: ComponentFixture<SurgicalFoundationProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgicalFoundationProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgicalFoundationProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
