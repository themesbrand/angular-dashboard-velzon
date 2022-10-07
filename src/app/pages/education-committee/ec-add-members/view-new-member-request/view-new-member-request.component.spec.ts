import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewMemberRequestComponent } from './view-new-member-request.component';

describe('ViewNewMemberRequestComponent', () => {
  let component: ViewNewMemberRequestComponent;
  let fixture: ComponentFixture<ViewNewMemberRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewMemberRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewMemberRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
