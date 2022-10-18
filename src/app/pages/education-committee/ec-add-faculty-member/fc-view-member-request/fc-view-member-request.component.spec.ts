import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcViewMemberRequestComponent } from './fc-view-member-request.component';

describe('FcViewMemberRequestComponent', () => {
  let component: FcViewMemberRequestComponent;
  let fixture: ComponentFixture<FcViewMemberRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcViewMemberRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcViewMemberRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
