import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcViewExamRegistrationsComponent } from './oc-view-exam-registrations.component';

describe('OcViewExamRegistrationsComponent', () => {
  let component: OcViewExamRegistrationsComponent;
  let fixture: ComponentFixture<OcViewExamRegistrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcViewExamRegistrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcViewExamRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
