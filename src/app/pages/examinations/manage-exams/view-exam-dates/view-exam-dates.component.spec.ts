import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExamDatesComponent } from './view-exam-dates.component';

describe('ViewExamDatesComponent', () => {
  let component: ViewExamDatesComponent;
  let fixture: ComponentFixture<ViewExamDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExamDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExamDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
