import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialityFormTwoComponent } from './confidentiality-form-two.component';

describe('ConfidentialityFormTwoComponent', () => {
  let component: ConfidentialityFormTwoComponent;
  let fixture: ComponentFixture<ConfidentialityFormTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidentialityFormTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialityFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
