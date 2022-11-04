import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAsCompletedChecklistRequestComponent } from './mark-as-completed-checklist-request.component';

describe('MarkAsCompletedChecklistRequestComponent', () => {
  let component: MarkAsCompletedChecklistRequestComponent;
  let fixture: ComponentFixture<MarkAsCompletedChecklistRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkAsCompletedChecklistRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkAsCompletedChecklistRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
