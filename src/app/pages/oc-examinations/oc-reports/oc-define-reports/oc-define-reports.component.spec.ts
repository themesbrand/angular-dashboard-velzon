import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcDefineReportsComponent } from './oc-define-reports.component';

describe('OcDefineReportsComponent', () => {
  let component: OcDefineReportsComponent;
  let fixture: ComponentFixture<OcDefineReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcDefineReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcDefineReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
