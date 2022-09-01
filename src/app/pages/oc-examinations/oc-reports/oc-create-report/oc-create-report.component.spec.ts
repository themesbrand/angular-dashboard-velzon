import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcCreateReportComponent } from './oc-create-report.component';

describe('OcCreateReportComponent', () => {
  let component: OcCreateReportComponent;
  let fixture: ComponentFixture<OcCreateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcCreateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcCreateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
