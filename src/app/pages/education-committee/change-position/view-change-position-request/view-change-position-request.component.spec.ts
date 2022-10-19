import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChangePositionRequestComponent } from './view-change-position-request.component';

describe('ViewChangePositionRequestComponent', () => {
  let component: ViewChangePositionRequestComponent;
  let fixture: ComponentFixture<ViewChangePositionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChangePositionRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChangePositionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
