import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcNewMemberRequestComponent } from './fc-new-member-request.component';

describe('FcNewMemberRequestComponent', () => {
  let component: FcNewMemberRequestComponent;
  let fixture: ComponentFixture<FcNewMemberRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcNewMemberRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcNewMemberRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
