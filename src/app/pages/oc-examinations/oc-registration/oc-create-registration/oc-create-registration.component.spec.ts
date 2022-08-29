import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcCreateRegistrationComponent } from './oc-create-registration.component';

describe('OcCreateRegistrationComponent', () => {
  let component: OcCreateRegistrationComponent;
  let fixture: ComponentFixture<OcCreateRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcCreateRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcCreateRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
