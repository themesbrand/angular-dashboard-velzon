import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfReferralRequestFormComponent } from './self-referral-request-form.component';

describe('SelfRefferalRequestFormComponent', () => {
  let component: SelfReferralRequestFormComponent;
  let fixture: ComponentFixture<SelfReferralRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfReferralRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfReferralRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
