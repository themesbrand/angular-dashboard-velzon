import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcViewRescheduleComponent } from './oc-view-reschedule.component';

describe('OcViewRescheduleComponent', () => {
  let component: OcViewRescheduleComponent;
  let fixture: ComponentFixture<OcViewRescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcViewRescheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcViewRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
