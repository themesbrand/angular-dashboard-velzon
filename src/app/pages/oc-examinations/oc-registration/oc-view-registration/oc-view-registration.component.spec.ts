import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcViewRegistrationComponent } from './oc-view-registration.component';

describe('OcViewRegistrationComponent', () => {
  let component: OcViewRegistrationComponent;
  let fixture: ComponentFixture<OcViewRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcViewRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcViewRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
