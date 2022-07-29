import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramNominationComponent } from './program-nomination.component';

describe('ProgramNominationComponent', () => {
  let component: ProgramNominationComponent;
  let fixture: ComponentFixture<ProgramNominationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramNominationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramNominationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
