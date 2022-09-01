import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcViewReportsComponent } from './oc-view-reports.component';

describe('OcViewReportsComponent', () => {
  let component: OcViewReportsComponent;
  let fixture: ComponentFixture<OcViewReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcViewReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcViewReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
