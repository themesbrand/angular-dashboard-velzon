import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIssueRequestComponent } from './create-issue-request.component';

describe('CreateIssueRequestComponent', () => {
  let component: CreateIssueRequestComponent;
  let fixture: ComponentFixture<CreateIssueRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIssueRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIssueRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
