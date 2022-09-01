import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcReportsComponent } from './oc-reports.component';

describe('OcReportsComponent', () => {
  let component: OcReportsComponent;
  let fixture: ComponentFixture<OcReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
