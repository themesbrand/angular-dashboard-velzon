import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFinalProposalsComponent } from './form-final-proposals.component';

describe('FormFinalProposalsComponent', () => {
  let component: FormFinalProposalsComponent;
  let fixture: ComponentFixture<FormFinalProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFinalProposalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFinalProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
