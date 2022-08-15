import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCertificationComponent } from './verify-certification.component';

describe('VerifyCertificationComponent', () => {
  let component: VerifyCertificationComponent;
  let fixture: ComponentFixture<VerifyCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
