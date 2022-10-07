import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemberRequestComponent } from './new-member-request.component';

describe('NewMemberRequestComponent', () => {
  let component: NewMemberRequestComponent;
  let fixture: ComponentFixture<NewMemberRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMemberRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMemberRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
