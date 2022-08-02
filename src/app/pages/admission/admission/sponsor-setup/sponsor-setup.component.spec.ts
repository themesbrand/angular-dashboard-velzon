import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorSetupComponent } from './sponsor-setup.component';

describe('SponsorSetupComponent', () => {
  let component: SponsorSetupComponent;
  let fixture: ComponentFixture<SponsorSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
