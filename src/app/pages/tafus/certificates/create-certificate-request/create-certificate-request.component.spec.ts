import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCertificateRequestComponent } from './create-certificate-request.component';

describe('CreateCertificateRequestComponent', () => {
  let component: CreateCertificateRequestComponent;
  let fixture: ComponentFixture<CreateCertificateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCertificateRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCertificateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
