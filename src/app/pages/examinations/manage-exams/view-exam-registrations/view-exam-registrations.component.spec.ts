import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExamRegistrationsComponent } from './view-exam-registrations.component';

describe('ViewExamRegistrationsComponent', () => {
  let component: ViewExamRegistrationsComponent;
  let fixture: ComponentFixture<ViewExamRegistrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExamRegistrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExamRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
