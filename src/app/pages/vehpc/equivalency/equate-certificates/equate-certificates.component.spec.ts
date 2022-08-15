import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquateCertificatesComponent } from './equate-certificates.component';

describe('EquateCertificatesComponent', () => {
  let component: EquateCertificatesComponent;
  let fixture: ComponentFixture<EquateCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquateCertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquateCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
