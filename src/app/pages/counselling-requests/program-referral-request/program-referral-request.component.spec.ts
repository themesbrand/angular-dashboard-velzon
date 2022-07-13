import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramReferralRequestComponent } from './program-referral-request.component';

describe('ProgramReferralRequestComponent', () => {
  let component: ProgramReferralRequestComponent;
  let fixture: ComponentFixture<ProgramReferralRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramReferralRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramReferralRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
