import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramReferralRequestFormComponent } from './program-referral-request-form.component';

describe('ProgramReferralRequestFormComponent', () => {
  let component: ProgramReferralRequestFormComponent;
  let fixture: ComponentFixture<ProgramReferralRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramReferralRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramReferralRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
