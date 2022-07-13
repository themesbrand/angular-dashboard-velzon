import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfReferralRequestComponent } from './self-referral-request.component';

describe('SelfRefferalRequestComponent', () => {
  let component: SelfReferralRequestComponent;
  let fixture: ComponentFixture<SelfReferralRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfReferralRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfReferralRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
