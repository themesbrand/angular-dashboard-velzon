import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCertificationTwoComponent } from './verify-certification-two.component';

describe('VerifyCertificationTwoComponent', () => {
  let component: VerifyCertificationTwoComponent;
  let fixture: ComponentFixture<VerifyCertificationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyCertificationTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCertificationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
