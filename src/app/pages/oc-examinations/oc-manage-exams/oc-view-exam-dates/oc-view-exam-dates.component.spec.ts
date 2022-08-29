import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcViewExamDatesComponent } from './oc-view-exam-dates.component';

describe('OcViewExamDatesComponent', () => {
  let component: OcViewExamDatesComponent;
  let fixture: ComponentFixture<OcViewExamDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcViewExamDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcViewExamDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
