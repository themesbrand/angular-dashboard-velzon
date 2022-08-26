import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInterimProposalComponent } from './form-interim-proposal.component';

describe('FormInterimProposalComponent', () => {
  let component: FormInterimProposalComponent;
  let fixture: ComponentFixture<FormInterimProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInterimProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInterimProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
