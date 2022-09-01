import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcCreateAppealComponent } from './oc-create-appeal.component';

describe('OcCreateAppealComponent', () => {
  let component: OcCreateAppealComponent;
  let fixture: ComponentFixture<OcCreateAppealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcCreateAppealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcCreateAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
