import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUnmatchedVerificationsComponent } from './view-unmatched-verifications.component';

describe('ViewUnmatchedVerificationsComponent', () => {
  let component: ViewUnmatchedVerificationsComponent;
  let fixture: ComponentFixture<ViewUnmatchedVerificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUnmatchedVerificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUnmatchedVerificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
