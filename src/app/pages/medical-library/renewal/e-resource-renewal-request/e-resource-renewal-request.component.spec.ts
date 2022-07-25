import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EResourceRenewalRequestComponent } from './e-resource-renewal-request.component';

describe('EResourceRenewalRequestComponent', () => {
  let component: EResourceRenewalRequestComponent;
  let fixture: ComponentFixture<EResourceRenewalRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EResourceRenewalRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EResourceRenewalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
