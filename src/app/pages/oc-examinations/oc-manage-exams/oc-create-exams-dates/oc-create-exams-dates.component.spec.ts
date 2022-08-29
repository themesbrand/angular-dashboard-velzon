import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcCreateExamsDatesComponent } from './oc-create-exams-dates.component';

describe('OcCreateExamsDatesComponent', () => {
  let component: OcCreateExamsDatesComponent;
  let fixture: ComponentFixture<OcCreateExamsDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcCreateExamsDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcCreateExamsDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
