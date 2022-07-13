import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialityFormComponent } from './confidentiality-form.component';

describe('ConfidentialityFormComponent', () => {
  let component: ConfidentialityFormComponent;
  let fixture: ComponentFixture<ConfidentialityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidentialityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
