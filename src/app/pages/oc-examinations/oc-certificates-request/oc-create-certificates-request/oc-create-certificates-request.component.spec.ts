import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcCreateCertificatesRequestComponent } from './oc-create-certificates-request.component';

describe('OcCreateCertificatesRequestComponent', () => {
  let component: OcCreateCertificatesRequestComponent;
  let fixture: ComponentFixture<OcCreateCertificatesRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcCreateCertificatesRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcCreateCertificatesRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
