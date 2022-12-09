import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIssueRequestComponent } from './view-issue-request.component';

describe('ViewIssueRequestComponent', () => {
  let component: ViewIssueRequestComponent;
  let fixture: ComponentFixture<ViewIssueRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIssueRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIssueRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
