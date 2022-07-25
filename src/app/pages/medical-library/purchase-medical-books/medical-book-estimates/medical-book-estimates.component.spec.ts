import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBookEstimatesComponent } from './medical-book-estimates.component';

describe('MedicalBookEstimatesComponent', () => {
  let component: MedicalBookEstimatesComponent;
  let fixture: ComponentFixture<MedicalBookEstimatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalBookEstimatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalBookEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
