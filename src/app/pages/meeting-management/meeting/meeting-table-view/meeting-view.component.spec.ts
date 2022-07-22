import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingTableViewComponent } from './meeting-view.component';

describe('MeetingViewComponent', () => {
  let component: MeetingTableViewComponent;
  let fixture: ComponentFixture<MeetingTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
