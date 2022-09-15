import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminationsComponent } from './terminations.component';

describe('TerminationsComponent', () => {
  let component: TerminationsComponent;
  let fixture: ComponentFixture<TerminationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
