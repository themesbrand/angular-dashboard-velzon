import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcCreateRescheduleComponent } from './oc-create-reschedule.component';

describe('OcCreateRescheduleComponent', () => {
  let component: OcCreateRescheduleComponent;
  let fixture: ComponentFixture<OcCreateRescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcCreateRescheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcCreateRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
