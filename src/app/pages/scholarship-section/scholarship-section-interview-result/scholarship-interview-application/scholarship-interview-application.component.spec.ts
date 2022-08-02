import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipInterviewApplicationComponent } from './scholarship-interview-application.component';

describe('ScholarshipInterviewApplicationComponent', () => {
  let component: ScholarshipInterviewApplicationComponent;
  let fixture: ComponentFixture<ScholarshipInterviewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipInterviewApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipInterviewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
