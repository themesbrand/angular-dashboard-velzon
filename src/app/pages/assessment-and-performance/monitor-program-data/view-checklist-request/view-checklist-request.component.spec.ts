import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChecklistRequestComponent } from './view-checklist-request.component';

describe('ViewChecklistRequestComponent', () => {
  let component: ViewChecklistRequestComponent;
  let fixture: ComponentFixture<ViewChecklistRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChecklistRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChecklistRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
