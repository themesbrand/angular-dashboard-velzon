import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTerminateRequestComponent } from './view-terminate-request.component';

describe('ViewTerminateRequestComponent', () => {
  let component: ViewTerminateRequestComponent;
  let fixture: ComponentFixture<ViewTerminateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTerminateRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTerminateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
