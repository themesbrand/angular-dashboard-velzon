import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInterviewerResultComponent } from './view-interviewer-result.component';

describe('ViewInterviewerResultComponent', () => {
  let component: ViewInterviewerResultComponent;
  let fixture: ComponentFixture<ViewInterviewerResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInterviewerResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInterviewerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
