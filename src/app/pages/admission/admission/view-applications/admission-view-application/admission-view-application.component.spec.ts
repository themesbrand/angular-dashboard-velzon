import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionViewApplicationComponent } from './admission-view-application.component';

describe('AdmissionViewApplicationComponent', () => {
  let component: AdmissionViewApplicationComponent;
  let fixture: ComponentFixture<AdmissionViewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionViewApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionViewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
