import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChangePositionRequestComponent } from './new-change-position-request.component';

describe('NewChangePositionRequestComponent', () => {
  let component: NewChangePositionRequestComponent;
  let fixture: ComponentFixture<NewChangePositionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChangePositionRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChangePositionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
