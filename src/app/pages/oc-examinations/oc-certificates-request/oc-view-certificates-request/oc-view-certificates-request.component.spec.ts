import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcViewCertificatesRequestComponent } from './oc-view-certificates-request.component';

describe('OcViewCertificatesRequestComponent', () => {
  let component: OcViewCertificatesRequestComponent;
  let fixture: ComponentFixture<OcViewCertificatesRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcViewCertificatesRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcViewCertificatesRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
