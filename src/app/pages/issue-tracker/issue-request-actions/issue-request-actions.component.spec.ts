import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueRequestActionsComponent } from './issue-request-actions.component';

describe('IssueRequestActionsComponent', () => {
  let component: IssueRequestActionsComponent;
  let fixture: ComponentFixture<IssueRequestActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueRequestActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueRequestActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
